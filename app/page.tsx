import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton, { ContactCtaLabel } from '@/components/CtaButton';
import LineConsultCta, { LineConsultBand } from '@/components/LineConsultCta';
import { StepReasonIcon } from '@/components/home/HomeVisualBlocks';
import ReportCarousel from '@/components/ReportCarousel';
import { reportSamples } from '@/data/reportSamples';
import { scoreCases } from '@/data/scoreCases';

export const metadata: Metadata = {
  title: '学習塾ミネルバ｜木更津市金田東の個別指導塾・自立学習',
  description:
    '木更津市金田東の個別指導塾、学習塾ミネルバ。授業で答えを教えるだけではなく、「なぜできないのか」を分析し、問題を読み、考え、自分で解ける力を育てます。',
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
    image: '/images/home-step-find.jpg',
    alt: '答案とノートを見比べてつまずきを確認する様子',
    isGoal: false,
  },
  {
    label: 'STEP 2',
    title: '直す',
    body: 'つまずきの原因に合わせて、解き方や問題の読み方、ノートの使い方などを具体的に修正します。必要な知識はきちんと教えますが、ただ覚えさせるのではなく、「なぜそうするのか」を確認しながら、正しい考え方と解き方を身につけます。',
    image: '/images/hero-desk.jpg',
    alt: 'デスクライトの下に置かれた学習机',
    isGoal: false,
  },
  {
    label: 'STEP 3',
    title: '自分でできるようにする',
    body: '授業で教わったことを自習で実際に使い、自分の力で問題を解けるかを確認します。「解説を見れば分かる」ではなく、問題を自分で読み、考え、何も見ずに最後まで答案を書き、答えを確かめられるところまでつなげます。',
    image: '/images/study-back.jpg',
    alt: '自習室で一人で演習に取り組む生徒',
    isGoal: true,
  },
];

const weekModel = [
  { day: '月', body: '英語授業 ＋ 直後の自習' },
  { day: '火', body: '自習室で学校ワーク・理社' },
  { day: '水', body: '数学授業 ＋ 直後の自習' },
  { day: '木', body: '自習室で個別課題' },
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
          <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24">
            <h1 className="font-serif text-[1.75rem] leading-[1.55] sm:text-4xl sm:leading-[1.5] lg:text-[2.75rem] lg:leading-[1.45] font-bold mb-6 sm:mb-8 tracking-[0.02em]">
              「なぜできないのか」を見抜く。
              <br />
              「どうすればもっと伸びるのか」を設計する。
            </h1>
            <div className="max-w-xl mb-8 sm:mb-10 space-y-3 text-base sm:text-lg lg:text-xl">
              <p className="text-accent-400 font-medium">
                木更津市金田東の個別指導塾「学習塾ミネルバ」
              </p>
              <p className="text-slate-100">
                授業で答えを教えるだけではなく、「なぜできないのか」を分析し、読む・考える・解く・確かめる力を鍛えます。
              </p>
              <p className="text-slate-200">
                その先にあるのは、誰かに教えてもらわなくても、自分で学習を進められる状態です。
              </p>
            </div>
            <div className="max-w-md">
              <CtaButton href="/contact" variant="onDark">
                <ContactCtaLabel />
              </CtaButton>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                面談は入塾を決める場ではなく、お子さまの学習状況やつまずきを一緒に整理する場です。
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                  まずは気軽にLINEで相談する
                </p>
                <LineConsultCta variant="hero" />
              </div>
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
        <div className="site-container-wide">
          <h2 className="section-heading-bordered text-center">
            お子さまに、こんなお悩みはありませんか？
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
            {worries.map((worry, index) => (
              <li
                key={worry}
                className="flex items-start gap-3 sm:gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5 sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-900 text-white text-sm font-bold flex items-center justify-center mt-0.5"
                >
                  {index + 1}
                </span>
                <span className="text-base sm:text-lg flex-1 leading-relaxed">{worry}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 body-text max-w-3xl mx-auto">
            <p>
              これらの原因は、お子さまの「やる気」や「能力」のせいだけではありません。
            </p>
            <p className="insight-callout !mx-0">
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
              状態です。だから勉強時間を増やしても点数が変わりません。私たちは答案やノート、解いている最中の手元まで確認して、その手順のどこが抜けているのかを探します。
            </p>
          </div>
        </div>
      </section>

      {/* 成績改善事例（証拠） */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="site-container-wide">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-center leading-relaxed border-b border-slate-200 pb-5">
            実際の成績改善事例
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 text-center">
            実際の指導で、こんな変化がありました。
          </p>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {scoreCases.map((item) => (
              <article
                key={`${item.grade}-${item.before}-${item.after}`}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col shadow-sm"
              >
                <div className="px-5 sm:px-6 pt-6 pb-5 bg-brand-900 text-white text-center">
                  <h3 className="font-serif text-base sm:text-lg font-bold mb-4 text-accent-400">
                    {item.grade}｜{item.subject}
                  </h3>
                  <p className="font-serif text-3xl sm:text-4xl font-bold tabular-nums leading-none">
                    <span className="text-slate-300 text-2xl sm:text-3xl font-sans font-medium">
                      {item.before}点
                    </span>
                    <span className="mx-2 sm:mx-3 text-accent-400" aria-hidden="true">
                      →
                    </span>
                    <span>{item.after}点</span>
                  </p>
                  <p className="mt-3 text-sm sm:text-base font-bold text-accent-400 tabular-nums">
                    ＋{item.diff}点
                  </p>
                </div>
                <div className="flex-1 px-5 sm:px-6 py-5 sm:py-6 space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
                    <p className="text-xs font-bold tracking-wide text-slate-500 mb-1.5">BEFORE</p>
                    <p className="font-bold text-slate-900 mb-1">何につまずいていたか</p>
                    <p className="text-slate-700">{item.cause}</p>
                  </div>
                  <div className="flex justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
                    <p className="text-xs font-bold tracking-wide text-slate-600 mb-1.5">指導</p>
                    <p className="font-bold text-slate-900 mb-1">何を確認し、何を変えたか</p>
                    <p className="text-slate-700">{item.improvement}</p>
                  </div>
                  <div className="flex justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="rounded-lg bg-brand-50 border border-brand-900/15 px-4 py-3">
                    <p className="text-xs font-bold tracking-wide text-brand-900 mb-1.5">AFTER</p>
                    <p className="font-bold text-brand-900 mb-1">点数・結果</p>
                    <p className="font-serif text-xl sm:text-2xl font-bold text-brand-900 tabular-nums">
                      {item.before}点 → {item.after}点
                      <span className="ml-2 text-base sm:text-lg text-accent-700">（＋{item.diff}点）</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 leading-relaxed">
            まだ掲載できる事例は限られていますが、今後も実際の指導事例を追加していきます。
          </p>
          <p className="mt-4 text-center">
            <Link
              href="/price"
              className="text-sm sm:text-base text-brand-900 underline underline-offset-4 hover:text-brand-800"
            >
              料金の目安はこちら
            </Link>
          </p>
        </div>
      </section>

      {/* 成績事例直後のCTA */}
      <section className="bg-white py-12 sm:py-16 border-y border-slate-100">
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-relaxed">
            お子さまの学習状況も、一度相談してみませんか？
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
            今の勉強でどこにつまずいているのか、一緒に整理します。
          </p>
          <CtaButton href="/contact" variant="primary" fullWidthOnMobile={false}>
            <ContactCtaLabel />
          </CtaButton>
        </div>
      </section>

      {/* なぜこの変化が生まれるのか */}
      <section className="bg-white py-16 sm:py-24">
        <div className="site-container-wide">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed border-b border-slate-200 pb-5">
            なぜ、この変化が生まれるのか
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 space-y-4 text-center sm:text-left">
            <p>
              成績改善の方法は生徒によって異なりますが、共通しているのは、答案や学習の進め方を確認し、「何を直せば点数につながるのか」を具体化したことです。
            </p>
            <p>
              ミネルバでは、答えだけでなく、そこに至る考え方まで見ます。
            </p>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10 text-center mb-10">
            <p className="body-text mb-6">
              どう解いているか、どこで考えることを止めているか、「分かる」と「できる」の境目はどこか。分析の詳細は指導方針ページにまとめています。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <CtaButton href="/policy" variant="secondary" fullWidthOnMobile={false}>
                指導方針を見る
              </CtaButton>
              <Link
                href="/policy#improvement-patterns"
                className="text-sm sm:text-base text-brand-900 underline underline-offset-4 hover:text-brand-800"
              >
                教科別の改善の型はこちら
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-600 leading-relaxed">
              苦手な教科・得意な教科それぞれへの向き合い方は、
              <Link href="/grades" className="text-brand-900 underline underline-offset-4 hover:text-brand-800 mx-1">
                学年別のご案内
              </Link>
              でもご覧いただけます。
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 space-y-2 font-serif text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-relaxed text-center">
            <p>答えを教える。</p>
            <p>ではなく、解き方の考え方を教える。</p>
            <p className="text-brand-900">そして、その考え方を自分で使えるようにする。</p>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center leading-relaxed">
            分析だけでは終わらせない。
            <br className="hidden sm:inline" />
            授業と自習の3ステップで「自分で解ける」まで導きます。
          </h3>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-12 space-y-4">
            <p>
              ミネルバでは、お子さまの学習状況を分析し、「何ができていないのか」だけでなく、「なぜできないのか」まで確認します。ただし、分析そのものが目的ではありません。
            </p>
            <p>
              必要な知識や解き方はきちんと教えます。そのうえで、最後は自分の力で問題を読み、考え、解き、確かめられるところまでつなげます。
            </p>
          </div>

          {/* 3STEP ビジュアルサマリー */}
          <div className="mb-10 sm:mb-12" aria-hidden="true">
            <div className="hidden md:flex items-stretch justify-center max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-stretch flex-1 min-w-0">
                  <div
                    className={`flex-1 flex flex-col items-center justify-center text-center px-3 lg:px-5 py-5 lg:py-6 rounded-xl border-2 ${
                      step.isGoal
                        ? 'bg-brand-900 border-brand-900 text-white shadow-md'
                        : 'bg-white border-brand-900/25 text-slate-900 shadow-sm'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tracking-widest mb-2 ${
                        step.isGoal ? 'text-accent-400' : 'text-accent-700'
                      }`}
                    >
                      {step.label}
                    </span>
                    <span
                      className={`font-serif text-lg lg:text-xl font-bold leading-snug ${
                        step.isGoal ? 'text-white' : 'text-brand-900'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="flex items-center px-1 lg:px-2 text-brand-900 flex-shrink-0">
                      <svg
                        className="w-7 h-7 lg:w-9 lg:h-9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <ol className="md:hidden space-y-3 max-w-sm mx-auto">
              {steps.map((step, index) => (
                <li key={step.label} className="relative">
                  <div
                    className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 ${
                      step.isGoal
                        ? 'bg-brand-900 border-brand-900 text-white'
                        : 'bg-white border-brand-900/20 text-slate-900'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                        step.isGoal ? 'bg-accent-500 text-brand-900' : 'bg-brand-900 text-white'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-bold tracking-wide mb-0.5 ${
                          step.isGoal ? 'text-accent-400' : 'text-accent-700'
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className={`font-serif text-lg font-bold ${step.isGoal ? 'text-white' : 'text-brand-900'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="flex justify-center py-1 text-brand-900" aria-hidden="true">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <ol className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
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
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-md ${
                      step.isGoal ? 'bg-brand-900 text-accent-400' : 'bg-white/95 text-brand-900'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <StepReasonIcon stepIndex={index as 0 | 1 | 2} className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] mb-4" />
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
          <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="section-heading text-white mb-6">
              授業の直後に自習だから、その日のうちに定着します。
            </h2>
            <p className="body-text text-slate-200 mb-6">
              授業で見つかった課題とつながった内容を自習室で繰り返し、「分かった」で終わらず、自分で問題を読み、考え、解いて、答えを確かめられる状態までつなげます。
            </p>
            <p className="body-text text-slate-200 mb-8">
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

      <LineConsultBand />

      {/* 指導報告書 */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="site-container-wide">
          <div className="text-center mb-6 sm:mb-8">
            <p className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-900 bg-white border border-brand-900/20 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" aria-hidden="true" />
              実際の指導報告を一部公開しています
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-center leading-relaxed border-b border-slate-200 pb-5">
            授業では、こんなところまで見ています。
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 text-center">
            毎回お送りしている指導報告のうち、ミネルバの指導内容が具体的に分かる記録を一部ご紹介します。
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-5 text-center sm:text-left">
            授業後には、その日の学習内容やつまずいたポイントを指導報告として保護者の方へお送りします。気になる点があれば、報告へのコメントからご相談いただけます。
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-5 text-center sm:text-left">
            一人ひとりのつまずきを記録し、次の指導につなげています。学習内容・つまずき・行った指導・次回へのつなぎを、毎回その日のうちにお送りしています。
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8 sm:mb-10 text-center sm:text-left">
            そこには、単に「○○を勉強しました」と書くのではなく、「どこで考え方が止まったのか」「何を直したのか」「次に何を自分でできるようにするのか」まで記録しています。
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 sm:mb-6 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs sm:text-sm font-bold text-accent-700 tracking-wide mb-1">
                  指導報告の公開サンプル
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  学習内容・つまずき・今回の指導・次回までを、実際の記録から抜粋しています。
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 flex-shrink-0">
                ※個人が特定されない範囲で掲載
              </p>
            </div>
            <ReportCarousel reports={reportSamples} />
          </div>

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
          <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="section-heading text-white mb-6">
              勉強しているのに伸びない理由。あるいは、もっと伸びるための改善点。
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 mb-3 leading-relaxed">
              まずは面談で、お子さまの学習状況を確認しませんか。
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              入塾を決めるためではなく、今の学習状況やつまずきを一緒に整理するための面談です。
            </p>
            <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
              お問い合わせ → 面談 → 必要に応じて体験授業、の順でご案内します。
            </p>
            <p className="body-text-muted text-slate-400 mb-8 sm:mb-10">
              体験授業をご希望の場合も、まず面談で学習状況やご希望を伺ったうえで、80分の体験授業と学習診断レポートをご案内します。
            </p>
            <div className="bg-[#004840]/80 p-5 sm:p-8 rounded-xl mb-8 sm:mb-10 border border-white/15">
              <p className="font-bold mb-5 text-white leading-relaxed">
                体験授業後には、お預かりしたお子さまの学習プロセスを確認し、以下の内容を明確にした「学習診断レポート」をお渡しします。
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
                さらに、その原因を直すだけで終わらせず、「自分で問題を読み、考え、解き、確かめるために、今何が必要なのか」まで整理します。
              </p>
            </div>
            <div className="space-y-6 w-full sm:max-w-md">
              <div>
                <CtaButton href="/contact" variant="onDark">
                  <ContactCtaLabel />
                </CtaButton>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                  ちょっとしたご相談はLINEから
                </p>
                <LineConsultCta variant="footer" />
              </div>
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
