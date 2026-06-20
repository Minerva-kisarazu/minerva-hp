import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* ヒーローセクション */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-placeholder.jpg"
            alt="木更津市の中学生をターゲットにした背景画像"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            「なぜできないのか」を見抜く。「どうすればもっと伸びるのか」を設計する。
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            木更津市金田東の個別指導塾、学習塾ミネルバ。
            <br />
            勉強を教えるだけではない。成績が決まるプロセスそのものを分析します。
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-md transition-colors"
          >
            無料学習診断レポート付き体験授業を申し込む
          </a>
        </div>
      </section>

      {/* お悩み共感セクション */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            お子様に、こんなお悩みはありませんか？
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {[
              '[ ] 家で全く勉強しない、テスト前しか机に向かわない',
              '[ ] 勉強時間はそれなりに長いのに、いまいち成績が伸びない',
              '[ ] テストでいつも同じようなケアレスミスを繰り返している',
              '[ ] テスト対策として、具体的に何から手を付ければいいか分かっていない'
            ].map((item, index) => (
              <li key={index} className="text-lg text-gray-700 pl-4 border-l-2 border-gold-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
            これらの原因は、お子様の「やる気」や「能力」のせいではありません。点数が伸び悩む本当の理由は、本人も気づいていない「学習プロセスの癖」にあります。
          </p>
        </div>
      </section>

      {/* ターゲットセクション */}
      <section className="bg-navy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            偏差値 45 の子には「原因特定」を。偏差値 65 の子には「効率の最適化」を。
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            木更津市で塾をお探しの保護者様へ。点数が伸び悩んでいる子には、手が止まる物理的な理由が必ずあります。すでに高い実力がある子には、さらに上を目指すための無駄のない手順があります。どちらのステージにいる生徒にとっても、本当に必要なのは「自分の学習プロセスを客観的に把握し、自習の質を高める力」です。ミネルバは、すべての学力層の「自走」を支えます。
          </p>
        </div>
      </section>

      {/* ミネルバの本質（3 ステップ図） */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            分析は手段に過ぎない。目的地は「自分でできるようになること」。
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* ステップ 1 */}
            <div className="text-center max-w-md bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gold-500">ステップ 1：【分析する】</h3>
              <p className="text-gray-700 leading-relaxed">
                授業を通じて、ペンの動かし方、思考停止が起きるポイント、知識の境界線をプロの眼で正確につかみます。
              </p>
            </div>
            {/* アロー */}
            <div className="hidden md:block text-4xl font-bold text-gray-400">➡</div>
            {/* ステップ 2 */}
            <div className="text-center max-w-md bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gold-500">ステップ 2：【改善する】</h3>
              <p className="text-gray-700 leading-relaxed">
                見つかった課題に対して、ノートの書き方や問題の読み進め方など、具体的な「正しい学習の作法」をその場で指導・修正します。
              </p>
            </div>
            {/* アロー */}
            <div className="hidden md:block text-4xl font-bold text-gray-400">➡</div>
            {/* ステップ 3 */}
            <div className="text-center max-w-md bg-white p-6 rounded-lg shadow-md border-2 border-gold-500">
              <h3 className="text-xl font-bold mb-4 text-gold-500">ステップ 3：【自立する（ゴール）】</h3>
              <p className="text-gray-700 leading-relaxed">
                正しいやり方を自習室での演習で再現し、誰に教えられなくても「自分の力で初見の問題を解ける」状態を確立します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 自習室の価値訴求セクション */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            授業は週 2 回。成績を決める「残り 166 時間」もすべて支える。
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            どれほど質の高い授業を週に数時間受けたとしても、それ以外の家庭学習の時間をダラダラと過ごしてしまえば成績は絶対に上がりません。
            <br />
            ミネルバは、授業日以外の「圧倒的に長い時間」を、私語厳禁の研ぎ澄まされた自習室での演習へと変えさせます。授業の分析結果と直結した個別課題を出すため、生徒は自習室に来て「何をすればいいかわからない」と迷うことがありません。家で勉強しないとお悩みの木更津市の中学生・高校生に、最高の学習環境を提供します。
          </p>
        </div>
      </section>

      {/* 分析セクション（現象ベースの 3 軸） */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            学習効率を最適化する、ミネルバの 3 つの分析視点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* カード 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gold-500">【解き方と手の動き】</h3>
              <p className="text-gray-700 leading-relaxed">
                英単語を手本から 1 文字ずつ確認しながら写している。数学の途中式を省いていつも同じ場所でミスをしている。答えという結果だけを見るのではなく、「授業中にどのようにペンを動かしているか」を観察し、無意識のうちに失点を生んでいる動作の癖をその場で修正します。
              </p>
            </div>
            {/* カード 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gold-500">【思考停止が起きるポイント】</h3>
              <p className="text-gray-700 leading-relaxed">
                「間違えるのが怖い」から最初の一歩のペンが止まる。「早く終わらせたい」から焦って問題文の条件を読み飛ばす。能力の問題ではなく、日々の学習効率を著しく下げている判断の癖や姿勢を見極め、机に向かうアプローチを整えます。
              </p>
            </div>
            {/* カード 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gold-500">【知識の境界線】</h3>
              <p className="text-gray-700 leading-relaxed">
                生徒の「わかった」という言葉をそのまま受け入れることはしません。対話を通じて「どこまでは正確に理解できていて、どこからが曖昧なのか」の切れ目を明確にします。曖昧さを排除し、今取り組むべき最も効果的な学習ルートを導き出します。
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-12 text-center">
            <a
              href="/policy"
              className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              さらに詳しい分析手法はこちら
            </a>
          </div>
        </div>
      </section>

      {/* ケーススタディセクション */}
      <section className="bg-navy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            成果は生徒ごとに異なりますが、改善の流れは共通しています
          </h2>
          <div className="bg-white text-gray-900 max-w-4xl mx-auto p-8 rounded-lg shadow-xl">
            <div className="space-y-6">
              <p className="font-bold text-gold-600">【学年・性別】</p>
              <p>木更津市内 中学 2 年生・男子</p>
              <hr className="border-gray-300" />
              <p className="font-bold text-gold-600">【ビフォー】</p>
              <p>定期テスト 数学 38 点</p>
              <hr className="border-gray-300" />
              <p className="font-bold text-gold-600">【原因の分析】</p>
              <p>計算ミスではなく「途中式の管理不足」。授業中の動作を確認すると、ノートの余白や問題用紙の隅に計算を殴り書きしており、自分自身で書いた数字を見失ってミスを誘発していることが判明。</p>
              <hr className="border-gray-300" />
              <p className="font-bold text-gold-600">【具体的な介入】</p>
              <p>「ノートの書き方修正」。マス目に対して途中式を必ず縦に揃えて書くルールを徹底。自習室でも書き方が崩れていないかを定着するまで繰り返し確認します。</p>
              <hr className="border-gray-300" />
              <p className="font-bold text-gold-600">【アフター（結果）】</p>
              <p className="text-xl font-semibold text-navy-900">数学 72 点に向上（ケアレスミスが完全にゼロになり大幅な得点アップを達成。）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 指導報告セクション */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            毎回の「指導報告」で、授業分析のすべてを可視化
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
            ミネルバでは、今日の授業でお子様が「どこで詰まり、どう修正したか」を毎回その日のうちに保護者様へ詳細にお送りします。塾での様子が手に取るようにわかります。
          </p>

          {/* スマホ UI 風 */}
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200">
            {/* スマホフレーム */}
            <div className="bg-navy-900 px-6 py-8 text-white">
              <p className="text-sm font-semibold mb-2">本日の数学</p>
              <h3 className="text-xl font-bold">連立方程式の演習</h3>
            </div>
            <div className="p-6 space-y-4">
              <p>
                立式のプロセスは完璧に理解できていました。しかし、計算の最終段階である引き算の符号ミスが 2 箇所連続して見られました。
              </p>
              <p>
                手の動きを観察したところ、暗算で処理しようとして焦り、ペンの動きが雑になっていることが原因です。
              </p>
              <p className="bg-navy-50 p-4 rounded-lg">
                「符号を変えるプロセスを必ず 1 行書き足す」という物理的な動作を約束させました。自習室でのワーク取り組み時にも、この約束が守られているか定着するまで繰り返し確認します。
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <a
              href="/grades"
              className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              指導方針・自習室の詳細はこちら
            </a>
          </div>
        </div>
      </section>

      {/* フッター前 CTA セクション */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            勉強しているのに伸びない理由。あるいは、もっと伸びるための改善点。
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
            まずは 80 分の体験授業で見つけてみませんか。
          </p>

          {/* レポート特典 */}
          <div className="max-w-4xl mx-auto bg-navy-800 p-8 rounded-lg mb-12">
            <p className="text-xl font-semibold mb-6 text-gold-500">
              体験授業後には、お預かりしたお子様の学習プロセスを精査し、以下の内容を明確にした「学習診断レポート」をお渡しします。
            </p>
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 mt-1">✓</span>
                <span>どこで思考が止まっているのか</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 mt-1">✓</span>
                <span>何を最優先で克服すべきなのか</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2 mt-1">✓</span>
                <span>どこが伸びしろなのか</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              現在の塾での勉強やテスト対策に手応えを感じていない方も、現状を打破する指針としてお役立てください。
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-10 py-5 rounded-md transition-colors text-lg"
          >
            無料学習診断レポート付き体験授業を申し込む
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
