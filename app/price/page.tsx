import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: '受講料・よくあるご質問',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの受講費（個別指導1対2形式・80分・全て税込表記）と、よくあるご質問。施設費込みの総支払額を学年・講座数ごとに掲載しています。',
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
    question: '「英語と数学しか教えてもらえない」と聞いたのですが本当ですか？',
    summary:
      '授業は差がつきやすい英数に特化しますが、自習管理を通じて「5教科すべて」をサポートしています。',
    detail:
      '個別指導の授業枠では、独学が最も難しく差がつきやすい英語と数学を徹底的に分析指導します。しかし、テストは5教科の勝負です。そのため、授業のない日も生徒を自習室に呼び、理科・社会・国語の学校ワークの進捗チェックを行い、「何をいつまでに進めるべきか」のスケジュール指示と質問対応をいつでも行っています。授業で2教科の土台を築き、自習室と進度管理で5教科すべての点数を引き上げるのがミネルバの体制です。',
  },
  {
    question: '「他の集団塾に比べて料金が高い」という噂を聞いたのですが……。',
    summary:
      '大勢に一律の解説を行う集団塾に比べれば月謝の額面は高くなります。しかし、「提供している価値の密度」が全く異なります。',
    detail:
      'ただ問題の解き方を一方的に教える塾や、隣に座って丸付けをするだけの個別指導塾とは異なり、ミネルバの料金には「プロの眼による毎回の精密な学習動作・判断の癖の分析」「その結果を保護者様へお送りする詳細な即日報告」「追加料金なしで毎日使える、私語厳禁が徹底された静寂な自習スペースでの5教科の進度管理・質問対応」のすべてが含まれています。1回80分の授業時間を買うのではなく、「結果を出すための24時間・365日の学習環境と管理への投資」と考えていただければ、決して高くはないと自負しております。',
  },
  {
    question: '無料体験のあとに、無理な勧誘をされませんか？',
    summary:
      '一切いたしません。お子様自身が「ここでやりたい」と納得し、保護者様が指導方針と環境を信頼していただいた場合のみ、お手続きをご案内しております。安心してお申し込みください。',
    detail: null,
  },
  {
    question: '他塾や通信教育との併用は可能ですか？',
    summary:
      '可能です。他塾の教材やカリキュラムにおける「つまずきの原因」をミネルバで分析・修正し、自習室で演習を重ねるという通い方で成果を出している生徒も在籍しています。',
    detail: null,
  },
  {
    question: '授業を受けずに、自習室だけを利用することはできますか？',
    summary:
      '申し訳ありませんが、自習室のみのご利用は承っておりません。ミネルバの自習室は「授業での精密な分析結果に基づいた課題」を再現・定着させるための訓練環境であるため、原則として週1講座以上の受講をお願いしております。',
    detail: null,
  },
  {
    question: '学校の定期テスト対策は対応してもらえますか？',
    summary:
      '完全に準拠しています。木更津市内の学校のテスト範囲に合わせて、提出必須である学校ワークの進行管理から、出題されやすい単元の境界線分析まで徹底して行います。',
    detail: null,
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

      {/* 受講費のご案内 */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
            受講費のご案内（個別指導1対2形式・80分・全て消費税10%税込表記）
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
            毎月お支払いいただく「総支払額」には、月額受講費と施設費（2,200円/月）がすべて含まれています。1講座でも受講していただければ、自習室は授業日にかかわらず毎日ご利用いただけます。
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-sm bg-white">
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
                        className="px-5 py-4 text-right tabular-nums whitespace-nowrap"
                      >
                        {fee}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right tabular-nums whitespace-nowrap text-slate-600">
                      {extra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500 md:hidden">
            ※ 表は横にスクロールできます。
          </p>

          <div className="mt-12 bg-white p-7 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-6 text-orange-700 border-b border-slate-200 pb-3">
              その他の費用
            </h3>
            <dl className="space-y-4">
              {otherFees.map(({ label, body }) => (
                <div key={label} className="sm:flex sm:gap-4">
                  <dt className="font-bold whitespace-nowrap sm:w-24">{label}：</dt>
                  <dd className="text-slate-700 leading-relaxed">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section className="bg-navy-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-center leading-relaxed border-b border-navy-700 pb-5">
            よくあるご質問（Q&amp;A）
          </h2>

          <div className="space-y-6">
            {faqs.map(({ question, summary, detail }) => (
              <article
                key={question}
                className="bg-navy-800 p-7 sm:p-10 rounded-xl border border-navy-700"
              >
                <h3 className="font-serif text-base sm:text-lg font-bold mb-5 text-orange-400 leading-relaxed">
                  <span className="mr-1">Q：</span>
                  {question}
                </h3>
                <p className="text-slate-100 leading-relaxed font-medium">
                  <span className="mr-1">A：</span>
                  {summary}
                </p>
                {detail && <p className="mt-4 text-slate-300 leading-relaxed">{detail}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCta heading="学習プロセスの改善点が見つかる、無料体験授業を受けてみませんか" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </main>
  );
}
