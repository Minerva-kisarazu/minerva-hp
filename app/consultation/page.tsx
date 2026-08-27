import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaButton from '@/components/CtaButton';
import {
  GOOGLE_CALENDAR_BOOKING_URL,
  GOOGLE_CALENDAR_EMBED_URL,
} from '@/app/site-config';

export const metadata: Metadata = {
  title: '面談予約',
  description:
    '学習塾ミネルバの面談予約。お子さまの学習状況やお困りごとを伺う初回面談のご都合のよい日時をご予約ください。',
};

export default function ConsultationPage() {
  const embedUrl = GOOGLE_CALENDAR_EMBED_URL;
  const bookingUrl = GOOGLE_CALENDAR_BOOKING_URL;

  return (
    <main id="main">
      <PageHeader title="面談予約" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed border-b border-slate-300 pb-5">
              ご都合のよい日時をご予約ください
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              初めての方には、まず面談でお子さまの現在の学習状況やお困りごとを伺っています。
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              体験授業をご希望の場合も、面談で学習状況やご希望を確認したうえでご案内します。
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <iframe
                title="面談予約カレンダー"
                src={embedUrl}
                className="w-full min-h-[600px] sm:min-h-[640px]"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              カレンダーが表示されない場合は、
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent-700"
              >
                こちらから予約ページを開いてください
              </a>
              。
            </p>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed text-center">
            面談予約後の事前アンケートは、別途ご案内します。
          </p>
        </div>
      </section>
    </main>
  );
}
