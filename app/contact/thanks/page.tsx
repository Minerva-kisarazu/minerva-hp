import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactThanksContent from '@/components/ContactThanksContent';

export const metadata: Metadata = {
  title: 'お問い合わせありがとうございます',
  description:
    '学習塾ミネルバへのお問い合わせを受け付けました。面談をご希望の方は日時をご予約いただけます。',
};

export default function ContactThanksPage() {
  return (
    <main id="main">
      <PageHeader title="お問い合わせありがとうございます" />
      <section className="bg-slate-50 py-16 sm:py-24">
        <ContactThanksContent />
      </section>
    </main>
  );
}
