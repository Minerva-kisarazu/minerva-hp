import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 左カラム：基本情報 */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-5 text-accent tracking-wide">学習塾ミネルバ</h3>
            <address className="not-italic text-slate-600 space-y-3 leading-relaxed font-light">
              <p><strong className="text-primary">所在地：</strong>〒292-0009 千葉県木更津市金田東 5-4-6</p>
              <p><strong className="text-primary">電話番号：</strong><a href="tel:03-6820-6929" className="text-accent hover:text-gold-500 transition-colors font-medium">03-6820-6929</a></p>
            </address>
            <div className="mt-5 pt-5 border-t border-slate-200 text-sm text-slate-500 leading-relaxed font-light">
              <p><strong className="text-primary">開校時間（通塾・自習室利用）：</strong>平日 16:00〜21:40</p>
              <p className="opacity-75">(当面の間、土曜日・日曜日は休講となります。テスト前や講習時を除く)</p>
            </div>
          </div>

          {/* 中央カラム：サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-accent tracking-wide">サイトマップ</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-slate-600 hover:text-accent transition-all duration-500 font-medium">ホーム</Link>
              </li>
              <li>
                <Link href="/policy" className="text-slate-600 hover:text-accent transition-all duration-500 font-medium">指導方針</Link>
              </li>
              <li>
                <Link href="/grades" className="text-slate-600 hover:text-accent transition-all duration-500 font-medium">学年別のご案内</Link>
              </li>
              <li>
                <Link href="/price" className="text-slate-600 hover:text-accent transition-all duration-500 font-medium">受講料・よくあるご質問</Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent font-semibold">無料体験授業・お問い合わせ</Link>
              </li>
            </ul>
          </div>

          {/* 右カラム：お問い合わせ受付時間（地図エリア） */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-accent tracking-wide">お問い合わせ受付時間</h3>
            <div className="bg-navy-900/80 backdrop-blur-sm p-5 rounded-lg mb-4 border border-slate-700">
              <p className="text-slate-200 text-sm font-medium"><strong className="text-white">お電話・窓口：</strong></p>
              <ul className="text-slate-300 text-sm mt-2 space-y-2 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  平日 16:00〜21:40
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  土曜日 14:00〜20:00
                </li>
              </ul>
              <p className="text-slate-400 text-xs mt-3 opacity-80 leading-relaxed">
                (土曜日は授業・自習室は休講ですが、お問い合わせの受付・入塾面談の実施は承っております)
              </p>
            </div>
            <div className="bg-slate-200 rounded-lg h-40 flex items-center justify-center text-slate-400 text-sm font-medium">
              Google マップ埋め込み用エリア
            </div>
          </div>
        </div>

        {/* 説明文 */}
        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500 leading-relaxed font-light">
          <p>千葉県木更津市金田東の学習塾ミネルバ。木更津市の中学生向け塾・高校受験対策・個別指導塾として、生徒一人ひとりの学習プロセスを最適化します。</p>
        </div>

        {/* コピーライト */}
        <div className="mt-6 text-center text-xs text-slate-400 font-light">
          <p>© 2026 学習塾ミネルバ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
