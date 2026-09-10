import type { Metadata } from 'next';
import PamphletDocument from '@/components/print/PamphletDocument';
import './pamphlet.css';

export const metadata: Metadata = {
  title: 'パンフレット（A4×4ページ）',
  description: '学習塾ミネルバのパンフレット（A4×4ページ・画面閲覧／PDF保存用）',
  robots: { index: false, follow: false },
};

export default function PamphletPrintPage() {
  return <PamphletDocument />;
}
