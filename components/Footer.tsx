import Image from 'next/image';
import Link from 'next/link';

const sitemapItems = [
  { href: '/', label: 'ホーム' },
  { href: '/policy', label: '指導方針' },
  { href: '/grades', label: '学年別のご案内' },
  { href: '/price', label: '受講料・よくあるご質問' },
  { href: '/contact', label: '無料体験授業・お問い合わせ' },
];

const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=%E5%8D%83%E8%91%89%E7%9C%8C%E6%9C%A8%E6%9B%B4%E6%B4%A5%E5%B8%82%E9%87%91%E7%94%B0%E6%9D%B15-4-6&z=16&hl=ja&output=embed';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-14">
          {/* 左カラム：基本情報 */}
          <div>
            <div className="mb-6 border-b border-slate-300 pb-4">
              <Image
                src="/images/logo-horizontal.svg"
                alt="学習塾ミネルバ｜個別指導×自立学習"
                width={280}
                height={70}
                unoptimized
                className="h-12 w-auto max-w-full"
              />
            </div>
            <address className="not-italic space-y-2 leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">所在地：</span>
                <span className="whitespace-nowrap">〒292-0009</span>{' '}
                <span className="whitespace-nowrap">千葉県木更津市金田東5-4-6</span>
              </p>
              <p className="flex items-center gap-1">
                <span className="font-bold text-slate-900">電話番号：</span>
                <a
                  href="tel:0368206929"
                  className="inline-flex items-center min-h-[44px] hover:text-accent-700 transition-colors underline underline-offset-2"
                >
                  03-6820-6929
                </a>
              </p>
            </address>

            <dl className="mt-6 pt-6 border-t border-slate-300 space-y-5 text-base leading-relaxed">
              <div>
                <dt className="font-bold text-slate-900">開校時間（通塾・自習室利用）</dt>
                <dd className="mt-1">平日 16:00〜21:40</dd>
                <dd className="mt-1 text-sm text-slate-600">
                  当面の間、土曜日・日曜日は休講となります。テスト前や講習時を除く。
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">お問い合わせ受付時間（お電話・窓口）</dt>
                <dd className="mt-1">平日 16:00〜21:40 ／ 土曜日 14:00〜20:00</dd>
                <dd className="mt-1 text-sm text-slate-600">
                  土曜日は授業・自習室は休講ですが、お問い合わせの受付・入塾面談の実施は承っております。
                </dd>
              </div>
            </dl>
          </div>

          {/* 中央カラム：サイトマップ */}
          <div>
            <h2 className="text-lg font-bold mb-6 text-slate-900 tracking-wide border-b border-slate-300 pb-3">
              サイトマップ
            </h2>
            <nav aria-label="フッターナビゲーション">
              <ul className="space-y-1">
                {sitemapItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex items-center min-h-[44px] font-medium hover:text-accent-700 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 右カラム：地図 */}
          <div>
            <h2 className="text-lg font-bold mb-6 text-slate-900 tracking-wide border-b border-slate-300 pb-3">
              アクセス
            </h2>
            <div className="rounded-lg h-64 overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="学習塾ミネルバ 所在地の地図"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-10 text-center text-base leading-relaxed max-w-4xl mx-auto">
          <p>
            千葉県木更津市金田東の学習塾ミネルバ。小学生から大学受験まで、木更津市の個別指導塾として、生徒一人ひとりの学習プロセスを最適化します。
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          © 2026 学習塾ミネルバ All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
