import Link from 'next/link';
import type { Metadata } from 'next';
import './print.css';

export const metadata: Metadata = {
  title: '印刷用パンフレット・チラシ',
  description: '学習塾ミネルバの配布用パンフレット・チラシ（印刷／PDF保存）',
  robots: { index: false, follow: false },
};

export default function PrintIndexPage() {
  return (
    <div data-print-document className="print-document">
      <div className="print-index">
        <h1>印刷用パンフレット・チラシ</h1>
        <p>
          ブラウザで開き、「印刷・PDF保存」から配布用PDFを作成できます。通常のサイト案内とは別の印刷専用レイアウトです。
        </p>
        <ul>
          <li>
            <Link href="/print/pamphlet">
              パンフレット（A4×4ページ）
              <span>表紙／考え方／証拠／料金・FAQ（画面閲覧メイン・PDFはA4縦）</span>
            </Link>
          </li>
        </ul>
        <p className="print-index-note">
          チラシ（/print/flyer）は当面非公開です。内部確認用として URL 直打ちのみ可能です。
        </p>
      </div>
    </div>
  );
}
