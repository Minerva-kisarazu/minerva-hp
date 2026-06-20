import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 左カラム：基本情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">学習塾ミネルバ</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p><strong>所在地：</strong>〒292-0009 千葉県木更津市金田東 5-4-6</p>
              <p><strong>電話番号：</strong><a href="tel:03-6820-6929" className="text-gold-400 hover:text-gold-500">03-6820-6929</a></p>
            </address>
            <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400">
              <p><strong>開校時間（通塾・自習室利用）：</strong>平日 16:00〜21:40</p>
              <p className="text-gray-500">(当面の間、土曜日・日曜日は休講となります。テスト前や講習時を除く)</p>
            </div>
          </div>

          {/* 中央カラム：サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">ホーム</Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-300 hover:text-gold-400 transition-colors">指導方針</Link>
              </li>
              <li>
                <Link href="/grades" className="text-gray-300 hover:text-gold-400 transition-colors">学年別のご案内</Link>
              </li>
              <li>
                <Link href="/price" className="text-gray-300 hover:text-gold-400 transition-colors">受講料・よくあるご質問</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">無料体験授業・お問い合わせ</Link>
              </li>
            </ul>
          </div>

          {/* 右カラム：お問い合わせ受付時間（地図エリア） */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">お問い合わせ受付時間</h3>
            <div className="bg-navy-900 p-4 rounded-lg mb-4">
              <p className="text-gray-300 text-sm"><strong>お電話・窓口：</strong></p>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>平日 16:00〜21:40</li>
                <li>土曜日 14:00〜20:00</li>
                <li className="text-gray-500">(土曜日は授業・自習室は休講ですが、お問い合わせの受付・入塾面談の実施は承っております)</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center text-gray-500 text-sm">
              Google マップ埋め込み用エリア
            </div>
          </div>
        </div>

        {/* 説明文 */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>千葉県木更津市金田東の学習塾ミネルバ。木更津市の中学生向け塾・高校受験対策・個別指導塾として、生徒一人ひとりの学習プロセスを最適化します。</p>
        </div>

        {/* コピーライト */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>© 2026 学習塾ミネルバ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
