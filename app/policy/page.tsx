import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: '指導方針',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの指導方針。「教えてもらう」から「自分で学べる」へ。必要なことは教えつつ、最初から答えを与えず、自分で考える力を育てます。',
};

const founderMessage = [
  '塾講師として現場に立ち、多くの生徒たちを見てきて確信していることがあります。それは、同じ教室で同じ授業を受け、同じ教材を使っても、結果の出方には大きな差があるという現実です。',
  '今の時代、映像授業や良質な参考書は世の中に溢れています。しかし、どれほど優れた材料があっても、それを「自ら掴み取り、使いこなす力」がなければ、成果には結びつきません。',
  '私は、勉強や受験こそが自分を鍛える最高の機会だと考えています。定期テストや志望校合格という明確な目標に向かって本気で努力し、壁を乗り越える。その過程で培われる「自分で目標を立て、考え、実行する力」こそが、これからの時代を生き抜くための何よりの武器になると信じています。',
  '当塾は、単に答えを教えるだけの場所ではありません。受験という挑戦を、自分自身を成長させる最高のトレーニングに変える。そのために、私たちは「学習プロセスそのものを分析する」という思想を掲げ、生徒一人ひとりの「自律して学ぶ力」を構造的に鍛えていきます。',
];

const lessonFeatures = [
  {
    title: '対話が生む「思考の言語化」',
    body: '講師が一方的に解説するのをやめ、「なぜその答えになったのか」を生徒自身に説明させます。自分の思考を言葉にさせることで、曖昧な「わかったつもり」を排除し、論理の筋道を自分のものにします。',
  },
  {
    title: '「自力で読み解く」練習の徹底',
    body: '解説を待つのではなく、まず自分の力で文章から要点を掴む。自分で丸付けをし、気づきを自分の言葉でメモする。この「正しい学習の作法」を繰り返すことで、1時間の学びから10を得る「吸収率」を劇的に引き上げます。',
  },
];

const analysisDetails = [
  {
    title: '解き方・問題の解き進め方を分析',
    body: 'ノートの余白の使い方、問題用紙への書き込み、筆算の配置など、問題を解いている最中の動作をすべてチェックします。本人が無意識に行っている「ミスを誘発する書き方の癖」を見つけ出し、得点に直結するきれいな動作へと修正し、定着するまで繰り返し確認します。',
  },
  {
    title: 'どこで考えることを止めているかを分析',
    body: '問題のどの段階で手が止まるのか、どの記述を見たときに読み飛ばしが始まるのか。単なる集中力不足やケアレスミスという言葉で片付けず、考えることを止めているポイントを特定して対策を講じます。',
  },
  {
    title: '「分かる」と「できる」の境目を分析',
    body: '対話を通じて、「100%自信を持って説明できる範囲」と「なんとなくの感覚で解いている範囲」を切り分けます。この境目を明確にすることで、やるべき課題がピンポイントで決まり、無駄な反復や背伸びをした難問演習による時間の浪費を防ぎます。',
  },
];

export default function PolicyPage() {
  return (
    <main id="main">
      <PageHeader title="指導方針" />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-relaxed border-b border-slate-300 pb-5">
            日々の学習を通じて、一生モノの「自ら学ぶ力」を
          </h2>
          <div className="mb-10 space-y-3 max-w-3xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-relaxed">
              「教えてもらう」から、「自分で学べる」へ。
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              私たちは、目先の点数だけでなく、将来につながる学習習慣を育てます。
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {founderMessage.map((paragraph) => (
                <p key={paragraph} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-slate-200">
                <Image
                  src="/images/policy-tutoring.jpg"
                  alt="生徒と対話しながら進める個別指導の様子"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-sm font-bold text-orange-400 mb-3 text-center">【授業】理解する力を鍛える</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed">
            「教えすぎない」から、自分で考える力が育つ
          </h2>
          <div className="text-center text-base sm:text-lg text-slate-200 mb-12 leading-relaxed border-b border-navy-700 pb-8 space-y-2">
            <p className="font-bold text-white text-lg sm:text-xl">必要なことは教えます。</p>
            <p>ただし、最初から答えを与えることはしません。</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {lessonFeatures.map(({ title, body }) => (
              <div key={title} className="bg-navy-800 p-6 sm:p-10 rounded-xl border border-navy-700">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 text-orange-400">{title}</h3>
                <p className="text-base text-slate-200 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed border-b border-slate-300 pb-5">
            成果を偶然にしないための「3つの客観的分析」
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {analysisDetails.map(({ title, body }) => (
              <div key={title} className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 text-orange-700 leading-snug">
                  {title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCta heading="私たちの指導方針を、実際の授業で体験してみませんか。" />
    </main>
  );
}
