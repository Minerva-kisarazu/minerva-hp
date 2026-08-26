import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: unknown;
  grade?: unknown;
  schoolName?: unknown;
  phone?: unknown;
  consultation?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const toHalfWidth = (value: string) =>
  value
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[ー－―‐−]/g, '-');

const countDigits = (value: string) => (toHalfWidth(value).match(/\d/g) ?? []).length;

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function validate(payload: ContactPayload) {
  const name = asTrimmedString(payload.name);
  const grade = asTrimmedString(payload.grade);
  const schoolName = asTrimmedString(payload.schoolName);
  const phone = asTrimmedString(payload.phone);
  const message = asTrimmedString(payload.message);
  const consultation = Array.isArray(payload.consultation)
    ? payload.consultation.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];

  if (!name) return { error: 'お名前を入力してください' as const };
  if (!grade) return { error: 'お子様の学年を選択してください' as const };

  const phoneDigits = countDigits(phone);
  if (!phone) return { error: '電話番号を入力してください' as const };
  if (phoneDigits < 10 || phoneDigits > 11) {
    return { error: '電話番号は市外局番からの10桁または11桁でご入力ください' as const };
  }
  if (consultation.length === 0) {
    return { error: 'ご相談内容を1つ以上選択してください' as const };
  }

  return {
    data: {
      name,
      grade,
      schoolName,
      phone,
      consultation,
      message,
      submittedAt: new Date().toISOString(),
    },
  };
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: '送信データが不正です' }, { status: 400 });
  }

  // ボット対策の honeypot。人間は触れない想定。
  if (asTrimmedString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const validated = validate(body);
  if ('error' in validated) {
    return NextResponse.json({ ok: false, error: validated.error }, { status: 400 });
  }

  const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!webAppUrl) {
    console.error('[contact] GOOGLE_SHEETS_WEBAPP_URL is not set');
    return NextResponse.json(
      { ok: false, error: '送信設定が完了していません。お手数ですがお電話でご連絡ください。' },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated.data),
      redirect: 'follow',
      cache: 'no-store',
    });

    // Apps Script はリダイレクト後に HTML を返すことがあり、ステータスだけで判断する
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[contact] Google Apps Script error', response.status, detail.slice(0, 500));
      return NextResponse.json(
        { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Failed to forward to Google Sheets', error);
    return NextResponse.json(
      { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
      { status: 502 }
    );
  }
}
