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
  { label: '教材費', body: '使用するテキスト等の実費を別途納入していただきます。目安は1教科につき2,000円程度です。' },
  {
    label: '講習費',
    body: '春期・夏期・冬期の講習を年間の学習計画に沿って実施しています。原則として在籍生は参加対象となります。費用は時期・内容に応じて別途ご案内します。',
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
    question: 'うちの子は「聞けば分かる」のに、点数が取れません。',
    summary:
      '毎回書いている指導報告で最も多く登場するのが、まさにその状態です。原因は知識ではなく、知っていることを自分で引き出す手順にあります。',
    detail:
      '一緒に読み直せば正しく答えられる、指摘すれば自分で気づける。それなのにひとりで解くと手が止まる。この場合に必要なのは新しい知識ではなく、「途中式を残す」「設問の指示に印をつける」「答えを書く前に問いを読み返す」といった手順を、自分で発動できるようにすることです。授業で手順を決め、自習室で同じ形で解けているかを確認します。',
  },
  {
    question: '前の学年の内容まで戻ることはありますか？',
    summary:
      '必要があれば戻ります。原因のある地点まで戻ったほうが、結果的に速いことが多いためです。',
    detail:
      '中学3年生の関数が進まない原因が中学2年生の等式の変形にあり、さらにその原因が小学校で習う分数や単位の理解にある。こうした構造は珍しくありません。今の学年の内容だけを繰り返しても動かないときは、原因を特定してそこから埋め直します。どこまで戻り、どのくらいの期間をかけるかは、体験授業後の学習診断レポートでご説明します。',
  },
  {
    question: '宿題はどれくらい出ますか？',
    summary:
      '量は学年と状況によって決めますが、「解く・丸付け・やり直し」までを一組でお願いしています。',
    detail:
      '解いただけで提出されると、もともと解ける問題を解いただけになってしまいます。丸付けをして、間違えた理由を確認して、解き直す。ここまでが宿題です。また、授業から日が空くと前提から忘れてしまうため、当日か翌日に少しずつ始めていただくようお願いしています。まとめて取り組むより負担が軽く、定着もします。',
  },
  {
    question: '個別指導だから、料金が高いのではありませんか？',
    summary:
      '料金だけを見ると、一般的な個別指導塾より高く感じられる場合があります。ただし、授業時間だけでなく、授業の外での学習まで含めて支える料金です。',
    detail:
      '集団塾に比べれば月謝の額面は高くなります。しかしミネルバの料金には、毎回の学習動作・判断の癖の分析、保護者様への即日指導報告、追加料金なしで毎日使える自習スペースでの5教科の進度管理・質問対応が含まれています。指導報告では、その日にできたこと・手が止まった箇所・その原因・次にやることを毎回書いています。1回80分の授業だけではなく、授業の外での学習まで含めて支える料金です。',
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
    summary: 'はい、木更津市内の学校の定期テストにも対応しています。',
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
              授業料には、個別指導だけでなく、学習状況の確認、自習室の利用、授業で見つかった課題の整理、指導内容の共有などが含まれています。
            </p>
            <p>
              以下は月額受講費に施設費（2,200円/月）が含まれた、毎月の「総支払額」です。1講座でも受講していただければ、自習室は授業日にかかわらず毎日ご利用いただけます。
            </p>
          </div>

          {/* PC：表 */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-300 shadow-sm bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">学年別・講座数別の月額総支払額（税込）</caption>
              <thead>
                <tr className="bg-brand-900 text-white text-sm">
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
                    <dd className="tabular-nums whitespace-nowrap">{extra}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-3 text-accent-700 border-b border-slate-200 pb-3">
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

      <section className="bg-brand-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center leading-relaxed border-b border-brand-700 pb-5">
            よくあるご質問（Q&amp;A）
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {faqs.map(({ question, summary, detail }) => (
              <article
                key={question}
                className="bg-brand-800 p-5 sm:p-8 rounded-xl border border-brand-700"
              >
                <h3 className="font-serif text-base sm:text-lg font-bold mb-4 text-accent-400 leading-relaxed">
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
