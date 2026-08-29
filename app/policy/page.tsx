import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import PreFooterCta from '@/components/PreFooterCta';
import { ImprovementFlowCard } from '@/components/home/HomeVisualBlocks';
import { improvementPatterns } from '@/data/improvementPatterns';

export const metadata: Metadata = {
  title: '指導方針',
  description:
    '木更津市の個別指導塾 学習塾ミネルバの指導方針。答えを渡すだけでなく、解き方を教え、最後は自分で解けるようにする個別指導です。',
};

const founderMessage = [
  '良い教材があることと、それを自分で使いこなせることとは別です。',
  'どれほど良い授業や参考書があっても、問題を読んで必要な情報を取り出すことができなければ、解けません。解き方を知っていても、少し形が変わったときに何を使えばよいか考えられなければ、解けません。答えが出ても、自分の答えが問題の問いに合っているか確かめられなければ、失点します。',
  'だから私は、勉強を通じて「自分で考えるための基本動作」を身につけてほしいと考えています。これは特別に難しいことではありません。',
  '問題文をきちんと読む。何を聞かれているのかを確認する。分かっていることを整理する。自分で解き方を考える。答えを出す。そして、本当に合っているか確かめる。間違えたら、どこで考え方がずれたのかを振り返る。',
  'この繰り返しが、教科を問わず必要になる「考える力」の土台になります。ミネルバでは、この流れを毎回の授業と自習で実際になぞらせ、指導報告に記録して定着を確認します。',
  'そのために、答案やノートだけでなく、問題を解いている途中の様子まで確認し、「なぜできないのか」を分析します。分析は目的ではありません。生徒が自分で考え、自分で学習を進められるようになるための手段です。',
];

const lessonFeatures = [
  {
    title: '対話が生む「思考の言語化」',
    body: '講師が一方的に解説するのをやめ、「なぜその答えになったのか」を生徒自身に説明させます。「一言で言うと何の話？」「この式は何を計算している？」「この長さは何を表している？」。授業中はこうした問いを繰り返し、曖昧な「わかったつもり」を残しません。自分の考えを言葉にできるかどうかを見ることで、本人がどこまで理解しているのかを確認します。',
  },
  {
    title: '「考える部分」と「覚えて機械的に処理する部分」を切り分ける',
    body: 'すべてを考えさせるわけではありません。移項の処理、疑問文への書き換え、証明の書き方のように、迷う必要のない場所はあえて型として覚えさせ、機械的に処理できるようにします。そうして生まれた余力を、本当に考えるべき「何を文字に置いて、どんな式を作るか」に使わせます。',
  },
  {
    title: '「自力で読み解く」練習の徹底',
    body: '解説を待つのではなく、まず自分の力で文章から要点を掴む。設問が何を聞いているのかを確認し、自分で答えを作る。自分で丸付けをし、間違えたところを確認し、気づきを自分の言葉でメモする。「読む→考える→解く→確かめる」という流れを繰り返すことで、授業で分かったことを、自分で使えるようにしていきます。',
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
            「教えてもらう」から、「自分で考えて学べる」へ。
          </h2>
          <div className="mb-10 space-y-3 max-w-3xl">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              授業で答えを知るだけではなく、問題を自分で読み、考え、解き、間違いを直し、次に何をすればよいかを自分で判断できる状態を目指します。
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

      <section className="bg-brand-900 text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="text-sm sm:text-base font-bold text-accent-400 mb-4">
            【授業】自分で考えて解く力を鍛える
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
            「答えを教える」から、「自分で解ける」へ。
          </h2>
          <div className="space-y-2 font-serif text-lg sm:text-xl font-bold text-white leading-relaxed mb-6">
            <p>答えを教える。</p>
            <p>ではなく、解き方の考え方を教える。</p>
            <p>そして、その考え方を自分で使えるようにする。</p>
          </div>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            必要なことは、きちんと教えます。ただ答えを渡して終わるのではなく、最後は自分の力で問題を読み、考え、解けるようにする。それが私たちの個別指導です。
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-6 sm:space-y-8">
            {lessonFeatures.map(({ title, body }) => (
              <div key={title} className="card-padded">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 text-brand-900 border-b border-slate-200 pb-3">
                  {title}
                </h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed border-b border-slate-300 pb-5">
            成果を偶然にしないための「客観的な分析」
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 space-y-4">
            <p>
              私たちが学習プロセスを見るのは、細かなミスを探すためだけではありません。問題を読む、考える、解く、確かめるという一連の流れの中で、どこがうまくいっていないのかを具体的にするためです。
            </p>
            <p>
              「思考力が足りない」「読解力がない」といった曖昧な言葉で終わらせず、「設問の条件を読んでいない」「必要な情報を整理せずに計算を始めている」「答えを書いたあとに問いを確認していない」というところまで具体化します。
            </p>
            <p>その具体性があるからこそ、次に何を練習すればよいのかが決まります。</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {analysisDetails.map(({ title, body }) => (
              <div key={title} className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 text-accent-700 leading-snug">
                  {title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="improvement-patterns" className="bg-slate-50 py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-relaxed border-b border-slate-300 pb-5">
            成果は生徒ごとに異なりますが、改善の流れは共通しています
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 space-y-3">
            <p>生徒によってつまずく場所は違います。</p>
            <p>
              ただ、答案やノートを見ていくと、同じような失敗の型が見えてくることがあります。ミネルバでは、その原因を具体的に見つけ、勉強のやり方そのものを修正します。
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {improvementPatterns.map((pattern) => (
              <ImprovementFlowCard key={pattern.subject} {...pattern} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-base font-bold text-accent-700 mb-3 text-center">
            【学習の進め方】家庭学習まで含めて設計する
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-relaxed">
            ミネルバが生徒と交わしている、5つの約束
          </h2>
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12 border-b border-slate-200 pb-8 space-y-3">
            <p>
              授業の時間は週に数時間しかありません。成績を決めるのは、それ以外の時間の使い方です。ミネルバでは「何を勉強するか」だけでなく「どう勉強するか」を具体的に決めて、生徒と共有しています。ご家庭でも同じ声かけをしていただけるよう、指導報告でお伝えします。
            </p>
            <p>
              これらは単なる勉強のルールではありません。自分で学習を進めるために必要な「勉強のやり方」として、生徒と共有しています。
            </p>
          </div>
          <ol className="space-y-5 sm:space-y-6">
            {studyRules.map(({ title, body }, index) => (
              <li
                key={title}
                className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    aria-hidden="true"
                    className="font-serif font-bold text-2xl text-brand-900 tabular-nums flex-shrink-0"
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

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center leading-relaxed border-b border-slate-300 pb-5">
            この指導をしている人
          </h2>
          <div className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
            <div className="relative mx-auto mb-8 w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src="/images/founder.jpg"
                alt="学習塾ミネルバ 塾長 橋本陵平"
                fill
                sizes="(min-width: 640px) 384px, 100vw"
                className="object-cover object-center"
              />
            </div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center sm:text-left">
              塾長　橋本 陵平
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed text-center sm:text-left">
              奈良県出身
              <br />
              大阪星光学院中高卒
              <br />
              早稲田大学政治経済学部卒
            </p>
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                学生時代から塾講師として指導し、校長・教務主任を歴任。15年間、数百名以上の生徒を指導してきました。
              </p>
              <p>
                結婚を機に木更津へ移住し、現在はミネルバを運営。一人ひとりの学習状況を見ながら指導しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCta
        heading="指導方針について、まずはお気軽にご相談ください。"
        subtext="面談でお子さまの学習状況を確認したうえで、必要に応じて体験授業をご案内します。"
      />
    </main>
  );
}
