import type { Metadata } from 'next';
import Image from 'next/image';
import CtaButton from '@/components/CtaButton';

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
    title: 'ステップ1：【分析する】',
    body: '授業を通じて、ペンの動かし方、考える手が止まるポイント、理解の切れ目をプロの眼で正確につかみます。',
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
    title: '解き方・問題の解き進め方を分析',
    body: '途中式を書かずに暗算で処理していないか。英単語を手本から1文字ずつ写していないか。前の問題の式の数字だけを変えて済ませていないか。答えだけでなく「どう解いているか」を見て、失点につながる動作をその場で直します。',
  },
  {
    title: 'どこで考えることを止めているかを分析',
    body: '「間違えるのが怖い」で最初の一歩が止まる。「早く終わらせたい」で条件を読み飛ばす。分からないと解答例からヒントを探し始める。能力不足ではなく、学習を止めている判断の癖を見つけて、机に向かう進め方を整えます。',
  },
  {
    title: '「分かる」と「できる」の境目を分析',
    body: '「わかった」という言葉をそのまま信じません。「一言で言うと？」「この式は何を計算している？」と問い返し、自信を持って説明できる範囲と、なんとなく解いている範囲を切り分けて、今やるべき学習を決めます。',
  },
];

const processFlow = [
  { num: '01', title: '学習状況を分析', body: 'ノート・答案・解き方から、いまの課題を確認します。' },
  { num: '02', title: '原因を特定', body: '「なぜできないのか」を具体的にします。' },
  { num: '03', title: '授業で改善', body: '原因に合わせて、必要な内容を指導します。' },
  {
    num: '04',
    title: '自習で定着',
    body: '自習スペースで、自分で解いて丸付けまでする時間を確保します。',
  },
  { num: '05', title: '次の課題を設定', body: '学習状況を見て、次に取り組む内容を決めます。' },
  {
    num: '06',
    title: '保護者へ報告',
    body: 'できたこと・止まった箇所・原因・次の一手を、その日のうちにお送りします。',
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

const reportStats = [
  { value: '521', unit: '件', label: '直近半年に書いた指導報告の数' },
  { value: '約10.7', unit: '万字', label: 'その報告に書かれた文章量' },
  { value: '約200', unit: '字', label: '1回の授業あたりの記録量' },
];

const reportContents = [
  {
    title: '今日できていたこと',
    body: '「後半の教科書表現は全問正解でした」のように、具体的な行動として書きます。',
  },
  {
    title: 'どこで手が止まったか',
    body: 'どの問題の、どの段階で止まったのかを特定して記録します。',
  },
  {
    title: 'その原因の見立て',
    body: '「知らない」のか「手順が抜けている」のか「読み飛ばしている」のかを切り分けます。',
  },
  {
    title: '次にやること',
    body: '本人への指示と、ご家庭にお願いしたいことを、動作のレベルまで具体的に書きます。',
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
              <CtaButton href="/contact">
                無料学習診断レポート付き体験授業はこちら
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
                <span aria-hidden="true" className="text-orange-600 mt-0.5 text-xl font-bold flex-shrink-0">
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
              状態です。だから勉強時間を増やしても点数が変わりません。私たちは答案やノート、解いている最中の手元まで確認して、その手順のどこが抜けているのかを探します。
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
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed border-b border-slate-200 pb-5">
            分析して終わりではありません。
            <br />
            「自分でできるようになる」ことが目的です。
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-12 text-center sm:text-left">
            ミネルバでは、お子さまの学習状況を分析し、「何ができていないのか」だけでなく、「なぜできないのか」まで確認します。分析は手段に過ぎません。最終的な目的は、正しいやり方を身につけ、自分の力で問題を解けるようになることです。
          </p>
          <ol className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step) => (
              <li
                key={step.title}
                className={`bg-slate-50 rounded-xl shadow-sm overflow-hidden ${
                  step.isGoal ? 'border-2 border-orange-500' : 'border border-slate-200'
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
                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold mb-3 ${
                      step.isGoal ? 'text-orange-700' : 'text-slate-900'
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

      {/* 指導の流れ（6ステップ） */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed border-b border-slate-200 pb-5">
            授業だけで終わらない。
            <br />
            学習プロセスそのものを改善します。
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {processFlow.map((item) => (
              <li
                key={item.num}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6"
              >
                <p className="text-orange-600 font-serif font-bold text-2xl sm:text-3xl mb-2 tabular-nums">
                  {item.num}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 授業と自習 */}
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[240px] sm:min-h-[400px] lg:min-h-[560px]">
            <Image
              src="/images/study-room.jpg"
              alt="私語厳禁で静かな学習塾ミネルバの自習室"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              授業と自習を組み合わせ、学習習慣まで支えます。
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              質の高い授業を受けても、それ以外の時間をダラダラ過ごせば成績は上がりません。ミネルバは、授業の分析結果と直結した課題を自習室で再現させます。家で勉強しないとお悩みの木更津市の中学生・高校生に、最高の学習環境を提供します。
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              ミネルバでは
              <span className="font-bold text-white">
                「解く・丸付けする・やり直す」までを一組で宿題
              </span>
              と考えます。解いただけで終わると、もともと解ける問題を解いただけになってしまうためです。
            </p>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-orange-400 mb-4">
              中学生の1週間の学習モデル
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weekModel.map((item) => (
                <li
                  key={item.day}
                  className="bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 flex items-center gap-3"
                >
                  <span className="font-bold text-orange-400 w-8 flex-shrink-0">{item.day}</span>
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
            学習を最適化する、ミネルバの3つの分析視点
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
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12">
            半年間の指導報告を読み返すと、つまずきの中身は驚くほど似た形に集まります。実際に多く見られる3つの型と、それぞれに対してミネルバが行っていることをご紹介します。
          </p>
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
                    <dt className="font-bold text-orange-700 mb-1">ミネルバで行うこと</dt>
                    <dd className="text-slate-700">{action}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 指導報告書 */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-relaxed border-b border-slate-200 pb-5">
            毎回の授業を、その日のうちに「診断書」にしています
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12">
            今日の授業でお子さまが何をできていて、どこで手が止まり、その原因は何で、次に何をするのか。それを毎回その日のうちに保護者様へお送りしています。「今日は一次関数をやりました」という報告ではありません。
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {reportStats.map(({ value, unit, label }) => (
              <div
                key={label}
                className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-6 text-center"
              >
                <dd className="font-serif font-bold text-navy-900 leading-none">
                  <span className="text-4xl sm:text-5xl tabular-nums">{value}</span>
                  <span className="text-xl sm:text-2xl ml-1">{unit}</span>
                </dd>
                <dt className="mt-3 text-base text-slate-700 leading-relaxed">{label}</dt>
              </div>
            ))}
          </dl>

          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6 leading-relaxed">
            指導報告に必ず書く、4つのこと
          </h3>
          <ul className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {reportContents.map(({ title, body }) => (
              <li
                key={title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6"
              >
                <h4 className="font-bold text-lg text-orange-700 mb-2 leading-snug">{title}</h4>
                <p className="text-base text-slate-700 leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-[280px] sm:h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <Image
                src="/images/hero-lesson.jpg"
                alt="授業中に生徒の手元を確認する講師"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                実際にお送りしている指導報告の一例です（内容は一部を変えています）。
              </p>
              <div className="mx-auto w-full max-w-sm rounded-[2rem] border-8 border-slate-900 bg-slate-900 shadow-xl overflow-hidden">
                <div className="bg-navy-900 px-5 py-4 text-white">
                  <p className="text-xs text-orange-400 font-bold">学習塾ミネルバ</p>
                  <p className="text-sm font-bold mt-0.5">本日の指導報告</p>
                </div>
                <div className="bg-slate-100 px-4 py-5">
                  <p className="bg-white rounded-2xl rounded-tl-sm px-5 py-4 text-base text-slate-800 leading-relaxed shadow-sm">
                    本日は連立方程式の文章題を扱いました。式を作るところまでは正しくできていて、割合の問題も自分で立式できています。一方で、引き算と九九のところで計算ミスが続きました。手元を見ていると暗算で処理しようとしていて、途中式がノートに残っていないため、間違えた箇所をご本人も後から確認できない状態です。式を縦に揃えて、消しゴムを使わずに全部残すよう指導しました。宿題も同じ書き方でお願いします。次回の自習でも同じ形で解けているかを確認します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-14 flex justify-center">
            <CtaButton href="/policy" variant="secondary">
              分析手法と指導の考え方はこちら
            </CtaButton>
          </div>
        </div>
      </section>

      {/* フッター前CTA */}
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              勉強しているのに伸びない理由。あるいは、もっと伸びるための改善点。
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed">
              まずは80分の体験授業で見つけてみませんか。
            </p>
            <div className="bg-navy-800 p-5 sm:p-8 rounded-xl mb-8 sm:mb-10 border border-navy-700">
              <p className="font-bold mb-5 text-orange-400 leading-relaxed">
                体験授業後には、お預かりしたお子さまの学習プロセスを精査し、以下の内容を明確にした「学習診断レポート」をお渡しします。
              </p>
              <ul className="space-y-3">
                {reportBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-orange-500 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-base text-slate-200 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base text-slate-300 leading-relaxed">
                現在の塾での勉強やテスト対策に手応えを感じていない方も、現状を打破する指針としてお役立てください。
              </p>
            </div>
            <div className="sm:self-start">
              <CtaButton href="/contact">
                無料学習診断レポート付き体験授業を申し込む
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
