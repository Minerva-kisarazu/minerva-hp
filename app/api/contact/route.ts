import { NextResponse } from 'next/server';
import type { ContactInquiryInput } from '@/lib/contactInquiry';
import { submitContactInquiry } from '@/lib/submitContactInquiry';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: ContactInquiryInput;

  try {
    body = (await request.json()) as ContactInquiryInput;
  } catch {
    return NextResponse.json({ ok: false, error: '送信データが不正です' }, { status: 400 });
  }

  const result = await submitContactInquiry(body, process.env.GOOGLE_SHEETS_WEBAPP_URL);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error, fieldErrors: result.fieldErrors },
      { status: result.status }
    );
  }

  if ('honeypot' in result) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true, inquiry: result.inquiry });
}
