import type { Metadata } from 'next';
import FlyerDocument from '@/components/print/FlyerDocument';

export const metadata: Metadata = {
  title: 'チラシ（印刷用）',
  description: '学習塾ミネルバのA4両面チラシ（印刷／PDF保存用）',
  robots: { index: false, follow: false },
};

export default function FlyerPrintPage() {
  return <FlyerDocument />;
}
