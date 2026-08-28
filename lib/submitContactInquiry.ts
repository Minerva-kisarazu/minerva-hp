import {
  validateContactInquiry,
  type ContactInquiryData,
  type ContactInquiryInput,
} from './contactInquiry';

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export type ContactSubmitResult =
  | { ok: true; inquiry: ContactInquiryData }
  | { ok: true; honeypot: true }
  | { ok: false; status: number; error: string; fieldErrors?: Record<string, string> };

export async function submitContactInquiry(
  body: ContactInquiryInput,
  webAppUrl?: string
): Promise<ContactSubmitResult> {
  if (asTrimmedString(body.website)) {
    return { ok: true, honeypot: true };
  }

  const validated = validateContactInquiry(body);
  if ('errors' in validated) {
    const firstError = Object.values(validated.errors)[0] || '入力内容をご確認ください';
    return { ok: false, status: 400, error: firstError, fieldErrors: validated.errors };
  }

  const inquiry: ContactInquiryData = {
    inquiryId: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ...validated.data,
  };

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
        return {
          ok: false,
          status: 502,
          error: '送信に失敗しました。時間をおいて再度お試しください。',
        };
      }
    } catch (error) {
      console.error('[contact] Failed to forward to Google Sheets', error);
      return {
        ok: false,
        status: 502,
        error: '送信に失敗しました。時間をおいて再度お試しください。',
      };
    }
  } else {
    console.warn('[contact] GOOGLE_SHEETS_WEBAPP_URL is not set. Inquiry accepted in-memory only.', {
      inquiryId: inquiry.inquiryId,
    });
  }

  return { ok: true, inquiry };
}
