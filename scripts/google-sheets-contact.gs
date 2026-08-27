/**
 * 学習塾ミネルバ — 総合問い合わせフォーム → スプレッドシート連携
 *
 * 列（1行目ヘッダー）:
 * 受付日時 / 生徒姓 / 生徒名 / 姓（カナ） / 名（カナ） / 学年 / 学校名 /
 * 保護者名 / メールアドレス / 電話番号 / お問い合わせの種類 /
 * ご相談・お問い合わせ内容 / 当塾を知ったきっかけ / 受付ID / submittedAt(ISO)
 *
 * 使い方:
 * 1. 新しい Google スプレッドシートを作成（シート名「申し込み」推奨）
 * 2. 拡張機能 → Apps Script にこの内容を貼り付けて保存
 * 3. デプロイ → 新しいデプロイ → ウェブアプリ
 *    - 実行ユーザー: 自分 / アクセス: 全員
 * 4. ウェブアプリ URL を GOOGLE_SHEETS_WEBAPP_URL に設定
 */

var HEADER = [
  '受付日時',
  '生徒姓',
  '生徒名',
  '姓（カナ）',
  '名（カナ）',
  '学年',
  '学校名',
  '保護者名',
  'メールアドレス',
  '電話番号',
  'お問い合わせの種類',
  'ご相談・お問い合わせ内容',
  '当塾を知ったきっかけ',
  '受付ID',
  'submittedAt(ISO)',
];

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER);
    return;
  }

  var firstRow = sheet.getRange(1, 1, 1, HEADER.length).getValues()[0];
  var needsHeader = firstRow.every(function (cell) {
    return cell === '' || cell === null;
  });
  if (needsHeader) {
    sheet.getRange(1, 1, 1, HEADER.length).setValues([HEADER]);
  }
}

function joinInquiryTypes_(value) {
  if (Array.isArray(value)) {
    return value.join(' / ');
  }
  return value || '';
}

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var data = JSON.parse(raw);
    var sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName('申し込み') ||
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    ensureHeader_(sheet);

    sheet.appendRow([
      new Date(),
      data.studentLastName || '',
      data.studentFirstName || '',
      data.studentLastNameKana || '',
      data.studentFirstNameKana || '',
      data.grade || '',
      data.schoolName || '',
      data.guardianName || '',
      data.email || '',
      data.phone || '',
      joinInquiryTypes_(data.inquiryTypes),
      data.message || '',
      data.referralSource || '',
      data.inquiryId || '',
      data.submittedAt || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, inquiryId: data.inquiryId || '' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: 'minerva-contact-inquiry' })
  ).setMimeType(ContentService.MimeType.JSON);
}
