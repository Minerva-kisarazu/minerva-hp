import type { Metadata } from 'next';
import Image from 'next/image';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: '学習塾ミネルバ｜木更津市金田東の個別指導塾・自立学習',
  description:
    '木更津市金田東の個別指導塾、学習塾ミネルバ。勉強を教えるだけではない。成績が決まるプロセスそのものを分析します。中学生の定期テスト対策・高校受験対策、毎日使える自習室を用意しています。',
};

const worries = [
  '家で全く勉強しない、テスト前しか机に向かわない',
  '勉強時間はそれなりに長いのに、いまいち成績が伸びない',
  'テストでいつも同じようなケアレスミスを繰り返している',
  'テスト対策として、具体的に何から手を付ければいいか分かっていない',
];

const steps = [
  {
    title: 'ステップ1：【分析する】',
    body: '授業を通じて、ペンの動かし方、思考停止が起きるポイント、知識の境界線をプロの眼で正確につかみます。',
    image: '/images/analysis-pen.jpg',
    alt: 'ノートに途中式を書く手元',
    isGoal: false,
  },
  {
    title: 'ステップ2：【改善する】',
    body: '見つかった課題に対して、ノートの書き方や問題の読み進め方など、具体的な「正しい学習の作法」をその場で指導・修正します。',
    image: '/images/hero-desk.jpg',
    alt: 'デスクライトの下に置かれた学習机',
    isGoal: false,
  },
  {
    title: 'ステップ3：【自立する（ゴール）】',
    body: '正しいやり方を自習室での演習で再現し、誰に教えられなくても「自分の力で初見の問題を解ける」状態を確立します。',
    image: '/images/study-back.jpg',
    alt: '自習室で一人で演習に取り組む生徒',
    isGoal: true,
  },
];

const analysisAxes = [
  {
    title: '【解き方と手の動き】',
    body: '英単語を手本から1文字ずつ確認しながら写している。数学の途中式を省いていつも同じ場所でミスをしている。答えという結果だけを見るのではなく、「授業中にどのようにペンを動かしているか」を観察し、無意識のうちに失点を生んでいる動作の癖をその場で修正します。',
  },
  {
    title: '【思考停止が起きるポイント】',
    body: '「間違えるのが怖い」から最初の一歩のペンが止まる。「早く終わらせたい」から焦って問題文の条件を読み飛ばす。能力の問題ではなく、日々の学習効率を著しく下げている判断の癖や姿勢を見極め、机に向かうアプローチを整えます。',
  },
  {
    title: '【知識の境界線】',
    body: '生徒の「わかった」という言葉をそのまま受け入れることはしません。対話を通じて「どこまでは正確に理解できていて、どこからが曖昧なのか」の切れ目を明確にします。曖昧さを排除し、今取り組むべき最も効果的な学習ルートを導き出します。',
  },
];

const caseStudy = [
  { label: '【学年・性別】', body: '木更津市内 中学2年生・男子' },
  { label: '【ビフォー】', body: '定期テスト 数学38点' },
  {
    label: '【原因の分析】',
    body: '計算ミスではなく「途中式の管理不足」。授業中の動作を確認すると、ノートの余白や問題用紙の隅に計算を殴り書きしており、自分自身で書いた数字を見失ってミスを誘発していることが判明。',
  },
  {
    label: '【具体的な介入】',
    body: '「ノートの書き方修正」。マス目に対して途中式を必ず縦に揃えて書くルールを徹底。自習室でも書き方が崩れていないかを定着するまで繰り返し確認します。',
  },
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
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2 lg:min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-relaxed">
              「なぜできないのか」を見抜く。
              <br />
              「どうすればもっと伸びるのか」を設計する。
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
              木更津市金田東の個別指導塾、学習塾ミネルバ。
              <br />
              勉強を教えるだけではない。成績が決まるプロセスそのものを分析します。
            </p>
            <div className="sm:self-start">
              <CtaButton href="/contact">
                無料学習診断レポート付き体験授業を申し込む
              </CtaButton>
            </div>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[420px] lg:min-h-full">
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
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center leading-relaxed border-b border-slate-200 pb-5">
            お子様に、こんなお悩みはありませんか？
          </h2>
          <ul className="space-y-4">
            {worries.map((worry) => (
              <li
                key={worry}
                className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4"
              >
                <span aria-hidden="true" className="text-orange-600 mt-0.5 text-lg font-bold flex-shrink-0">
                  □
                </span>
                <span className="text-base sm:text-lg leading-relaxed">{worry}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base sm:text-lg text-slate-700 leading-relaxed">
            これらの原因は、お子様の「やる気」や「能力」のせいではありません。点数が伸び悩む本当の理由は、本人も気づいていない「学習プロセスの癖」にあります。
          </p>
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
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[280px] sm:h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
              <Image
                src="/images/policy-tutoring.jpg"
                alt="生徒と一緒に途中式を確認する個別指導の様子"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
                偏差値45の子には「原因特定」を。
                <br />
                偏差値65の子には「効率の最適化」を。
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                木更津市で塾をお探しの保護者様へ。点数が伸び悩んでいる子には、手が止まる物理的な理由が必ずあります。すでに高い実力がある子には、さらに上を目指すための無駄のない手順があります。どちらのステージにいる生徒にとっても、本当に必要なのは「自分の学習プロセスを客観的に把握し、自習の質を高める力」です。ミネルバは、すべての学力層の「自走」を支えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ミネルバの本質（3ステップ） */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-center leading-relaxed border-b border-slate-200 pb-5">
            分析は手段に過ぎない。目的地は「自分でできるようになること」。
          </h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <li
                key={step.title}
                className={`bg-slate-50 rounded-xl shadow-sm overflow-hidden ${
                  step.isGoal ? 'border-2 border-orange-500' : 'border border-slate-200'
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold mb-4 ${
                      step.isGoal ? 'text-orange-700' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 自習室の価値訴求 */}
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[260px] sm:min-h-[400px] lg:min-h-[560px]">
            <Image
              src="/images/study-room.jpg"
              alt="私語厳禁で静かな学習塾ミネルバの自習室"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              授業は週2回。成績を決める「残り166時間」もすべて支える。
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                どれほど質の高い授業を週に数時間受けたとしても、それ以外の家庭学習の時間をダラダラと過ごしてしまえば成績は絶対に上がりません。
              </p>
              <p>
                ミネルバは、授業日以外の「圧倒的に長い時間」を、私語厳禁の研ぎ澄まされた自習室での演習へと変えさせます。授業の分析結果と直結した個別課題を出すため、生徒は自習室に来て「何をすればいいかわからない」と迷うことがありません。家で勉強しないとお悩みの木更津市の中学生・高校生に、最高の学習環境を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 現象ベースの3軸分析 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center leading-relaxed border-b border-slate-200 pb-5">
            学習効率を最適化する、ミネルバの3つの分析視点
          </h2>
          <div className="relative h-[220px] sm:h-[340px] overflow-hidden rounded-2xl border border-slate-200 shadow-md mb-12">
            <Image
              src="/images/analysis-pen.jpg"
              alt="マス目に揃えて途中式を書く学習の作法"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {analysisAxes.map((axis) => (
              <div key={axis.title} className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-serif text-lg font-bold mb-6 border-b border-slate-300 pb-3">
                  {axis.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{axis.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <CtaButton href="/policy" variant="secondary">
              さらに詳しい分析手法はこちら
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ケーススタディ */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed border-b border-slate-200 pb-5">
            成果は生徒ごとに異なりますが、改善の流れは共通しています
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="relative h-[260px] sm:h-[360px] overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <Image
                src="/images/home-test.jpg"
                alt="定期テスト数学の答案"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <article className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-slate-200">
              <dl className="space-y-5">
                {caseStudy.map(({ label, body }) => (
                  <div key={label}>
                    <dt className="font-bold border-b border-slate-300 pb-2 mb-2">{label}</dt>
                    <dd className="text-slate-700 leading-relaxed">{body}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-bold text-orange-700 border-b border-slate-300 pb-2 mb-2">
                    【アフター（結果）】
                  </dt>
                  <dd className="text-lg sm:text-xl font-bold leading-relaxed">
                    数学 72点に向上（ケアレスミスが完全にゼロになり大幅な得点アップを達成）。
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      {/* 指導報告書サンプル */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center leading-relaxed border-b border-slate-200 pb-5">
            毎回の「指導報告」で、授業分析のすべてを可視化
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-14 text-center">
            ミネルバでは、今日の授業でお子様が「どこで詰まり、どう修正したか」を毎回その日のうちに保護者様へ詳細にお送りします。塾での様子が手に取るようにわかります。
          </p>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[300px] sm:h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <Image
                src="/images/hero-lesson.jpg"
                alt="授業中に生徒の手元を確認する講師"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            {/* スマホ画面風UI */}
            <div className="mx-auto w-full max-w-sm rounded-[2rem] border-8 border-slate-900 bg-slate-900 shadow-xl overflow-hidden">
              <div className="bg-navy-900 px-5 py-4 text-white">
                <p className="text-xs text-orange-400 font-bold">学習塾ミネルバ</p>
                <p className="text-sm font-bold mt-0.5">本日の指導報告</p>
              </div>
              <div className="bg-slate-100 px-4 py-5">
                <p className="bg-white rounded-2xl rounded-tl-sm px-5 py-4 text-sm text-slate-800 leading-relaxed shadow-sm">
                  本日の数学の連立方程式の演習では、立式のプロセスは完璧に理解できていました。しかし、計算の最終段階である引き算の符号ミスが2箇所連続して見られました。手の動きを観察したところ、暗算で処理しようとして焦り、ペンの動きが雑になっていることが原因です。「符号を変えるプロセスを必ず1行書き足す」という物理的な動作を約束させました。自習室でのワーク取り組み時にも、この約束が守られているか定着するまで繰り返し確認します。
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14 flex justify-center">
            <CtaButton href="/grades" variant="secondary">
              指導方針・自習室の詳細はこちら
            </CtaButton>
          </div>
        </div>
      </section>

      {/* フッター前CTA */}
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              勉強しているのに伸びない理由。
              <br />
              あるいは、もっと伸びるための改善点。
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
              まずは80分の体験授業で見つけてみませんか。
            </p>
            <div className="bg-navy-800 p-6 sm:p-8 rounded-xl mb-10 border border-navy-700">
              <p className="font-bold mb-6 text-orange-400 leading-relaxed">
                体験授業後には、お預かりしたお子様の学習プロセスを精査し、以下の内容を明確にした「学習診断レポート」をお渡しします。
              </p>
              <ul className="space-y-4">
                {reportBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-orange-500 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-slate-200 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                現在の塾での勉強やテスト対策に手応えを感じていない方も、現状を打破する指針としてお役立てください。
              </p>
            </div>
            <div className="sm:self-start">
              <CtaButton href="/contact">
                無料学習診断レポート付き体験授業を申し込む
              </CtaButton>
            </div>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[400px] lg:min-h-full">
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
