import { submitContactInquiry } from '../../lib/submitContactInquiry';
import type { ContactInquiryInput } from '../../lib/contactInquiry';

interface Env {
  GOOGLE_SHEETS_WEBAPP_URL?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: ContactInquiryInput;

  try {
    body = (await context.request.json()) as ContactInquiryInput;
  } catch {
    return Response.json({ ok: false, error: '送信データが不正です' }, { status: 400 });
  }

  const result = await submitContactInquiry(body, context.env.GOOGLE_SHEETS_WEBAPP_URL);

  if (!result.ok) {
    return Response.json(
      { ok: false, error: result.error, fieldErrors: result.fieldErrors },
      { status: result.status }
    );
  }

  if ('honeypot' in result) {
    return Response.json({ ok: true });
  }

  return Response.json({ ok: true, inquiry: result.inquiry });
};
