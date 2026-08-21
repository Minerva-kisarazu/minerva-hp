import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '無料体験授業・お問い合わせ',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの無料学習診断レポート付き体験授業（80分）のお申し込み・お問い合わせフォーム。お申し込み後の流れもご確認いただけます。',
};

const steps = [
  {
    title: 'フォーム送信',
    body: '下記フォームより、必要事項を入力して送信してください。',
  },
  {
    title: '日程調整のご連絡',
    body: '2営業日以内にお電話または公式LINEにて、体験授業（80分）の実施日時をご相談させていただきます。',
  },
  {
    title: '個別面談＆体験授業（80分）',
    body: '塾長がお悩みを伺い、実際の個別指導を通じてお子様の学習プロセス（動作・判断の癖・境界線）を精密に分析します。',
  },
  {
    title: '学習診断レポートのお渡し',
    body: '分析結果から判明した「思考停止のポイント」や「今最優先で克服すべき点」をまとめたレポートをお渡しします。',
  },
  {
    title: 'ご検討',
    body: '指導方針や環境がお子様に合うかどうか、ご家庭でじっくりご検討ください。',
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader title="無料体験授業・お問い合わせ" />

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {/* お申し込み後の流れ（離脱を防ぐためフォームの直上に配置） */}
          <div className="mb-16">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
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
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{body}</p>
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
