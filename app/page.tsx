import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション：画像なしでの滑らかなグラデーション */}
      <section className="relative bg-primary text-white py-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 hero-mesh-gradient opacity-95" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* 背景に知的な格言を配置（装飾用） */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] font-serif text-9xl select-none leading-none" style={{ top: '-10%', left: '5%' }}>
            ELEGANCE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 font-serif tracking-widest leading-relaxed">
            「なぜできないのか」を見抜く。
            <br />
            「どうすればもっと伸びるのか」を設計する。
          </h1>
          <p className="text-xl md:text-2xl text-accent/80 max-w-3xl mb-16 leading-relaxed font-light">
            木更津市金田東の個別指導塾、学習塾ミネルバ。
            <br />
            勉強を教えるだけではない。成績が決まるプロセスそのものを分析します。
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-semibold px-12 py-6 rounded-sm transition-all duration-700 shadow-elegant border border-slate-300/30 tracking-wide text-lg"
          >
            無料学習診断レポート付き体験授業を申し込む
          </a>
        </div>
      </section>

      {/* お悩み共感セクション */}
      <section className="bg-background text-textMain py-40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-serif tracking-widest border-b border-slate-200 pb-5">
            お子様に、こんなお悩みはありませんか？
          </h2>
          <ul className="max-w-3xl mx-auto space-y-6">
            {[
              '[ ] 家で全く勉強しない、テスト前しか机に向かわない',
              '[ ] 勉強時間はそれなりに長いのに、いまいち成績が伸びない',
              '[ ] テストでいつも同じようなケアレスミスを繰り返している',
              '[ ] テスト対策として、具体的に何から手を付ければいいか分かっていない'
            ].map((item, index) => (
              <li key={index} className="text-xl text-textMain pl-6 border-l-2 border-secondary/40 py-3 transition-all duration-700 hover:slate-50">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-14 max-w-3xl mx-auto text-xl text-textMain leading-relaxed font-light">
            これらの原因は、お子様の「やる気」や「能力」のせいではありません。点数が伸び悩む本当の理由は、本人も気づいていない「学習プロセスの癖」にあります。
          </p>
        </div>
      </section>

      {/* ターゲットセクション */}
      <section className="bg-primary text-white py-40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif tracking-widest leading-relaxed border-b border-slate-400/20 pb-5">
            偏差値 45 の子には「原因特定」を。偏差値 65 の子には「効率の最適化」を。
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-xl text-accent/90 leading-relaxed font-light">
            木更津市で塾をお探しの保護者様へ。点数が伸び悩んでいる子には、手が止まる物理的な理由が必ずあります。すでに高い実力がある子には、さらに上を目指すための無駄のない手順があります。どちらのステージにいる生徒にとっても、本当に必要なのは「自分の学習プロセスを客観的に把握し、自習の質を高める力」です。ミネルバは、すべての学力層の「自走」を支えます。
          </p>
        </div>
      </section>

      {/* ミネルバの本質（3 ステップ図） */}
      <section className="bg-background text-textMain py-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-serif tracking-widest border-b border-slate-200 pb-5">
            分析は手段に過ぎない。目的地は「自分でできるようになること」。
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* ステップ 1 */}
            <div className="text-center max-w-md bg-white p-8 rounded-sm shadow-elegant-sm border border-slate-100 hover:border-secondary/40 transition-all duration-700 hover:slate-50">
              <h3 className="text-2xl font-bold mb-6 text-primary tracking-widest border-b border-slate-200 pb-3">
                ステップ 1：【分析する】
              </h3>
              <p className="text-textMain leading-relaxed">
                授業を通じて、ペンの動かし方、思考停止が起きるポイント、知識の境界線をプロの眼で正確につかみます。
              </p>
            </div>
            {/* アロー */}
            <div className="hidden md:block text-5xl font-bold text-slate-300 transition-all duration-700 hover:slate-50">➡</div>
            {/* ステップ 2 */}
            <div className="text-center max-w-md bg-white p-8 rounded-sm shadow-elegant-sm border border-slate-100 hover:border-secondary/40 transition-all duration-700 hover:slate-50">
              <h3 className="text-2xl font-bold mb-6 text-primary tracking-widest border-b border-slate-200 pb-3">
                ステップ 2：【改善する】
              </h3>
              <p className="text-textMain leading-relaxed">
                見つかった課題に対して、ノートの書き方や問題の読み進め方など、具体的な「正しい学習の作法」をその場で指導・修正します。
              </p>
            </div>
            {/* アロー */}
            <div className="hidden md:block text-5xl font-bold text-slate-300 transition-all duration-700 hover:slate-50">➡</div>
            {/* ステップ 3 */}
            <div className="text-center max-w-md bg-white p-8 rounded-sm shadow-elegant-sm border-2 border-secondary/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-2xl font-bold mb-6 text-secondary tracking-widest border-b border-slate-300 pb-3">
                ステップ 3：【自立する（ゴール）】
              </h3>
              <p className="text-textMain leading-relaxed">
                正しいやり方を自習室での演習で再現し、誰に教えられなくても「自分の力で初見の問題を解ける」状態を確立します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 自習室の価値訴求セクション */}
      <section className="bg-primary text-white py-40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif tracking-widest leading-relaxed border-b border-slate-400/20 pb-5">
            授業は週 2 回。成績を決める「残り 166 時間」もすべて支える。
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-xl text-accent/90 leading-relaxed font-light">
            どれほど質の高い授業を週に数時間受けたとしても、それ以外の家庭学習の時間をダラダラと過ごしてしまえば成績は絶対に上がりません。
            <br />
            ミネルバは、授業日以外の「圧倒的に長い時間」を、私語厳禁の研ぎ澄まされた自習室での演習へと変えさせます。授業の分析結果と直結した個別課題を出すため、生徒は自習室に来て「何をすればいいかわからない」と迷うことがありません。家で勉強しないとお悩みの木更津市の中学生・高校生に、最高の学習環境を提供します。
          </p>
        </div>
      </section>

      {/* 分析セクション（現象ベースの 3 軸） */}
      <section className="bg-background text-textMain py-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-serif tracking-widest border-b border-slate-200 pb-5">
            学習効率を最適化する、ミネルバの 3 つの分析視点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* カード 1 */}
            <div className="bg-white p-8 rounded-sm shadow-elegant-sm border border-slate-100 hover:border-secondary/40 transition-all duration-700 hover:slate-50">
              <h3 className="text-xl font-bold mb-6 text-primary tracking-widest border-b border-slate-200 pb-3">
                【解き方と手の動き】
              </h3>
              <p className="text-textMain leading-relaxed">
                英単語を手本から 1 文字ずつ確認しながら写している。数学の途中式を省いていつも同じ場所でミスをしている。答えという結果だけを見るのではなく、「授業中にどのようにペンを動かしているか」を観察し、無意識のうちに失点を生んでいる動作の癖をその場で修正します。
              </p>
            </div>
            {/* カード 2 */}
            <div className="bg-white p-8 rounded-sm shadow-elegant-sm border border-slate-100 hover:border-secondary/40 transition-all duration-700 hover:slate-50">
              <h3 className="text-xl font-bold mb-6 text-primary tracking-widest border-b border-slate-200 pb-3">
                【思考停止が起きるポイント】
              </h3>
              <p className="text-textMain leading-relaxed">
                「間違えるのが怖い」から最初の一歩のペンが止まる。「早く終わらせたい」から焦って問題文の条件を読み飛ばす。能力の問題ではなく、日々の学習効率を著しく下げている判断の癖や姿勢を見極め、机に向かうアプローチを整えます。
              </p>
            </div>
            {/* カード 3 */}
            <div className="bg-white p-8 rounded-sm shadow-elegant-sm border border-slate-100 hover:border-secondary/40 transition-all duration-700 hover:slate-50">
              <h3 className="text-xl font-bold mb-6 text-primary tracking-widest border-b border-slate-200 pb-3">
                【知識の境界線】
              </h3>
              <p className="text-textMain leading-relaxed">
                生徒の「わかった」という言葉をそのまま受け入れることはしません。対話を通じて「どこまでは正確に理解できていて、どこからが曖昧なのか」の切れ目を明確にします。曖昧さを排除し、今取り組むべき最も効果的な学習ルートを導き出します。
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <a
              href="/policy"
              className="inline-block bg-primary hover:bg-primary/90 text-accent font-semibold px-10 py-5 rounded-sm transition-all duration-700 border border-slate-200 shadow-elegant-sm tracking-wide text-lg"
            >
              さらに詳しい分析手法はこちら
            </a>
          </div>
        </div>
      </section>

      {/* ケーススタディセクション */}
      <section className="bg-primary text-white py-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-serif tracking-widest leading-relaxed border-b border-slate-400/20 pb-5">
            成果は生徒ごとに異なりますが、改善の流れは共通しています
          </h2>
          <div className="bg-background text-textMain max-w-3xl mx-auto p-10 rounded-sm shadow-elegant-sm border border-slate-100">
            <div className="space-y-7">
              <p className="font-bold text-secondary tracking-widest border-b border-slate-200 pb-2">【学年・性別】</p>
              <p className="text-textMain leading-relaxed">木更津市内 中学 2 年生・男子</p>
              <hr className="border-slate-300" />
              <p className="font-bold text-secondary tracking-widest border-b border-slate-200 pb-2">【ビフォー】</p>
              <p className="text-textMain leading-relaxed">定期テスト 数学 38 点</p>
              <hr className="border-slate-300" />
              <p className="font-bold text-secondary tracking-widest border-b border-slate-200 pb-2">【原因の分析】</p>
              <p className="text-textMain leading-relaxed">計算ミスではなく「途中式の管理不足」。授業中の動作を確認すると、ノートの余白や問題用紙の隅に計算を殴り書きしており、自分自身で書いた数字を見失ってミスを誘発していることが判明。</p>
              <hr className="border-slate-300" />
              <p className="font-bold text-secondary tracking-widest border-b border-slate-200 pb-2">【具体的な介入】</p>
              <p className="text-textMain leading-relaxed">「ノートの書き方修正」。マス目に対して途中式を必ず縦に揃えて書くルールを徹底。自習室でも書き方が崩れていないかを定着するまで繰り返し確認します。</p>
              <hr className="border-slate-300" />
              <p className="font-bold text-secondary tracking-widest border-b border-slate-200 pb-2">【アフター（結果）】</p>
              <p className="text-xl font-semibold text-primary leading-relaxed">数学 72 点に向上（ケアレスミスが完全にゼロになり大幅な得点アップを達成。）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 指導報告セクション */}
      <section className="bg-background text-textMain py-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif tracking-widest border-b border-slate-200 pb-5">
            毎回の「指導報告」で、授業分析のすべてを可視化
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-textMain leading-relaxed mb-16 font-light">
            ミネルバでは、今日の授業でお子様が「どこで詰まり、どう修正したか」を毎回その日のうちに保護者様へ詳細にお送りします。塾での様子が手に取るようにわかります。
          </p>

          {/* スマホ UI 風 */}
          <div className="max-w-xl mx-auto bg-white rounded-sm shadow-elegant-sm overflow-hidden border border-slate-100">
            {/* スマホフレーム */}
            <div className="bg-primary px-6 py-8 text-white">
              <p className="text-sm font-semibold mb-2 text-secondary/70 tracking-wide">本日の数学</p>
              <h3 className="text-xl font-bold">連立方程式の演習</h3>
            </div>
            <div className="p-8 space-y-5">
              <p className="leading-relaxed">
                立式のプロセスは完璧に理解できていました。しかし、計算の最終段階である引き算の符号ミスが 2 箇所連続して見られました。
              </p>
              <p className="leading-relaxed">
                手の動きを観察したところ、暗算で処理しようとして焦り、ペンの動きが雑になっていることが原因です。
              </p>
              <div className="bg-primary/5 p-5 rounded-sm border border-slate-100">
                <p className="text-textMain leading-relaxed font-medium">
                  「符号を変えるプロセスを必ず 1 行書き足す」という物理的な動作を約束させました。自習室でのワーク取り組み時にも、この約束が守られているか定着するまで繰り返し確認します。
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <a
              href="/grades"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-5 rounded-sm transition-all duration-700 border border-slate-200 shadow-elegant-sm tracking-wide text-lg"
            >
              指導方針・自習室の詳細はこちら
            </a>
          </div>
        </div>
      </section>

      {/* フッター前 CTA セクション */}
      <section className="bg-primary text-white py-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif tracking-widest leading-relaxed border-b border-slate-400/20 pb-5">
            勉強しているのに伸びない理由。あるいは、もっと伸びるための改善点。
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-xl text-accent/80 mb-16 leading-relaxed font-light">
            まずは 80 分の体験授業で見つけてみませんか。
          </p>

          {/* レポート特典 */}
          <div className="max-w-4xl mx-auto bg-primary/90 p-10 rounded-sm mb-16 shadow-elegant border border-slate-400/20">
            <p className="text-xl font-semibold mb-8 text-secondary leading-relaxed tracking-wide">
              体験授業後には、お預かりしたお子様の学習プロセスを精査し、以下の内容を明確にした「学習診断レポート」をお渡しします。
            </p>
            <ul className="space-y-6 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-secondary mr-4 mt-1 text-2xl">✓</span>
                <span className="text-accent/90 leading-relaxed font-light">どこで思考が止まっているのか</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mr-4 mt-1 text-2xl">✓</span>
                <span className="text-accent/90 leading-relaxed font-light">何を最優先で克服すべきなのか</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mr-4 mt-1 text-2xl">✓</span>
                <span className="text-accent/90 leading-relaxed font-light">どこが伸びしろなのか</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-accent/60 leading-relaxed font-light">
              現在の塾での勉強やテスト対策に手応えを感じていない方も、現状を打破する指針としてお役立てください。
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-bold px-14 py-7 rounded-sm transition-all duration-700 shadow-elegant border border-slate-300/30 tracking-wide text-xl"
          >
            無料学習診断レポート付き体験授業を申し込む
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
