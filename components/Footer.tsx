import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-accent pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* 左カラム：基本情報 */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-secondary tracking-widest border-b border-slate-300 pb-3">
              学習塾ミネルバ
            </h3>
            <address className="not-italic text-accent space-y-4 leading-relaxed font-light">
              <p className="flex items-start gap-2">
                <span className="text-secondary mt-1">・</span>
                <strong className="text-accent">所在地：</strong>〒292-0009 千葉県木更津市金田東 5-4-6
              </p>
              <p className="flex items-start gap-2">
                <span className="text-secondary mt-1">・</span>
                <strong className="text-accent">電話番号：</strong>
                <a 
                  href="tel:03-6820-6929" 
                  className="hover:text-white transition-all duration-700 font-medium"
                >
                  03-6820-6929
                </a>
              </p>
            </address>
            <div className="mt-6 pt-6 border-t border-slate-300/50 text-sm text-accent/80 leading-relaxed font-light">
              <p className="flex items-start gap-2">
                <span className="text-secondary mt-1">・</span>
                <strong className="text-accent">開校時間（通塾・自習室利用）：</strong>平日 16:00〜21:40
              </p>
              <p className="opacity-75 text-xs">(当面の間、土曜日・日曜日は休講となります。テスト前や講習時を除く)</p>
            </div>
          </div>

          {/* 中央カラム：サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary tracking-widest border-b border-slate-300/50 pb-2">
              サイトマップ
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link 
                  href="/" 
                  className="text-accent hover:text-white transition-all duration-700 font-medium tracking-wide"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  href="/policy" 
                  className="text-accent hover:text-white transition-all duration-700 font-medium tracking-wide"
                >
                  指導方針
                </Link>
              </li>
              <li>
                <Link 
                  href="/grades" 
                  className="text-accent hover:text-white transition-all duration-700 font-medium tracking-wide"
                >
                  学年別のご案内
                </Link>
              </li>
              <li>
                <Link 
                  href="/price" 
                  className="text-accent hover:text-white transition-all duration-700 font-medium tracking-wide"
                >
                  受講料・よくあるご質問
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-secondary font-semibold hover:text-white transition-all duration-700 tracking-wide"
                >
                  無料体験授業・お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 右カラム：お問い合わせ受付時間（地図エリア） */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary tracking-widest border-b border-slate-300/50 pb-2">
              お問い合わせ受付時間
            </h3>
            <div className="bg-primary/90 backdrop-blur-sm p-6 mb-5 border border-slate-400/30">
              <p className="text-accent text-sm font-medium leading-relaxed mb-3 flex items-center gap-2">
                <span className="text-secondary">●</span>
                お電話・窓口：
              </p>
              <ul className="text-accent text-sm space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  平日 16:00〜21:40
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  土曜日 14:00〜20:00
                </li>
              </ul>
              <p className="text-accent/70 text-xs mt-3 opacity-80 leading-relaxed">
                (土曜日は授業・自習室は休講ですが、お問い合わせの受付・入塾面談の実施は承っております)
              </p>
            </div>
            <div className="bg-slate-100/50 rounded-lg h-48 flex items-center justify-center text-accent/60 text-sm font-medium border border-slate-200/50 backdrop-blur-sm">
              Google マップ埋め込みエリア
            </div>
          </div>
        </div>

        {/* 説明文 */}
        <div className="border-t border-slate-300/50 pt-10 text-center text-sm text-accent/70 leading-relaxed font-light max-w-4xl mx-auto">
          <p>千葉県木更津市金田東の学習塾ミネルバ。木更津市の中学生向け塾・高校受験対策・個別指導塾として、生徒一人ひとりの学習プロセスを最適化します。</p>
        </div>

        {/* コピーライト */}
        <div className="mt-10 text-center text-xs text-accent/50 font-light">
          <p>© 2026 学習塾ミネルバ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
