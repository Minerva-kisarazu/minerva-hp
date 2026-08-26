import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// CJK フォントはスライス数が多く、preload するとリンクタグが大量に生成されるため無効化する
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "学習塾ミネルバ｜木更津市金田東の個別指導塾・自立学習",
    template: "%s｜学習塾ミネルバ（木更津市の個別指導塾）",
  },
  description:
    "木更津市金田東の個別指導塾、学習塾ミネルバ。授業で答えを教えるだけではなく、「なぜできないのか」を分析し、問題を読み、考え、自分で解ける力を育てます。中学生の定期テスト対策から大学受験まで対応。",
  keywords: [
    "木更津市",
    "金田東",
    "個別指導塾",
    "学習塾",
    "中学生",
    "高校生",
    "大学受験",
    "高校受験対策",
    "定期テスト対策",
    "自習室",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "学習塾ミネルバ",
    title: "学習塾ミネルバ｜木更津市金田東の個別指導塾・自立学習",
    description:
      "木更津市金田東の個別指導塾、学習塾ミネルバ。授業で答えを教えるだけではなく、「なぜできないのか」を分析し、問題を読み、考え、自分で解ける力を育てます。",
  },
};

export const viewport: Viewport = {
  themeColor: "#006058",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans bg-white text-[#333333] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          本文へスキップ
        </a>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
