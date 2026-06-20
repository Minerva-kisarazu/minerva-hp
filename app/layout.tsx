import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "学習塾ミネルバ | 木更津市の個別指導塾",
  description: "木更津市金田東の個別指導塾、学習塾ミネルバ。勉強を教えるだけではない。成績が決まるプロセスそのものを分析します。",
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
