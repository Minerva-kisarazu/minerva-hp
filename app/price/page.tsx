import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: '受講料・よくあるご質問',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの受講費（個別指導1対2形式・80分・全て税込表記）と、よくあるご質問。',
};

const courseCounts = ['1講座', '2講座', '3講座', '4講座'] as const;

const priceRows = [
  { grade: '小学生', fees: ['18,700円', '31,900円', '44,000円', '56,100円'], extra: '+12,100円' },
  { grade: '中学一・二年生', fees: ['19,800円', '34,100円', '47,300円', '60,500円'], extra: '+13,200円' },
  { grade: '中学三年生 / 中学受験', fees: ['20,900円', '36,300円', '50,600円', '64,900円'], extra: '+14,300円' },
  { grade: '高校一年生', fees: ['22,000円', '38,500円', '53,900円', '69,300円'], extra: '+15,400円' },
  { grade: '高校二年生', fees: ['23,100円', '40,700円', '57,200円', '73,700円'], extra: '+16,500円' },
  { grade: '高校三年生', fees: ['24,200円', '42,900円', '60,500円', '78,100円'], extra: '+17,600円' },
];

const otherFees = [
  { label: '入塾費', body: '22,000円（税込・初月のみ受講費と合わせて納入）' },
  { label: '教材費', body: '使用するテキスト等の実費を別途納入していただきます。' },
  {
    label: '講習費',
    body: '春期・夏期・冬期の各季節講習は、年間カリキュラム完遂と学力維持のため原則全員参加となり、別途受講費が発生します。',
  },
];

const faqs = [
  {
    question: '普通の個別指導塾と、何が違うんですか？',
    summary:
      '授業で問題を解けるようにするだけでなく、「自分で学べる状態」を作ることを重視しています。',
    detail:
      '授業で分からないところを教えるだけではなく、学習そのものを分析する点が大きな違いです。授業は差がつきやすい英数に特化しますが、自習管理を通じて「5教科すべて」をサポートしています。授業のない日も自習室で理科・社会・国語の進捗チェックと質問対応を行い、授業で2教科の土台を築き、自習室と進度管理で5教科の点数を引き上げます。',
  },
  {
    question: '個別指導だから、料金が高いのではありませんか？',
    summary:
      '料金だけを見ると、一般的な個別指導塾より高く感じられる場合があります。ただし、授業時間だけではなく、授業外の学習まで含めて学習プロセスを支えることが目的です。',
    detail:
      '集団塾に比べれば月謝の額面は高くなります。しかしミネルバの料金には、毎回の学習動作・判断の癖の分析、保護者様への即日指導報告、追加料金なしで毎日使える自習スペースでの5教科の進度管理・質問対応が含まれています。1回80分の授業時間を買うのではなく、「結果を出すための学習環境と管理への投資」と考えていただければ幸いです。',
  },
  {
    question: '入塾するか決めていなくても、体験授業を受けられますか？',
    summary:
      'はい、受けられます。無理な勧誘は一切いたしません。',
    detail:
      'お子さま自身が「ここでやりたい」と納得し、保護者様が指導方針と環境を信頼していただいた場合のみ、お手続きをご案内しております。安心してお申し込みください。',
  },
  {
    question: '他の塾に通いながら、利用することはできますか？',
    summary: '可能です。併用して成果を出している生徒も在籍しています。',
    detail:
      '他塾の教材やカリキュラムにおける「つまずきの原因」をミネルバで分析・修正し、自習室で演習を重ねる通い方です。',
  },
  {
    question: '自習室は、授業がない日も利用できますか？',
    summary:
      'はい。1講座でも受講いただければ、授業日に関わらず開校時間内は毎日無料でご利用いただけます。',
    detail:
      'なお、自習室のみのご利用は承っておりません。授業での分析結果に基づいた課題を定着させる環境のため、原則として週1講座以上の受講をお願いしております。',
  },
  {
    question: '学校の定期テスト対策にも対応していますか？',
    summary: 'はい、木更津市内の学校の定期テストに完全準拠しています。',
    detail:
      'テスト範囲に合わせて、提出必須の学校ワークの進行管理から、出題されやすい単元の確認まで徹底して行います。',
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, summary, detail }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: detail ? `${summary}\n${detail}` : summary,
    },
  })),
};

export default function PricePage() {
  return (
    <main id="main">
      <PageHeader title="受講料・よくあるご質問" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-center leading-relaxed">
            個別指導1対2・80分の料金
          </h2>
          <p className="text-center text-base text-slate-600 mb-8 border-b border-slate-300 pb-5">
            ※表示価格はすべて税込です。
          </p>

          <div className="mb-8 space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p className="font-bold text-slate-900 text-lg sm:text-xl">
              授業だけでなく、日々の学習まで含めてサポートします。
            </p>
            <p>
              授業料には、個別指導だけでなく、学習状況の確認、自習室の利用、学習計画の管理、指導内容の共有などが含まれています。
            </p>
            <p>
              毎月お支払いいただく「総支払額」には、月額受講費と施設費（2,200円/月）がすべて含まれています。1講座でも受講していただければ、自習室は授業日にかかわらず毎日ご利用いただけます。
            </p>
          </div>

          {/* PC：表 */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-300 shadow-sm bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">学年別・講座数別の月額総支払額（税込）</caption>
              <thead>
                <tr className="bg-navy-900 text-white text-sm">
                  <th scope="col" className="px-5 py-4 font-bold">
                    学年
                  </th>
                  {courseCounts.map((count) => (
                    <th key={count} scope="col" className="px-5 py-4 font-bold text-right whitespace-nowrap">
                      {count}
                    </th>
                  ))}
                  <th scope="col" className="px-5 py-4 font-bold text-right whitespace-nowrap">
                    5講座目以降
                    <span className="block text-xs font-medium text-slate-300">1講座につき</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map(({ grade, fees, extra }) => (
                  <tr key={grade} className="border-t border-slate-200 even:bg-slate-50">
                    <th scope="row" className="px-5 py-4 font-bold whitespace-nowrap">
                      {grade}
                    </th>
                    {fees.map((fee, index) => (
                      <td
                        key={courseCounts[index]}
                        className="px-5 py-4 text-right tabular-nums whitespace-nowrap text-base"
                      >
                        {fee}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right tabular-nums whitespace-nowrap text-slate-600 text-base">
                      {extra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* スマホ：カード */}
          <div className="md:hidden space-y-4">
            {priceRows.map(({ grade, fees, extra }) => (
              <article
                key={grade}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5"
              >
                <h3 className="font-bold text-lg mb-4 border-b border-slate-200 pb-2">{grade}</h3>
                <dl className="space-y-2 text-base">
                  {courseCounts.map((count, index) => (
                    <div key={count} className="flex justify-between gap-4">
                      <dt className="text-slate-600">{count}</dt>
                      <dd className="font-bold tabular-nums">{fees[index]}</dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-4 pt-2 border-t border-slate-100 text-slate-600">
                    <dt>5講座目以降（1講座につき）</dt>
                    <dd className="tabular-nums">{extra}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-3 text-orange-700 border-b border-slate-200 pb-3">
              入塾時に必要な費用
            </h3>
            <p className="text-base text-slate-700 mb-6 leading-relaxed">
              入塾後に必要となる費用も、あらかじめ分かりやすくご案内します。
            </p>
            <dl className="space-y-4">
              {otherFees.map(({ label, body }) => (
                <div key={label} className="sm:flex sm:gap-4">
                  <dt className="font-bold whitespace-nowrap sm:w-24 text-base">{label}：</dt>
                  <dd className="text-base text-slate-700 leading-relaxed">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center leading-relaxed border-b border-navy-700 pb-5">
            よくあるご質問（Q&amp;A）
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {faqs.map(({ question, summary, detail }) => (
              <article
                key={question}
                className="bg-navy-800 p-5 sm:p-8 rounded-xl border border-navy-700"
              >
                <h3 className="font-serif text-base sm:text-lg font-bold mb-4 text-orange-400 leading-relaxed">
                  <span className="mr-1">Q：</span>
                  {question}
                </h3>
                <p className="text-base text-slate-100 leading-relaxed font-medium">
                  <span className="mr-1">A：</span>
                  {summary}
                </p>
                {detail && (
                  <p className="mt-3 text-base text-slate-300 leading-relaxed">{detail}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCta heading="料金や授業内容について、まずはお気軽にご相談ください。" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </main>
  );
}
