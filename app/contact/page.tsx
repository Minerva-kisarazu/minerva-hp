import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import CtaButton from '@/components/CtaButton';
import { LINE_URL } from '@/app/site-config';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '木更津市金田東の個別指導塾 学習塾ミネルバへのお問い合わせ。料金・指導内容・面談・体験授業についてのご相談を受け付けています。',
};

const flowSteps = [
  {
    title: 'お問い合わせ',
    body: 'フォームからご相談内容をお送りください。',
  },
  {
    title: '面談',
    body: 'お子さまの学習状況やお困りごとを伺い、今後の学習についてご相談します。',
  },
  {
    title: '必要に応じて体験授業',
    body: '体験授業をご希望の場合は、面談で学習状況やご希望を確認したうえでご案内します。',
  },
  {
    title: 'ご検討',
    body: '指導方針や環境がお子さまに合うか、ご家庭でご検討ください。',
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader title="お問い合わせ" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="mb-12 sm:mb-14 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed border-b border-slate-300 pb-5">
              まずは、お子さまの学習についてご相談ください。
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              料金や指導内容についてのご質問、お子さまの学習についてのご相談、資料請求、面談・体験授業についてのお問い合わせを受け付けています。
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              初めての方には、まず面談で、お子さまの現在の学習状況やお困りごとを伺っています。
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              体験授業をご希望の場合も、まずは面談でご希望や学習状況を確認したうえでご案内しています。
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              無理な勧誘は行っておりません。
            </p>
          </div>

          <div className="mb-14 sm:mb-16">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
              お問い合わせ後の流れ
            </h2>
            <ol className="space-y-4">
              {flowSteps.map(({ title, body }, index) => (
                <li
                  key={title}
                  className="flex gap-4 bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold mb-1 text-base sm:text-lg">{title}</h3>
                    <p className="text-base text-slate-700 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ContactForm />

          <div className="mt-14 sm:mt-16 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed border-b border-slate-200 pb-4">
              LINEでもご相談いただけます
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              ちょっとしたご質問やご相談は、LINEからもお気軽にお問い合わせいただけます。
            </p>
            {LINE_URL ? (
              <CtaButton href={LINE_URL} variant="secondary">
                LINEで相談する
              </CtaButton>
            ) : (
              <p className="text-base text-slate-600 leading-relaxed">
                公式LINEのリンク設定後にこちらからご利用いただけます。当面はお電話（
                <a
                  href="tel:0368206929"
                  className="underline underline-offset-2 hover:text-accent-700"
                >
                  03-6820-6929
                </a>
                ）または上記フォームよりお問い合わせください。
              </p>
            )}
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              LINEとお問い合わせフォームは、どちらからでもご相談いただけます。
            </p>
          </div>

          <p className="mt-10 text-center text-sm text-slate-500 leading-relaxed">
            料金の詳細は{' '}
            <Link href="/price" className="underline underline-offset-2 hover:text-accent-700">
              受講料・よくあるご質問
            </Link>{' '}
            でもご確認いただけます。
          </p>
        </div>
      </section>
    </main>
  );
}
