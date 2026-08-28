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
        <div className="site-container-narrow">
          <div className="mb-12 sm:mb-14 space-y-4">
            <h2 className="section-heading-bordered">
              まずは、お子さまの学習についてご相談ください。
            </h2>
            <p className="body-text">
              料金や指導内容についてのご質問、お子さまの学習についてのご相談、資料請求、面談・体験授業についてのお問い合わせを受け付けています。
            </p>
            <p className="body-text">
              初めての方には、まず面談で、お子さまの現在の学習状況やお困りごとを伺っています。
            </p>
            <p className="body-text">
              体験授業をご希望の場合も、まずは面談でご希望や学習状況を確認したうえでご案内しています。
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              無理な勧誘は行っておりません。
            </p>
          </div>

          <div className="mb-14 sm:mb-16">
            <h2 className="section-heading-bordered text-center">
              お問い合わせ後の流れ
            </h2>
            <ol className="space-y-5">
              {flowSteps.map(({ title, body }, index) => (
                <li
                  key={title}
                  className="card-padded flex gap-5 sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-brand-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif font-bold mb-2 text-lg sm:text-xl text-slate-900">
                      {title}
                    </h3>
                    <p className="body-text">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="card-padded mb-14 sm:mb-16">
            <p className="text-sm sm:text-base font-bold text-brand-900 mb-6 pb-3 border-b border-slate-200">
              フォームで相談する
            </p>
            <ContactForm />
          </div>

          <div className="flex items-center gap-4 mb-8" aria-hidden="true">
            <div className="flex-1 h-px bg-slate-300" />
            <span className="text-sm sm:text-base font-bold text-slate-500 shrink-0">または</span>
            <div className="flex-1 h-px bg-slate-300" />
          </div>

          <div className="card-padded">
            <p className="text-sm sm:text-base font-bold text-brand-900 mb-4 pb-3 border-b border-slate-200">
              LINEで相談する
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed">
              LINEでもご相談いただけます
            </h2>
            <p className="body-text mb-6">
              ちょっとしたご質問やご相談は、LINEからもお気軽にお問い合わせいただけます。
            </p>
            {LINE_URL ? (
              <CtaButton href={LINE_URL} variant="secondary">
                LINEで相談する
              </CtaButton>
            ) : (
              <p className="body-text">
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
            <p className="mt-5 body-text-muted">
              フォームとLINEは、どちらからでもご相談いただけます。
            </p>
          </div>

          <p className="mt-10 text-center body-text-muted">
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
