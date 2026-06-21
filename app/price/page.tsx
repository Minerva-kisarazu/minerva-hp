'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 料金案内セクション */}
        <section className="bg-slate-50 text-slate-900 py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-14 text-center tracking-wide border-b border-slate-300 pb-5">
              受講費のご案内（個別指導 1 対 2 形式・80 分・全て消費税 10% 税込表記）
            </h2>

            <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-sm mb-14 border border-slate-100">
              <p className="text-slate-700 leading-relaxed font-light text-lg mb-8">
                毎月お支払いいただく「総支払額」には、月額受講費と施設費（2,200 円/月）がすべて含まれています。1 講座でも受講していただければ、自習室は授業日にかかわらず毎日ご利用いただけます。
              </p>

              {/* 小学生 */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">小学生</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>18,700 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>31,900 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>44,000 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>56,100 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +12,100 円)</li>
                </ul>
              </div>

              {/* 中学一・二年生 */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">中学一・二年生</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>19,800 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>34,100 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>47,300 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>60,500 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +13,200 円)</li>
                </ul>
              </div>

              {/* 中学三年生 / 中学受験 */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">中学三年生 / 中学受験</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>20,900 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>36,300 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>50,600 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>64,900 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +14,300 円)</li>
                </ul>
              </div>

              {/* 高校一年生 */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">高校一年生</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>22,000 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>38,500 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>53,900 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>69,300 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +15,400 円)</li>
                </ul>
              </div>

              {/* 高校二年生 */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">高校二年生</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>23,100 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>40,700 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>57,200 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>73,700 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +16,500 円)</li>
                </ul>
              </div>

              {/* 高校三年生 */}
              <div className="mb-12">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">高校三年生</h3>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">1 講座：</strong>24,200 円</li>
                  <li><strong className="text-slate-900">2 講座：</strong>42,900 円</li>
                  <li><strong className="text-slate-900">3 講座：</strong>60,500 円</li>
                  <li><strong className="text-slate-900">4 講座：</strong>78,100 円</li>
                  <li className="text-sm text-slate-500 leading-relaxed">(5 講座目以降は 1 講座につき +17,600 円)</li>
                </ul>
              </div>

              {/* その他費用 */}
              <div className="pt-8 border-t border-slate-200 bg-slate-50 p-8 rounded-xl">
                <h3 className="text-lg font-serif font-bold mb-4 text-orange-600 tracking-wide border-b border-slate-200 pb-2">その他費用</h3>
                <p className="text-slate-700 leading-relaxed font-light">
                  <strong className="text-slate-900">入塾費：</strong>22,000 円（税込・初月のみ受講費と合わせて納入）<br />
                  <strong className="text-slate-900">教材費：</strong>使用するテキスト等の実費を別途納入していただきます。<br />
                  <strong className="text-slate-900">講習費：</strong>春期・夏期・冬期の各季節講習は、年間カリキュラム完遂と学力維持のため原則全員参加となり、別途受講費が発生します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* よくあるご質問セクション */}
        <section className="bg-navy-800 text-white py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-14 text-center tracking-wide border-b border-slate-700 pb-5">よくあるご質問（Q&A）</h2>

            {/* Q1 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl mb-6 card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q：「英語と数学しか教えてもらえない」と聞いたのですが本当ですか？</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:授業は差がつきやすい英数に特化しますが、自習管理を通じて「5 教科すべて」をサポートしています。<br />
                個別指導の授業枠では、独学が最も難しく差がつきやすい英語と数学を徹底的に分析指導します。しかし、テストは 5 教科の勝負です。そのため、授業のない日も生徒を自習室に呼び、理科・社会・国語の学校ワークの進捗チェックを行い、「何をいつまでに進めるべきか」のスケジュール指示と質問対応をいつでも行っています。授業で 2 教科の土台を築き、自習室と進度管理で 5 教科すべての点数を引き上げるのがミネルバの体制です。
              </p>
            </div>

            {/* Q2 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl mb-6 card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q：「他の集団塾に比べて料金が高い」という噂を聞いたのですが……。</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:大勢に一律の解説を行う集団塾に比べれば月謝の額面は高くなります。しかし、「提供している価値の密度」が全く異なります。<br />
                ただ問題の解き方を一方的に教える塾や、隣に座って丸付けをするだけの個別指導塾とは異なり、ミネルバの料金には「プロの眼による毎回の精密な学習動作・判断の癖の分析」「その結果を保護者様へお送りする詳細な即日報告」「追加料金なしで毎日使える、私語厳禁が徹底された静寂な自習スペースでの 5 教科の進度管理・質問対応」のすべてが含まれています。1 回 80 分の授業時間を買うのではなく、「結果を出すための 24 時間・365 日の学習環境と管理への投資」と考えていただければ、決して高くはないと自負しております。
              </p>
            </div>

            {/* Q3 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl mb-6 card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q:無料体験のあとに、無理な勧誘をされませんか？</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:一切いたしません。お子様自身が「ここでやりたい」と納得し、保護者様が指導方針と環境を信頼していただいた場合のみ、お手続きをご案内しております。安心してお申し込みください。
              </p>
            </div>

            {/* Q4 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl mb-6 card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q:他塾や通信教育との併用は可能ですか？</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:可能です。他塾の教材やカリキュラムにおける「つまずきの原因」をミネルバで分析・修正し、自習室で演習を重ねるという通い方で成果を出している生徒も在籍しています。
              </p>
            </div>

            {/* Q5 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl mb-6 card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q:授業を受けずに、自習室だけを利用することはできますか？</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:申し訳ありませんが、自習室のみのご利用は承っておりません。ミネルバの自習室は「授業での精密な分析結果に基づいた課題」を再現・定着させるための訓練環境であるため、原則として週 1 講座以上の受講をお願いしております。
              </p>
            </div>

            {/* Q6 */}
            <div className="max-w-5xl mx-auto bg-navy-900 p-10 rounded-xl card-shadow-sm border border-slate-700 leading-relaxed">
              <h3 className="text-lg font-serif font-bold mb-4 text-orange-400 tracking-wide">Q:学校の定期テスト対策は対応してもらえますか？</h3>
              <p className="text-slate-200 leading-relaxed font-light">
                A:完全に準拠しています。木更津市内の学校のテスト範囲に合わせて、提出必須である学校ワークの進行管理から、出題されやすい単元の境界線分析まで徹底して行います。
              </p>
            </div>
          </div>
        </section>

        {/* フッター前の CTA */}
        <section className="bg-primary text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-10 tracking-wide opacity-90 leading-relaxed border-b border-slate-700 pb-5">
              学習プロセスの改善点が見つかる無料体験授業
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
