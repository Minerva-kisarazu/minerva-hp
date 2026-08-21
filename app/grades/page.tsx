import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: '学年別のご案内',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの学年別のご案内。小学生・中学生・高校生それぞれの指導重点、中学生の1週間の通塾モデル、毎日無料で使える自習スペースの運用について掲載しています。',
};

const gradePolicies = [
  {
    grade: '小学生',
    headline: '正しい勉強のやり方と、ノートの取り方を身につける',
    body: '答えが合えばいいという作業を脱却し、「なぜそうなるか」を考える姿勢を作ります。算数の図示や国語の論理的読解など、すべての土台となる正しい作法を動作分析から指導します。',
  },
  {
    grade: '中学生',
    headline: '定期テストで目標点をもぎ取る「自力で演習する力」の確立',
    body: '木更津市内の中学校の教科書・定期テスト対策・高校受験対策に準拠。分析で見つかった個々の弱点や課題を、自習室での演習に直結させます。学校ワークの進捗を完全に管理し、テスト本番で解き切る力を養います。',
  },
  {
    grade: '高校生',
    headline: '分析に基づいた優先順位で、膨大な学習量をマネジメントする',
    body: 'がむしゃらに走るのではなく、ゴールへの最短ルートを設計します。週1回の授業でメインのつまずきを解消し、残りの日は自習室で計画を遂行する「自学自習」の仕組みを作ります。',
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

      {/* 各学年の指導重点 */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-center leading-relaxed border-b border-slate-300 pb-5">
            学年に合わせた自立学習の設計
          </h2>
          <div className="space-y-6">
            {gradePolicies.map(({ grade, headline, body }) => (
              <article
                key={grade}
                className="bg-white p-7 sm:p-10 rounded-xl shadow-sm border border-slate-200"
              >
                <p className="inline-block bg-navy-900 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  {grade}
                </p>
                <h3 className="font-serif text-lg sm:text-2xl font-bold mb-5 leading-relaxed">
                  {headline}
                </h3>
                <p className="text-slate-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 中学生週間モデルスケジュール */}
      <section className="bg-navy-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-center leading-relaxed border-b border-navy-700 pb-5">
            授業と自習室を組み合わせた、理想的な生活サイクル
          </h2>

          <div className="overflow-x-auto rounded-xl border border-navy-700">
            <table className="w-full min-w-[560px] text-left border-collapse bg-navy-800">
              <caption className="caption-top pb-4 text-base sm:text-lg font-bold text-slate-200">
                中学生の1週間の通塾モデル（英数2講座受講の場合）
              </caption>
              <thead>
                <tr className="bg-navy-900 text-sm">
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
                      <td className="px-5 py-4 text-sm font-bold text-slate-100 whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-200 leading-relaxed">
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
        </div>
      </section>

      {/* 自習スペースの運用について */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
            授業を実力に変える「自習スペース」
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-12">
            授業だけで成績が上がることは絶対にありません。自学に集中して取り組めるように、私語厳禁の静寂な自習スペースを準備しています。1講座でも受講していただければ、授業日に関わらず、開校時間（平日16:00〜21:40）内は毎日いつでも無料でご利用いただけます。質問は授業を受けている教科以外でも大歓迎ですので、積極的に活用してください。他の生徒の勉強の妨げとなる行為があった場合は、利用を制限することがあります。
          </p>
          <div className="relative h-[280px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg border border-slate-200">
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

      <PreFooterCta heading="まずは80分の体験授業で、学習プロセスの改善点を見つけましょう" />
    </main>
  );
}
