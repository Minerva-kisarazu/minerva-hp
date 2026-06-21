import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/policy', label: '指導方針' },
    { href: '/grades', label: '学年別のご案内' },
    { href: '/price', label: '受講料・よくあるご質問' },
    { href: '/contact', label: 'お問い合わせ' }
  ];

  const openingHours = [
    { day: '平日', time: '16:00〜21:40' },
    { day: '土曜日', time: '14:00〜20:00' }
  ];

  return (
    <footer className="bg-slate-50 text-slate-700 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* 左カラム：基本情報 */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-900 tracking-wide border-b border-slate-300 pb-3">
              学習塾ミネルバ
            </h3>
            <address className="not-italic text-slate-700 space-y-4 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 font-medium">・</span>
                <strong className="text-slate-900">所在地：</strong>〒292-0009 千葉県木更津市金田東 5-4-6
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 font-medium">・</span>
                <strong className="text-slate-900">電話番号：</strong>
                <a 
                  href="tel:03-6820-6929" 
                  className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
                >
                  03-6820-6929
                </a>
              </p>
            </address>
            <div className="mt-6 pt-6 border-t border-slate-300/50 text-sm text-slate-600 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 font-medium">・</span>
                <strong className="text-slate-900">開校時間（通塾・自習室利用）：</strong>平日 16:00〜21:40
              </p>
              <p className="opacity-80 text-xs mt-1">(当面の間、土曜日・日曜日は休講となります。テスト前や講習時を除く)</p>
            </div>
          </div>

          {/* 中央カラム：サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 tracking-wide border-b border-slate-300/50 pb-2">
              サイトマップ
            </h3>
            <ul className="space-y-4">
              {navItems.slice(0, 4).map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-slate-700 hover:text-orange-600 transition-colors font-medium tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-900 font-semibold hover:text-orange-600 transition-colors tracking-wide"
                >
                  無料体験授業・お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 右カラム：お問い合わせ受付時間 */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 tracking-wide border-b border-slate-300/50 pb-2">
              お問い合わせ受付時間
            </h3>
            <div className="bg-white p-6 mb-5 border border-slate-200 shadow-sm">
              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-3 flex items-center gap-2">
                <span className="text-orange-600">●</span>
                お電話・窓口：
              </p>
              <ul className="text-slate-700 text-sm space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mr-2 mt-1 font-medium">✓</span>
                  {openingHours[0].day} {openingHours[0].time}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mr-2 mt-1 font-medium">✓</span>
                  {openingHours[1].day} {openingHours[1].time}
                </li>
              </ul>
              <p className="text-slate-500 text-xs mt-3 opacity-90 leading-relaxed">
                (土曜日は授業・自習室は休講ですが、お問い合わせの受付・入塾面談の実施は承っております)
              </p>
            </div>
            <div className="bg-slate-100/50 rounded-lg h-48 flex items-center justify-center text-slate-500 text-sm font-medium border border-slate-200/50 backdrop-blur-sm">
              Google マップ埋め込みエリア
            </div>
          </div>
        </div>

        {/* 説明文 */}
        <div className="border-t border-slate-300/50 pt-10 text-center text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto">
          <p>千葉県木更津市金田東の学習塾ミネルバ。木更津市の中学生向け塾・高校受験対策・個別指導塾として、生徒一人ひとりの学習プロセスを最適化します。</p>
        </div>

        {/* コピーライト */}
        <div className="mt-10 text-center text-xs text-slate-500">
          <p>© 2026 学習塾ミネルバ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
