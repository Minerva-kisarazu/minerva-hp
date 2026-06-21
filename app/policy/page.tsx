'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 設立への想いセクション */}
        <section className="bg-slate-50 text-slate-900 py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 tracking-wide border-b border-slate-300 pb-5">
              日々の学習を通じて、一生モノの「自ら学ぶ力」を
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed">
              塾講師として現場に立ち、多くの生徒たちを見てきて確信していることがあります。それは、同じ教室で同じ授業を受け、同じ教材を使っても、結果の出方には大きな差があるという現実です。
            </p>
            <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed mt-8">
              今の時代、映像授業や良質な参考書は世の中に溢れています。しかし、どれほど優れた材料があっても、それを「自ら掴み取り、使いこなす力」がなければ、成果には結びつきません。
            </p>
            <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed mt-8">
              私は、勉強や受験こそが自分を鍛える最高の機会だと考えています。定期テストや志望校合格という明確な目標に向かって本気で努力し、壁を乗り越える。その過程で培われる「自分で目標を立て、考え、実行する力」こそが、これからの時代を生き抜くための何よりの武器になると信じています。
            </p>
            <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed mt-8">
              当塾は、単に答えを教えるだけの場所ではありません。受験という挑戦を、自分自身を成長させる最高のトレーニングに変える。そのために、私たちは「学習プロセスそのものを分析する」という思想を掲げ、生徒一人ひとりの「自律して学ぶ力」を構造的に鍛えていきます。
            </p>
          </div>
        </section>

        {/* 授業の特徴セクション */}
        <section className="bg-navy-800 text-white py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-14 text-center tracking-wide border-b border-slate-700 pb-5">
              「教えすぎない」から、一生モノの知性が育つ
            </h2>

            {/* 項目 1 */}
            <div className="max-w-4xl mx-auto bg-navy-900 p-10 rounded-lg mb-8 card-shadow-sm border border-slate-700">
              <h3 className="text-xl font-serif font-bold mb-5 text-orange-400 tracking-wide">対話が生む「思考の言語化」</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                講師が一方的に解説するのをやめ、「なぜその答えになったのか」を生徒自身に説明させます。自分の思考を言葉にさせることで、曖昧な「わかったつもり」を排除し、論理の筋道を自分のものにします。
              </p>
            </div>

            {/* 項目 2 */}
            <div className="max-w-4xl mx-auto bg-navy-900 p-10 rounded-lg card-shadow-sm border border-slate-700">
              <h3 className="text-xl font-serif font-bold mb-5 text-orange-400 tracking-wide">「自力で読み解く」練習の徹底</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                解説を待つのではなく、まず自分の力で文章から要点を掴む。自分で丸付けをし、気づきを自分の言葉でメモする。この「正しい学習の作法」を繰り返すことで、1 時間の学びから 10 を得る「吸収率」を劇的に引き上げます。
              </p>
            </div>
          </div>
        </section>

        {/* 精密分析の深掘りセクション */}
        <section className="bg-slate-50 text-slate-900 py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-14 text-center tracking-wide border-b border-slate-300 pb-5">
              成果を偶然にしないための「3 つの客観的分析」
            </h2>

            {/* 詳細 1 */}
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl card-shadow-sm mb-8 border border-slate-100">
              <h3 className="text-xl font-serif font-bold mb-5 text-orange-600 tracking-wide">【解き方と手の動きの分析】</h3>
              <p className="text-slate-700 leading-relaxed">
                ノートの余白の使い方、問題用紙への書き込み、筆算の配置など、問題を解いている最中の「物理的な動作」をすべてチェックします。本人が無意識に行っている「ミスを誘発する書き方の癖」や「暗記効率を下げる視線の動き」を見つけ出し、得点に直結するクリーンな動作へと修正し、定着するまで繰り返し確認します。
              </p>
            </div>

            {/* 詳細 2 */}
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl card-shadow-sm mb-8 border border-slate-100">
              <h3 className="text-xl font-serif font-bold mb-5 text-orange-600 tracking-wide">【思考停止が起きるポイントの分析】</h3>
              <p className="text-slate-700 leading-relaxed">
                問題のどのフェーズで手が止まるのか、どの記述を見たときに読み飛ばしが始まるのか、その「判断の癖」を捉えます。単なる集中力不足やケアレスミスという言葉で片付けず、思考がシャットアウトされる明確なポイントを特定して対策を講じます。
              </p>
            </div>

            {/* 詳細 3 */}
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl card-shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold mb-5 text-orange-600 tracking-wide">【知識の境界線の分析】</h3>
              <p className="text-slate-700 leading-relaxed">
                対話を通じて、生徒自身が「100% 自信を持って説明できる範囲」と「なんとなくの感覚で解いている範囲」の境界線を切り分けます。この境界線を明確にすることで、やるべき課題がピンポイントで決まり、無駄な反復や背伸びをした難問演習による時間の浪費を防ぎます。
              </p>
            </div>
          </div>
        </section>

        {/* フッター前の CTA */}
        <section className="bg-primary text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-8 tracking-wide opacity-90 leading-relaxed border-b border-slate-700 pb-5">
              まずは 80 分の体験授業で学習プロセスの改善点を見つけましょう
            </h2>
            <a
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 shadow-md tracking-wide text-lg whitespace-nowrap"
            >
              無料学習診断レポート付き体験授業を申し込む
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
