/** 問い合わせ送信後に案内する資料ダウンロード（public/downloads） */
export type DownloadMaterial = {
  id: string;
  title: string;
  description: string;
  /** public/downloads 配下のファイル名 */
  filename: string;
  href: string;
};

/** 公開案内する資料のみ。チラシは当面非公開（/print/flyer は内部用） */
export const DOWNLOAD_MATERIALS: DownloadMaterial[] = [
  {
    id: 'pamphlet',
    title: 'パンフレット（A4×4ページ）',
    description:
      '指導の考え方、成績改善事例、指導報告サンプル、料金表、よくあるご質問をまとめた説明資料です。',
    filename: 'minerva-pamphlet.pdf',
    href: '/downloads/minerva-pamphlet.pdf',
  },
];
