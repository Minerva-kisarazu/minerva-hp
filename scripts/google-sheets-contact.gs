/**
 * 学習塾ミネルバ — お申し込みフォーム → スプレッドシート連携
 *
 * 使い方:
 * 1. 新しい Google スプレッドシートを作成
 * 2. 1行目にヘッダーを入れる（下記 HEADER と同じ順）
 * 3. 拡張機能 → Apps Script を開き、このファイルの内容を貼り付けて保存
 * 4. デプロイ → 新しいデプロイ → 種類: ウェブアプリ
 *    - 説明: contact form
 *    - 次のユーザーとして実行: 自分
 *    - アクセスできるユーザー: 全員
 * 5. デプロイ後の「ウェブアプリ URL」をコピーし、
 *    Vercel / ローカルの GOOGLE_SHEETS_WEBAPP_URL に設定する
 *
 * コードを更新したら「デプロイ → デプロイを管理 → 編集 → 新バージョン」で再デプロイする
 */

var HEADER = [
  '受信日時',
  'お名前',
  '学年',
  '学校名',
  '電話番号',
  'ご相談内容',
  'メッセージ',
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
      data.name || '',
      data.grade || '',
      data.schoolName || '',
      data.phone || '',
      Array.isArray(data.consultation) ? data.consultation.join(' / ') : data.consultation || '',
      data.message || '',
      data.submittedAt || '',
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/** ブラウザで開いたときの疎通確認用 */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: 'minerva-contact' })
  ).setMimeType(ContentService.MimeType.JSON);
}
