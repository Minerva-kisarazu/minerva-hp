import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import {
  validateContactInquiry,
  type ContactInquiryData,
  type ContactInquiryInput,
} from '@/lib/contactInquiry';

export const runtime = 'nodejs';

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let body: ContactInquiryInput;

  try {
    body = (await request.json()) as ContactInquiryInput;
  } catch {
    return NextResponse.json({ ok: false, error: '送信データが不正です' }, { status: 400 });
  }

  // ボット対策の honeypot
  if (asTrimmedString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const validated = validateContactInquiry(body);
  if ('errors' in validated) {
    const firstError = Object.values(validated.errors)[0] || '入力内容をご確認ください';
    return NextResponse.json({ ok: false, error: firstError, fieldErrors: validated.errors }, { status: 400 });
  }

  const inquiry: ContactInquiryData = {
    inquiryId: randomUUID(),
    submittedAt: new Date().toISOString(),
    ...validated.data,
  };

  const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;

  if (webAppUrl) {
    try {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
        redirect: 'follow',
        cache: 'no-store',
      });

      if (!response.ok) {
        const detail = await response.text().catch(() => '');
        console.error('[contact] Google Apps Script error', response.status, detail.slice(0, 500));
        return NextResponse.json(
          { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error('[contact] Failed to forward to Google Sheets', error);
      return NextResponse.json(
        { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
        { status: 502 }
      );
    }
  } else {
    // フォーム設計確認用：Sheets 未設定でも受付データは返す（本番では必ず設定すること）
    console.warn('[contact] GOOGLE_SHEETS_WEBAPP_URL is not set. Inquiry accepted in-memory only.', {
      inquiryId: inquiry.inquiryId,
    });
  }

  return NextResponse.json({ ok: true, inquiry });
}
