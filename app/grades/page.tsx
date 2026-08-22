import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: '学年別のご案内',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの学年別のご案内。小学生・中学生・高校生それぞれの指導内容と、授業・自習を組み合わせた学習モデルを掲載しています。',
};

const gradePolicies = [
  {
    grade: '小学生',
    headline: '「なぜそうなるか」を考える習慣と、正しいノートの使い方を身につける',
    body: '小学生のうちは、答えが合ったかどうかよりも、どうやって答えを出したかが大切です。分数が数として何を表しているのか、単位がなぜ変わるのか。ここが曖昧なまま計算のやり方だけを覚えると、中学以降で必ず止まります。国語も同じで、設問が何を求めているかを読むところから始めます。',
    items: [
      '分数・単位・割合の意味の理解',
      '式や図を自分で書く習慣',
      '設問の指示を読んでから答える',
      '記述は「一言で答えてから足す」',
      '自分で丸付けとやり直しをする',
    ],
  },
  {
    grade: '中学生',
    headline: '定期テストで目標点を取り、自分で演習を進められる状態をつくる',
    body: '中学生の失点は、単元の理解不足だけが原因ではありません。途中式を書かないことで生まれる符号ミス、be動詞と一般動詞の混在、設問の読み落とし。こうした毎回同じ形で起きるミスを先に潰します。あわせて、原因が前の学年にある場合は、そこまで戻って埋め直します。',
    items: [
      '途中式を残す書き方の徹底',
      '英語は語順から組み立てる',
      '前学年にある原因の特定と復習',
      '学校ワークの進め方と提出管理',
      'テスト後の答案の振り返り',
    ],
  },
  {
    grade: '高校生',
    headline: '分析に基づいて優先順位を決め、限られた学習時間を管理する',
    body: '高校生は学習量が一気に増えるため、何を先にやるかの判断が結果を左右します。現在の成績と目標から優先順位を決め、1日に進める量まで具体的に決めます。英語は文法規則から構造を取る練習を積み、和訳の勘に頼らない読み方に切り替えます。',
    items: [
      '科目ごとの優先順位の決定',
      '1日に進める量まで具体化',
      '英文の構造分析（品詞・句と節）',
      '「何も見ずに答案が書ける」到達確認',
      '志望校と入試方式の絞り込み',
    ],
  },
];

const lessonExamples = [
  {
    grade: '小学生',
    title: 'まずは「正しい勉強のやり方」を身につけます。',
    challenge: '計算のやり方は覚えているのに、意味を聞くと答えられない',
    action:
      '数直線や図を書きながら、分数や単位が何を表しているのかを確認します。「この式は何を計算している？」と問い返し、手順の暗記から抜け出させます。',
  },
  {
    grade: '中学生',
    title: '定期テストに向けて、今やるべきことを明確にします。',
    challenge: '勉強しているのに、点数につながりにくい',
    action:
      '答案とノートを見て、失点の原因が理解不足なのか、書き方や設問の読み方なのかを切り分けます。そのうえで学校の進度とテスト範囲に合わせ、授業と自習を組み合わせて進めます。',
  },
  {
    grade: '高校生',
    title: '膨大な学習量の中から、優先順位を整理します。',
    challenge: 'やることが多く、何から手を付ければよいか分からない',
    action:
      '現在の理解度と目標から、今週やる範囲と1日に進める量まで決めます。「解説を読んで納得した」ではなく「何も見ずに答案を書けた」を到達の基準にします。',
  },
];

type ScheduleRow = { time: string; activity: string; isLesson: boolean };
type ScheduleDay = { day: string; rows: ScheduleRow[] };

const weeklySchedule: ScheduleDay[] = [
  {
    day: '月曜日',
    rows: [
      { time: '18:50〜20:10', activity: '英語授業（個別指導・作法の矯正）', isLesson: true },
      {
        time: '20:20〜20:50',
        activity: '授業直後自習（その日の長文の解き直しと単語暗記）',
        isLesson: false,
      },
    ],
  },
  {
    day: '火曜日',
    rows: [
      {
        time: '17:20〜19:30',
        activity: '自習室利用（授業がない日の来塾） ➡ 学校ワークの処理と理科・社会の教科書演習',
        isLesson: false,
      },
    ],
  },
  {
    day: '水曜日',
    rows: [
      { time: '18:50〜20:10', activity: '数学授業（個別指導・プロセスの修正）', isLesson: true },
      {
        time: '20:20〜20:50',
        activity: '授業直後自習（間違えた計算のプロセス修正演習）',
        isLesson: false,
      },
    ],
  },
  {
    day: '木曜日',
    rows: [
      {
        time: '17:20〜19:30',
        activity: '自習室利用（授業がない日の来塾） ➡ 指導報告で指示された個別の課題を集中環境で実行',
        isLesson: false,
      },
    ],
  },
];

export default function GradesPage() {
  return (
    <main id="main">
      <PageHeader title="学年別のご案内" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed border-b border-slate-300 pb-5">
            学年に合わせた自立学習の設計
          </h2>
          <div className="space-y-6">
            {gradePolicies.map(({ grade, headline, body, items }) => (
              <article
                key={grade}
                className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200"
              >
                <p className="inline-block bg-navy-900 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  {grade}
                </p>
                <h3 className="font-serif text-lg sm:text-2xl font-bold mb-4 leading-relaxed">
                  {headline}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">{body}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-base text-slate-800 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100"
                    >
                      <span aria-hidden="true" className="text-orange-600 font-bold">
                        ・
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed border-b border-slate-200 pb-5">
            実際の授業では、こんなふうに学習を進めます。
          </h2>
          <div className="space-y-6">
            {lessonExamples.map(({ grade, title, challenge, action }) => (
              <article
                key={grade}
                className="bg-slate-50 p-6 sm:p-9 rounded-xl border border-slate-200"
              >
                <p className="text-sm font-bold text-orange-700 mb-3">{grade}</p>
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 leading-relaxed">
                  {title}
                </h3>
                <dl className="space-y-3 text-base leading-relaxed">
                  <div>
                    <dt className="font-bold text-slate-900 mb-1">よくある課題</dt>
                    <dd className="text-slate-700">{challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900 mb-1">ミネルバで行うこと</dt>
                    <dd className="text-slate-700">{action}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center leading-relaxed">
            授業と自習室を組み合わせた、理想的な生活サイクル
          </h2>
          <p className="text-center text-lg sm:text-xl font-bold text-orange-400 mb-3 leading-relaxed">
            授業の日も、自習室で勉強できます。
          </p>
          <p className="text-center text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto border-b border-navy-700 pb-8">
            授業を受けるだけでなく、日々の学習時間そのものを確保します。
          </p>

          {/* PC：表 / スマホ：曜日カード */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-navy-700">
            <table className="w-full min-w-[560px] text-left border-collapse bg-navy-800">
              <caption className="caption-top pb-4 text-base sm:text-lg font-bold text-slate-200">
                中学生の1週間の通塾モデル（英数2講座受講の場合）
              </caption>
              <thead>
                <tr className="bg-navy-900 text-base">
                  <th scope="col" className="px-5 py-4 font-bold w-28">
                    曜日
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold w-40">
                    時間
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold">
                    内容
                  </th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map(({ day, rows }) =>
                  rows.map((row, index) => (
                    <tr key={`${day}-${row.time}`} className="border-t border-navy-700 align-top">
                      {index === 0 && (
                        <th
                          scope="row"
                          rowSpan={rows.length}
                          className="px-5 py-4 font-serif font-bold text-orange-400 border-r border-navy-700 whitespace-nowrap"
                        >
                          {day}
                        </th>
                      )}
                      <td className="px-5 py-4 text-base font-bold text-slate-100 whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="px-5 py-4 text-base text-slate-200 leading-relaxed">
                        <span
                          className={`inline-block text-xs font-bold px-2 py-0.5 rounded mr-2 align-middle ${
                            row.isLesson ? 'bg-orange-600 text-white' : 'bg-navy-700 text-slate-200'
                          }`}
                        >
                          {row.isLesson ? '授業' : '自習'}
                        </span>
                        {row.activity}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            <p className="text-center font-bold text-slate-200 mb-2">
              中学生の1週間の通塾モデル（英数2講座受講の場合）
            </p>
            {weeklySchedule.map(({ day, rows }) => (
              <article
                key={day}
                className="bg-navy-800 border border-navy-700 rounded-xl p-5"
              >
                <h3 className="font-serif font-bold text-orange-400 text-lg mb-3">{day}</h3>
                <ul className="space-y-3">
                  {rows.map((row) => (
                    <li key={row.time} className="text-base leading-relaxed">
                      <p className="font-bold text-slate-100 mb-1">{row.time}</p>
                      <p className="text-slate-300">
                        <span
                          className={`inline-block text-xs font-bold px-2 py-0.5 rounded mr-2 align-middle ${
                            row.isLesson ? 'bg-orange-600 text-white' : 'bg-navy-700 text-slate-200'
                          }`}
                        >
                          {row.isLesson ? '授業' : '自習'}
                        </span>
                        {row.activity}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed border-b border-slate-300 pb-5">
            授業を実力に変える「自習スペース」
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center leading-relaxed">
            授業を受けただけで、勉強する日はありません。
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 text-center sm:text-left max-w-3xl mx-auto">
            授業で分かったことを、自分で解いて定着させる時間まで確保します。
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
            授業だけで成績が上がることは絶対にありません。自学に集中して取り組めるように、私語厳禁の静寂な自習スペースを準備しています。1講座でも受講していただければ、授業日に関わらず、開校時間（平日16:00〜21:40）内は毎日いつでも無料でご利用いただけます。質問は授業を受けている教科以外でも大歓迎ですので、積極的に活用してください。他の生徒の勉強の妨げとなる行為があった場合は、利用を制限することがあります。
          </p>
          <div className="relative h-[260px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg border border-slate-200">
            <Image
              src="/images/study-room.jpg"
              alt="私語厳禁で静かな学習塾ミネルバの自習スペース"
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <PreFooterCta heading="お子さまの学年に合った学習方法を、一緒に考えてみませんか。" />
    </main>
  );
}
