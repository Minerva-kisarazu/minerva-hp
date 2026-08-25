import type { Metadata } from 'next';
import Image from 'next/image';
import CtaButton, { TrialCtaLabel } from '@/components/CtaButton';
import ReportCarousel from '@/components/ReportCarousel';
import { reportSamples } from '@/data/reportSamples';

export const metadata: Metadata = {
  title: '学習塾ミネルバ｜木更津市金田東の個別指導塾・自立学習',
  description:
    '木更津市金田東の個別指導塾、学習塾ミネルバ。授業で答えを教えるだけではなく、「なぜできないのか」を分析し、自分で学べる力を育てます。',
};

const worries = [
  '「わかった」と言うのに、少し形が変わると解けなくなる',
  '途中式を書かず、頭の中で計算して、いつも同じところを間違える',
  '答えは出しているのに、聞かれていたのは別のことだった',
  '宿題は出しているが、丸付けとやり直しまではしていない',
  '塾に通っているのに、自分から勉強するようにならない',
];

const steps = [
  {
    label: 'STEP 1',
    title: '見つける',
    body: '答案やノート、問題を解いている途中の様子から、どこでつまずいているのかを確認します。「計算が苦手」で終わらせず、どこで何が起きているのかを具体的にします。',
    image: '/images/analysis-pen.jpg',
    alt: 'ノートに途中式を書く手元',
    isGoal: false,
  },
  {
    label: 'STEP 2',
    title: '直す',
    body: 'つまずきの原因に合わせて、解き方や問題の読み方、ノートの使い方などを具体的に修正します。必要な知識はきちんと教え、正しいやり方を身につけます。',
    image: '/images/hero-desk.jpg',
    alt: 'デスクライトの下に置かれた学習机',
    isGoal: false,
  },
  {
    label: 'STEP 3',
    title: '自分でできるようにする',
    body: '授業で教わったことを自習で実際に使い、自分の力で解けるかを確認します。「解説を見れば分かる」ではなく、「何も見ずに自分で解ける」ところまでつなげます。',
    image: '/images/study-back.jpg',
    alt: '自習室で一人で演習に取り組む生徒',
    isGoal: true,
  },
];

const analysisAxes = [
  {
    title: 'どう解いているかを見る',
    body: '途中式を書いているか、設問をどう読んでいるか、問題をどんな順番で解いているか。答えだけでは分からない「解き方の癖」を確認します。',
  },
  {
    title: 'どこで考えることを止めるかを見る',
    body: '条件を読み飛ばす、分からないとすぐ解答を見る、答えを書いたあとに問いを確認しない。失点につながる「考え方の癖」を確認します。',
  },
  {
    title: '「分かる」と「できる」の境目を見る',
    body: '説明を聞いて分かった状態と、何も見ずに自分で解ける状態は同じではありません。その差を確認し、今必要な学習を決めます。',
  },
];

const weekModel = [
  { day: '月', body: '英語授業 ＋ 直後の自習' },
  { day: '火', body: '自習室で学校ワーク・理社' },
  { day: '水', body: '数学授業 ＋ 直後の自習' },
  { day: '木', body: '自習室で個別課題' },
];

const improvementPatterns = [
  {
    subject: '数学・算数',
    symptom: '計算ミスが多く、いつも同じところで間違える。',
    cause:
      '途中式を書かず、頭の中で処理している。ノートに残っていないため、どこで間違えたのかを本人も後から確認できない。',
    action:
      '式を縦に揃えて変形し、消しゴムを使わずすべてノートに残します。「書く量が増えて面倒に見えて、結果的に早く正確に解ける」と本人が実感するまで、自習室でも確認します。',
  },
  {
    subject: '英語',
    symptom: '単語は覚えているのに、並び替えや英作文で点が取れない。',
    cause:
      '聞き覚えのある音の記憶で書いている。そのため be動詞と一般動詞が同じ文に混ざってしまう。',
    action:
      'まず主語と動詞を決める。疑問文は肯定文を作ってから書き換える。比較は基本の文を作ってから more や as を足す。単語の意味を知らなくても解ける問題を、確実に取れる形にします。',
  },
  {
    subject: '国語',
    symptom: '文章は読めているのに、記述問題と選択肢で失点する。',
    cause:
      '設問の指示を読んでいない。字数指定を見落とす。傍線部の近くにある言葉をそのまま写している。',
    action:
      '設問の指示に印をつけ、「一言で答えるなら何か」を決めてから字数に合わせて足していきます。因果・抽象と具体・対比といった論理関係は、短い文で練習してから長文に戻します。',
  },
];

const scoreCases = [
  { grade: '中学2年', subject: '数学', before: 15, after: 74, diff: 59 },
  { grade: '中学3年', subject: '数学', before: 33, after: 66, diff: 33 },
  { grade: '中学2年', subject: '数学', before: 72, after: 97, diff: 25 },
];

const reportBenefits = [
  'どこで思考が止まっているのか',
  '何を最優先で克服すべきなのか',
  'どこが伸びしろなのか',
];

export default function Home() {
  return (
    <main id="main">
      {/* ヒーロー */}
      <section className="bg-brand-900 text-white">
        <div className="grid lg:grid-cols-2 lg:min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24">
            <h1 className="font-serif text-[1.65rem] leading-relaxed sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              「なぜできないのか」を見抜く。
              <br />
              「どうすればもっと伸びるのか」を設計する。
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-xl mb-8 sm:mb-10 leading-relaxed">
              木更津市金田の個別指導塾「学習塾ミネルバ」
              <br />
              授業で答えを教えるだけではなく、
              <br className="sm:hidden" />
              「なぜできないのか」を分析し、自分で学べる力を育てます。
            </p>
            <div className="sm:self-start">
              <CtaButton href="/contact" variant="onDark">
                <TrialCtaLabel />
              </CtaButton>
            </div>
          </div>
          <div className="relative min-h-[240px] sm:min-h-[400px] lg:min-h-full">
            <Image
              src="/images/hero-lesson.jpg"
              alt="学習塾ミネルバの個別指導の授業風景"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* お悩み共感 */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center leading-relaxed border-b border-slate-200 pb-5">
            お子さまに、こんなお悩みはありませんか？
          </h2>
          <ul className="space-y-4">
            {worries.map((worry) => (
              <li
                key={worry}
                className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4"
              >
                <span aria-hidden="true" className="text-brand-900 mt-0.5 text-xl font-bold flex-shrink-0">
                  □
                </span>
                <span className="text-base sm:text-lg leading-relaxed">{worry}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 sm:mt-10 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              これらの原因は、お子さまの「やる気」や「能力」のせいだけではありません。
            </p>
            <p className="font-bold text-slate-900 text-lg sm:text-xl">
              一番多いのは、「聞けば分かるのに、自分ではできない」という状態です。
            </p>
            <p>
              毎回の授業で書いている指導報告を読み返すと、最も多く登場するのがこの記述です。一緒に読み直せば正しく答えられる。問いかければ答えられる。指摘されれば自分で気づける。それでも、ひとりで解こうとすると手が止まってしまう。
            </p>
            <p>
              これは知識が足りないのではなく、
              <span className="font-bold text-slate-900">
                知っていることを自分で引き出す手順が身についていない
              </span>
              状態です。だから勉強時間を増やしても点数が変わりません。私たちは答案やノート、解いている最中の手元まで確認して、その手順のどこが抜けているのかを探します。定期テストなら、同じミスで落としている数点がどこかを特定し、次のテストで取り切るところから始めます。
            </p>
          </div>
          <div className="relative mt-10 aspect-[16/9] rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <Image
              src="/images/home-test.jpg"
              alt="赤ペンで採点された定期テストの答案"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ターゲット */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[260px] sm:h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
              <Image
                src="/images/policy-tutoring.jpg"
                alt="生徒と一緒に途中式を確認する個別指導の様子"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-relaxed">
                苦手な教科には「なぜ点が取れないのか」を。
                <br />
                得意な教科には「さらに点を伸ばす手順」を。
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                点数が伸び悩んでいる子には、途中式を書かない・設問を読み飛ばすなど、失点に直結する理由が必ずあります。すでに取れる単元がある子には、同じ勉強時間でも取りこぼしを減らし、記述や応用で加点する進め方があります。定期テストなら「あと10点」のために何を直すか、入試ならどの単元から埋めるかを、答案とノートから具体にします。どの学力の生徒にも共通して必要なのは、自分の学習の進め方を把握し、自習の質を上げることです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ミネルバの本質（3ステップ） */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed border-b border-slate-200 pb-5">
            分析して終わりではありません。
            <br />
            「自分でできるようになる」ことが目的です。
          </h2>
          <div className="max-w-3xl mx-auto mb-10 space-y-2 font-serif text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-relaxed text-center">
            <p>答えを教える。</p>
            <p>ではなく、解き方を教える。</p>
            <p>そして、その解き方を自分で使えるようにする。</p>
          </div>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-12 space-y-4 text-center sm:text-left">
            <p>
              ミネルバでは、お子さまの学習状況を分析し、「何ができていないのか」だけでなく、「なぜできないのか」まで確認します。
            </p>
            <p>
              ただし、分析は目的ではありません。見つかった課題を直し、正しい解き方を身につけ、最後は自分の力で問題を解けるようにする。そこまでを指導します。
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step) => (
              <li
                key={step.label}
                className={`bg-slate-50 rounded-xl shadow-sm overflow-hidden ${
                  step.isGoal ? 'border-2 border-brand-900' : 'border border-slate-200'
                }`}
              >
                <div className="relative h-44 sm:h-48">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p
                    className={`text-sm font-bold mb-2 tracking-wide ${
                      step.isGoal ? 'text-brand-900' : 'text-accent-700'
                    }`}
                  >
                    {step.label}
                  </p>
                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold mb-3 ${
                      step.isGoal ? 'text-brand-900' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 授業と自習 */}
      <section className="bg-brand-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[240px] sm:min-h-[400px] lg:min-h-[560px]">
            <Image
              src="/images/study-room.jpg"
              alt="学習塾ミネルバの自習室"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              授業で分かったことを、自分で使えるところまで。
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              授業で見つかった課題とつながった内容を自習室で繰り返し、「分かった」で終わらず、自分で解ける状態までつなげます。
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              ミネルバでは、
              <span className="font-bold text-white">
                「解く・丸付けする・やり直す」までを一組で宿題
              </span>
              と考えます。解いただけで終わらせず、間違えた理由を確認し、もう一度自分で解くところまで行います。
            </p>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-accent-400 mb-4">
              中学生の1週間の学習モデル
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weekModel.map((item) => (
                <li
                  key={item.day}
                  className="bg-brand-800 border border-brand-700 rounded-lg px-4 py-3 flex items-center gap-3"
                >
                  <span className="font-bold text-accent-400 w-8 flex-shrink-0">{item.day}</span>
                  <span className="text-slate-200 text-base leading-relaxed">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3つの分析視点 */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center leading-relaxed border-b border-slate-200 pb-5">
            ミネルバでは、実際にこういうところまで見ています
          </h2>
          <div className="relative h-[200px] sm:h-[340px] overflow-hidden rounded-2xl border border-slate-200 shadow-md mb-10 sm:mb-12">
            <Image
              src="/images/analysis-pen.jpg"
              alt="マス目に揃えて途中式を書く学習の作法"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {analysisAxes.map((axis) => (
              <div key={axis.title} className="bg-slate-50 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 border-b border-slate-300 pb-3 leading-snug">
                  {axis.title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">{axis.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-14 flex justify-center">
            <CtaButton href="/policy" variant="secondary">
              さらに詳しい分析手法はこちら
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 改善の型 */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-relaxed border-b border-slate-200 pb-5">
            成果は生徒ごとに異なりますが、改善の流れは共通しています
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 space-y-3">
            <p>生徒によってつまずく場所は違います。</p>
            <p>
              ただ、答案やノートを見ていくと、同じような失敗の型が見えてくることがあります。ミネルバでは、その原因を具体的に見つけ、勉強のやり方そのものを修正します。
            </p>
          </div>
          <div className="relative h-[200px] sm:h-[340px] overflow-hidden rounded-2xl border border-slate-200 shadow-md mb-10 sm:mb-12">
            <Image
              src="/images/home-test.jpg"
              alt="赤ペンで採点された定期テストの答案"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {improvementPatterns.map(({ subject, symptom, cause, action }) => (
              <article
                key={subject}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 border-b border-slate-300 pb-3">
                  {subject}
                </h3>
                <dl className="space-y-4 text-base leading-relaxed">
                  <div>
                    <dt className="font-bold text-slate-900 mb-1">表に出ている症状</dt>
                    <dd className="text-slate-700">{symptom}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900 mb-1">実際の原因</dt>
                    <dd className="text-slate-700">{cause}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-brand-900 mb-1">ミネルバで行うこと</dt>
                    <dd className="text-slate-700">{action}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 実際の成績改善事例 */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-relaxed border-b border-slate-200 pb-5">
            実際の成績改善事例
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 space-y-3 text-center sm:text-left">
            <p>開校後最初の定期テストで、実際にこのような変化がありました。</p>
            <p>
              まだ掲載できる事例は限られていますが、今後も実際の指導事例を追加していきます。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {scoreCases.map((item) => (
              <article
                key={`${item.grade}-${item.before}-${item.after}`}
                className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 text-center"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 text-slate-900">
                  {item.grade}｜{item.subject}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 tabular-nums mb-3">
                  {item.before}点 → {item.after}点
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 tabular-nums">
                  ＋{item.diff}点
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 指導報告書 */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-relaxed border-b border-slate-200 pb-5">
            授業では、こんなところまで見ています。
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8 sm:mb-10 text-center sm:text-left">
            一人ひとりのつまずきを記録し、次の指導につなげています。学習内容・つまずき・行った指導・次回へのつなぎを、毎回その日のうちに保護者様へお送りしています。
          </p>

          <ReportCarousel reports={reportSamples} />

          <div className="mt-12 sm:mt-14 flex justify-center">
            <CtaButton href="/policy" variant="secondary">
              分析手法と指導の考え方はこちら
            </CtaButton>
          </div>
        </div>
      </section>

      {/* フッター前CTA */}
      <section className="bg-brand-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              勉強しているのに伸びない理由。あるいは、もっと伸びるための改善点。
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed">
              まずは80分の体験授業で見つけてみませんか。
            </p>
            <div className="bg-[#004840]/80 p-5 sm:p-8 rounded-xl mb-8 sm:mb-10 border border-white/15">
              <p className="font-bold mb-5 text-white leading-relaxed">
                体験授業後には、お預かりしたお子さまの学習プロセスを精査し、以下の内容を明確にした「学習診断レポート」をお渡しします。
              </p>
              <ul className="space-y-3">
                {reportBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-accent-400 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-base text-slate-100 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base text-slate-200 leading-relaxed">
                現在の塾での勉強やテスト対策に手応えを感じていない方も、現状を打破する指針としてお役立てください。
              </p>
            </div>
            <div className="sm:self-start w-full sm:w-auto">
              <CtaButton href="/contact" variant="onDark">
                <TrialCtaLabel />
              </CtaButton>
            </div>
          </div>
          <div className="relative min-h-[240px] sm:min-h-[400px] lg:min-h-full">
            <Image
              src="/images/cta-atmosphere.jpg"
              alt="デスクライトに照らされた学習ノート"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
