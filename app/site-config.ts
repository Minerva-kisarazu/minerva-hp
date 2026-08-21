// 本番ドメインが決まったら NEXT_PUBLIC_SITE_URL に設定する
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '');
