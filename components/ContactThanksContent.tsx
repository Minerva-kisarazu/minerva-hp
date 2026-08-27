'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import {
  CONTACT_INQUIRY_STORAGE_KEY,
  type ContactInquiryData,
} from '@/lib/contactInquiry';

const TRIAL_INQUIRY_OPTION = '体験授業について相談したい';
const MATERIALS_INQUIRY_OPTION = '資料・パンフレットがほしい';

export default function ContactThanksContent() {
  const [inquiry, setInquiry] = useState<ContactInquiryData | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CONTACT_INQUIRY_STORAGE_KEY);
      if (raw) {
        setInquiry(JSON.parse(raw) as ContactInquiryData);
      }
    } catch {
      setInquiry(null);
    } finally {
      setReady(true);
    }
  }, []);

  const wantsTrial = inquiry?.inquiryTypes?.includes(TRIAL_INQUIRY_OPTION) ?? false;
  const wantsMaterials = inquiry?.inquiryTypes?.includes(MATERIALS_INQUIRY_OPTION) ?? false;

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10 sm:space-y-12">
      <div className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm text-center">
        <svg
          className="mx-auto h-14 w-14 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-6 mb-6">
          お問い合わせを受け付けました
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3">
          内容を確認のうえ、必要に応じてメールまたはお電話にてご連絡いたします。
        </p>
        {ready && inquiry?.inquiryId && (
          <p className="text-sm text-slate-500 leading-relaxed">受付番号：{inquiry.inquiryId}</p>
        )}
      </div>

      {wantsTrial && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed border-b border-slate-200 pb-4">
            体験授業をご希望の方へ
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3">
            体験授業をご希望の場合も、まずは面談でお子さまの学習状況やご希望を伺っています。
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            面談後、必要に応じて体験授業をご案内します。
          </p>
        </div>
      )}

      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed border-b border-slate-200 pb-4">
          面談をご希望の方へ
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3">
          当塾では、初めての方にはまず面談で、お子さまの現在の学習状況やお困りごとを伺っています。
        </p>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
          面談をご希望の方は、下記からご都合のよい日時をご予約いただけます。
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          資料請求のみのご相談など、面談が不要な場合はそのままで問題ありません。
        </p>
        <CtaButton href="/consultation">面談日時を予約する</CtaButton>
      </div>

      {(wantsMaterials || !inquiry) && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed border-b border-slate-200 pb-4">
            資料・パンフレットをご希望の方
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            料金の目安やよくあるご質問は、下記ページでもご確認いただけます。
          </p>
          <CtaButton href="/price" variant="secondary">
            料金・パンフレットを見る
          </CtaButton>
        </div>
      )}

      <div className="text-center space-y-4">
        <p className="text-base text-slate-600 leading-relaxed">
          ご不明な点がございましたら、お電話（
          <a href="tel:0368206929" className="underline underline-offset-2 hover:text-accent-700">
            03-6820-6929
          </a>
          ）でもお問い合わせください。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] text-brand-900 font-bold underline underline-offset-2 hover:text-accent-700"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
