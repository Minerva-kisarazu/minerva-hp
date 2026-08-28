import type { Metadata } from 'next';
import PamphletDocument from '@/components/print/PamphletDocument';

export const metadata: Metadata = {
  title: 'パンフレット（印刷用）',
  description: '学習塾ミネルバのA4パンフレット（4ページ・印刷／PDF保存用）',
  robots: { index: false, follow: false },
};

export default function PamphletPrintPage() {
  return <PamphletDocument />;
}
