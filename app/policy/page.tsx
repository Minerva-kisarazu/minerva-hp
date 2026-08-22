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
    body: '講師が一方的に解説するのをやめ、「なぜその答えになったのか」を生徒自身に説明させます。「一言で言うと何の話？」「この式は何を計算している？」「この長さは何を表している？」。授業中はこうした問いを繰り返し、曖昧な「わかったつもり」を残しません。',
  },
  {
    title: '「考える部分」と「覚えて機械的に処理する部分」を切り分ける',
    body: 'すべてを考えさせるわけではありません。移項の処理、疑問文への書き換え、証明の書き方のように、迷う必要のない場所はあえて型として覚えさせ、機械的に処理できるようにします。そうして生まれた余力を、本当に考えるべき「何を文字に置いて、どんな式を作るか」に使わせます。',
  },
  {
    title: '「自力で読み解く」練習の徹底',
    body: '解説を待つのではなく、まず自分の力で文章から要点を掴む。自分で丸付けをし、気づきを自分の言葉でメモする。この「正しい学習の作法」を繰り返すことで、1時間の学びから10を得る「吸収率」を劇的に引き上げます。',
  },
];

const studyRules = [
  {
    title: '「解く・丸付け・やり直し」までが宿題です',
    body: '解いただけで提出されると、もともと解ける問題を解いただけになってしまいます。丸付けをして、間違えた理由を確認して、解き直す。ここまでを一組でお願いしています。分からなかった箇所には印をつけて、授業で質問してもらいます。',
  },
  {
    title: '宿題は、やり方を覚えているうちに始めてください',
    body: '授業から日が空いてから取りかかると、前提から忘れていて宿題そのものが解けません。当日か翌日に少しずつ進めるほうが、まとめて取り組むより負担が軽く、定着します。',
  },
  {
    title: '解き終わるまで、解答もヒントも見ません',
    body: '途中で解答例を覗く癖がつくと、テストで手が動かなくなります。不安な箇所は解き終わってから確認する。どうしても分からないときは、答えではなく解き方を調べる。この順番を守らせます。',
  },
  {
    title: '覚え方そのものを教えます',
    body: '同じ漢字や単語を何十回も書き写す必要はありません。手本を隠して、テストのつもりで書く。書けたものは飛ばして、書けなかったものにだけ時間をかける。英単語なら「訳す→言う→書く」の順に進める。この手順を授業内で一度一緒にやってから、家庭学習に渡します。',
  },
  {
    title: '「できた」の基準をそろえます',
    body: '「問題文以外は何も見ずに、最初から最後まで自分で答案を書けた」状態を、その問題ができた状態と定義します。解説を読んで納得した段階は、まだ途中です。この基準を生徒と共有しておくことで、演習の質が変わります。',
  },
];

const analysisDetails = [
  {
    title: '解き方・問題の解き進め方を分析',
    body: 'ノートの余白の使い方、問題用紙への書き込み、筆算の配置など、問題を解いている最中の動作をすべてチェックします。途中式を書かずに暗算で処理している。前の問題の式の数字だけを変えて済ませている。図に分かっている数値を書き込まないまま考え込んでいる。こうした無意識の癖を見つけ出し、得点に直結する動作へと修正し、定着するまで繰り返し確認します。',
  },
  {
    title: 'どこで考えることを止めているかを分析',
    body: '問題のどの段階で手が止まるのか、どの記述を見たときに読み飛ばしが始まるのか。設問の指示を読まずに答えを書き始める。分からないとすぐ解答例からヒントを探す。答えを出したあとに「聞かれていたこと」を確認しない。単なる集中力不足やケアレスミスという言葉で片付けず、考えることを止めているポイントを特定して対策を講じます。',
  },
  {
    title: '「分かる」と「できる」の境目を分析',
    body: '「わかった」という言葉をそのまま信じません。対話を通じて、自信を持って説明できる範囲と、なんとなくの感覚で解いている範囲を切り分けます。同じ形の問題は解けるのに条件が少し変わると止まる、という状態は、この境目が本人にも見えていないことが原因です。境目を明確にすることで、やるべき課題がピンポイントで決まり、無駄な反復や背伸びをした難問演習による時間の浪費を防ぎます。',
  },
  {
    title: 'どの学年まで戻る必要があるかを分析',
    body: '中学3年生の関数が進まない原因が、中学2年生の等式の変形にあり、さらにその原因が小学校で習う分数や単位の理解にある。こうした構造は珍しくありません。今の学年の内容を繰り返しても動かないときは、原因のある学年まで一度戻ります。戻るべき地点を特定できるかどうかが、遠回りに見えて最短になるかどうかの分かれ目です。',
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
            成果を偶然にしないための「客観的な分析」
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

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-base font-bold text-orange-700 mb-3 text-center">
            【学習の作法】家庭学習まで含めて設計する
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed">
            ミネルバが生徒と交わしている、5つの約束
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 border-b border-slate-200 pb-8">
            授業の時間は週に数時間しかありません。成績を決めるのは、それ以外の時間の使い方です。ミネルバでは「何を勉強するか」だけでなく「どう勉強するか」を具体的に決めて、生徒と共有しています。ご家庭でも同じ声かけをしていただけるよう、指導報告でお伝えします。
          </p>
          <ol className="space-y-5 sm:space-y-6">
            {studyRules.map(({ title, body }, index) => (
              <li
                key={title}
                className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    aria-hidden="true"
                    className="font-serif font-bold text-2xl text-orange-600 tabular-nums flex-shrink-0"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">{title}</h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PreFooterCta heading="私たちの指導方針を、実際の授業で体験してみませんか。" />
    </main>
  );
}
