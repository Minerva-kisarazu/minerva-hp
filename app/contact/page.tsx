import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '無料体験授業・お問い合わせ',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの無料学習診断レポート付き体験授業（80分）のお申し込み・お問い合わせフォーム。',
};

const steps = [
  {
    title: 'フォーム送信',
    body: '下記フォームより、必要事項を入力して送信してください。',
  },
  {
    title: '日程調整のご連絡',
    body: '2営業日以内にお電話または公式LINEにて、体験授業（80分）の日時をご相談します。',
  },
  {
    title: '個別面談＆体験授業（80分）',
    body: '教室での個別指導を体験していただきながら、お子さまの学習の様子を確認します。',
  },
  {
    title: '学習診断レポートのお渡し',
    body: '体験授業で確認した内容をもとに、「思考が止まっているポイント」や「今後優先して克服すべき点」をレポートにまとめてお渡しします。',
  },
  {
    title: 'ご検討',
    body: '指導方針や環境がお子さまに合うかどうか、ご家庭でじっくりご検討ください。',
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader title="無料体験授業・お問い合わせ" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="mb-12 sm:mb-14 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed border-b border-slate-300 pb-5">
              まずは、お子さまの「今の学習状況」を一緒に確認します。
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              無料体験授業では、ただ授業を受けていただくだけではありません。
              お子さまの学習の様子を確認し、「何ができていて、どこに改善点があるのか」を一緒に整理します。
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              体験授業を受けたうえで、ご家庭でじっくりご検討ください。
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              無理な勧誘は行っておりません。
            </p>
          </div>

          <div className="mb-14 sm:mb-16">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
              無料学習診断レポート付き体験授業・お申し込み後のステップ
            </h2>
            <ol className="space-y-4">
              {steps.map(({ title, body }, index) => (
                <li
                  key={title}
                  className="flex gap-4 bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl"
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
        </div>
      </section>
    </main>
  );
}
