// 本番ドメインが決まったら NEXT_PUBLIC_SITE_URL に設定する
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '');

/** 公式LINE */
export const LINE_URL = (
  process.env.NEXT_PUBLIC_LINE_URL ?? 'https://lin.ee/YJ3KMWg'
).trim();

/** Googleカレンダー予約ページ（新しいタブで開く用） */
export const GOOGLE_CALENDAR_BOOKING_URL = (
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL ??
  'https://calendar.app.google/WyRL3eqXMN7dAYLk7'
).trim();

/** Googleカレンダー予約の iframe 埋め込みURL */
export const GOOGLE_CALENDAR_EMBED_URL = (
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL ??
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ28uAPiv4l_lHKycK6NJfqNHbzej_ij-jmY8C3TtmpLBaLl-YsGjMuvZQZTTGZKwF1bq7g2UKBc?gv=true'
).trim();
