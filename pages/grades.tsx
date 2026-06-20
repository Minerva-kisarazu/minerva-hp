import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Grades() {
  return (
    <>
      <Header />

      {/* 各学年の指導重点 */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            学年に合わせた自立学習の設計
          </h2>

          {/* 小学生 */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4 text-gold-500">小学生</h3>
            <p className="text-gray-700 leading-relaxed">
              正しい勉強のやり方と、ノートの取り方を身につける。答えが合えばいいという作業を脱却し、「なぜそうなるか」を考える姿勢を作ります。算数の図示や国語の論理的読解など、すべての土台となる正しい作法を動作分析から指導します。
            </p>
          </div>

          {/* 中学生 */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4 text-gold-500">中学生</h3>
            <p className="text-gray-700 leading-relaxed">
              定期テストで目標点をもぎ取る「自力で演習する力」の確立。木更津市内の中学校の教科書・定期テスト対策・高校受験対策に準拠。分析で見つかった個々の弱点や課題を、自習室での演習に直結させます。学校ワークの進捗を完全に管理し、テスト本番で解き切る力を養います。
            </p>
          </div>

          {/* 高校生 */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gold-500">高校生</h3>
            <p className="text-gray-700 leading-relaxed">
              分析に基づいた優先順位で、膨大な学習量をマネジメントする。がむしゃらに走るのではなく、ゴールへの最短ルートを設計します。週 1 回の授業でメインのつまずきを解消し、残りの日は自習室で計画を遂行する「自学自習」の仕組みを作ります。
            </p>
          </div>
        </div>
      </section>

      {/* 中学生の 1 週間の通塾モデル */}
      <section className="bg-navy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            授業と自習室を組み合わせた、理想的な生活サイクル
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-300 mb-12 text-center">
            中学生の 1 週間の通塾モデル（英数 2 講座受講の場合）
          </p>

          {/* 月曜日 */}
          <div className="max-w-4xl mx-auto bg-navy-900 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-3 text-gold-500">月曜日</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>[18:50〜20:10]</strong> 英語授業（個別指導・作法の矯正）</li>
              <li><strong>[20:20〜20:50]</strong> 授業直後自習（その日の長文の解き直しと単語暗記）</li>
            </ul>
          </div>

          {/* 火曜日 */}
          <div className="max-w-4xl mx-auto bg-navy-900 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-3 text-gold-500">火曜日</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>[17:20〜19:30]</strong> 自習室利用（授業がない日の来塾） ➡ 学校ワークの処理と理科・社会の教科書演習</li>
            </ul>
          </div>

          {/* 水曜日 */}
          <div className="max-w-4xl mx-auto bg-navy-900 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-3 text-gold-500">水曜日</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>[18:50〜20:10]</strong> 数学授業（個別指導・プロセスの修正）</li>
              <li><strong>[20:20〜20:50]</strong> 授業直後自習（間違えた計算のプロセス修正演習）</li>
            </ul>
          </div>

          {/* 木曜日 */}
          <div className="max-w-4xl mx-auto bg-navy-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gold-500">木曜日</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>[17:20〜19:30]</strong> 自習室利用（授業がない日の来塾） ➡ 指導報告で指示された個別の課題を集中環境で実行</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 自習スペースの運用について */}
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            授業を実力に変える「自習スペース」
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            授業だけで成績が上がることは絶対にありません。自学に集中して取り組めるように、私語厳禁の静寂な自習スペースを準備しています。1 講座でも受講していただければ、授業日に関わらず、開校時間（平日 16:00〜21:40）内は毎日いつでも無料でご利用いただけます。質問は授業を受けている教科以外でも大歓迎ですので、積極的に活用してください。他の生徒の勉強の妨げとなる行為があった場合は、利用を制限することがあります。
          </p>

          {/* フッター前の CTA */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-md transition-colors"
            >
              無料学習診断レポート付き体験授業を申し込む
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
