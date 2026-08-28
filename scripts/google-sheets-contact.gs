/**
 * 学習塾ミネルバ — 新サイト用：総合問い合わせ →「見込み」シート連携
 *
 * 【重要】Jimdo 側の既存 Apps Script は触らないこと
 * - スプレッドシートの「拡張機能 → Apps Script」は Jimdo 用の既存プロジェクトです。
 *   1つのシートに紐づくコンテナバインドは1つだけなので、ここから新規は作れません。
 * - このスクリプトは script.google.com で【スタンドアロンの新規プロジェクト】を作り、
 *   スクリプトプロパティの SPREADSHEET_ID で同じ見込みシートを開きます。
 *
 * セットアップ:
 * 1. https://script.google.com を開く（スプレッドシートからは開かない）
 * 2. 「新しいプロジェクト」→ 名前を例: minerva-hp-contact
 * 3. このファイルを貼り付けて保存
 * 4. 見込みスプレッドシートの URL から ID を控える
 *    例: https://docs.google.com/spreadsheets/d/【ここがID】/edit
 * 5. 歯車アイコン「プロジェクトの設定」→「スクリプト プロパティ」に追加:
 *      SPREADSHEET_ID = （上で控えた ID）※必須
 *      CHAT_URL       = （Jimdo用GASと同じ Google Chat Webhook URL）
 *    任意:
 *      SHEET_PROSPECT / SENDER_EMAIL / SENDER_NAME /
 *      PAMPH_URL / PRICE_URL / BOOKING_URL
 * 6. デプロイ → 新しいデプロイ → 種類: ウェブアプリ
 *    - 実行ユーザー: 自分
 *    - アクセス: 全員
 * 7. 初回は承認画面が出る → Googleアカウントで許可
 * 8. ウェブアプリ URL を .env.local / Vercel の GOOGLE_SHEETS_WEBAPP_URL に設定
 *
 * 書き込み先シート「見込み」のヘッダー（既存のまま）:
 * 自社生徒ID / 申込日時 / ステータス / 生徒姓 / 生徒名 / 姓(カナ) / 名(カナ) /
 * 学年 / 学校名 / メールアドレス / 電話番号 / 性別 / 誕生日 / 郵便番号 / 住所 /
 * 保護者名 / 学習の悩み / 気になる科目 / 学習時間 / 期待すること /
 * きっかけ / 気になったポイント / 相談詳細・備考 /
 * 問い合わせ内容 / 受付ID（X列・Y列など、1行目ヘッダー名で自動マッチ）
 */

var DEFAULTS = {
  SHEET_PROSPECT: '見込み',
  SENDER_EMAIL: 'contact@minerva-education.co.jp',
  SENDER_NAME: '学習塾ミネルバ',
  PAMPH_URL: 'https://x.gd/minerva_guide',
  PRICE_URL: 'https://x.gd/minerva_fees',
  // 新サイトの面談予約カレンダー
  BOOKING_URL: 'https://calendar.app.google/WyRL3eqXMN7dAYLk7',
};

function getConfig_() {
  var props = PropertiesService.getScriptProperties();
  return {
    SPREADSHEET_ID: props.getProperty('SPREADSHEET_ID') || '',
    SHEET_PROSPECT: props.getProperty('SHEET_PROSPECT') || DEFAULTS.SHEET_PROSPECT,
    SENDER_EMAIL: props.getProperty('SENDER_EMAIL') || DEFAULTS.SENDER_EMAIL,
    SENDER_NAME: props.getProperty('SENDER_NAME') || DEFAULTS.SENDER_NAME,
    CHAT_URL: props.getProperty('CHAT_URL') || '',
    PAMPH_URL: props.getProperty('PAMPH_URL') || DEFAULTS.PAMPH_URL,
    PRICE_URL: props.getProperty('PRICE_URL') || DEFAULTS.PRICE_URL,
    BOOKING_URL: props.getProperty('BOOKING_URL') || DEFAULTS.BOOKING_URL,
  };
}

/** スタンドアロン用。SPREADSHEET_ID 必須（Jimdo既存のコンテナバインドとは別プロジェクト） */
function getSpreadsheet_(config) {
  if (!config.SPREADSHEET_ID) {
    throw new Error(
      'スクリプトプロパティ SPREADSHEET_ID が未設定です。見込みスプレッドシートの ID を設定してください。'
    );
  }
  return SpreadsheetApp.openById(config.SPREADSHEET_ID);
}

function getCol_(sheet) {
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var map = {};
  headers.forEach(function (h, i) {
    if (h) map[String(h).trim()] = i + 1;
  });
  return map;
}

function joinInquiryTypes_(value) {
  if (Object.prototype.toString.call(value) === '[object Array]') {
    return value.filter(Boolean).join(' / ');
  }
  return value ? String(value) : '';
}

function setCell_(rowData, col, header, value) {
  if (!col[header]) return;
  rowData[col[header] - 1] = value;
}

function buildInquiryContent_(data) {
  var parts = [];
  var types = joinInquiryTypes_(data.inquiryTypes);
  if (types) {
    parts.push('【お問い合わせの種類】\n' + types);
  }
  if (data.message) {
    parts.push('【ご相談内容】\n' + data.message);
  }
  return parts.join('\n\n');
}

function buildRemarks_(data) {
  var parts = ['【経路】新サイト'];
  if (data.submittedAt) {
    parts.push('【submittedAt】\n' + data.submittedAt);
  }
  return parts.join('\n\n');
}

function sendMinervaEmail_(to, subject, body, config) {
  var lastError = null;

  // ① Gmail エイリアス（contact@...）から送信 — Jimdo と同じ
  try {
    GmailApp.sendEmail(to, subject, body, {
      from: config.SENDER_EMAIL,
      name: config.SENDER_NAME,
    });
    console.log('メール送信成功（GmailApp / from指定）:', to);
    return;
  } catch (e1) {
    lastError = e1;
    console.warn('GmailApp（from指定）失敗:', e1);
  }

  // ② Gmail 通常送信（実行アカウントから）
  try {
    GmailApp.sendEmail(to, subject, body, {
      name: config.SENDER_NAME,
    });
    console.log('メール送信成功（GmailApp / 実行アカウント）:', to);
    return;
  } catch (e2) {
    lastError = e2;
    console.warn('GmailApp（通常）失敗:', e2);
  }

  // ③ MailApp フォールバック
  try {
    MailApp.sendEmail(to, subject, body, {
      name: config.SENDER_NAME,
    });
    console.log('メール送信成功（MailApp）:', to);
    return;
  } catch (e3) {
    lastError = e3;
    console.error('メール送信失敗（すべての方法）:', e3);
    throw new Error(
      '保護者へのメール送信に失敗しました: ' +
        String(lastError && lastError.message ? lastError.message : lastError)
    );
  }
}

function notifyChat_(text, config) {
  if (!config.CHAT_URL) {
    console.warn('CHAT_URL が未設定です。スクリプトプロパティに設定してください。');
    return;
  }
  UrlFetchApp.fetch(config.CHAT_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text: text }),
    muteHttpExceptions: true,
  });
}

function handleNewSiteInquiry_(data, config) {
  var sheet = getSpreadsheet_(config).getSheetByName(config.SHEET_PROSPECT);
  if (!sheet) {
    throw new Error('シート「' + config.SHEET_PROSPECT + '」が見つかりません');
  }

  var col = getCol_(sheet);
  var lastCol = sheet.getLastColumn();
  var rowData = [];
  for (var i = 0; i < lastCol; i++) {
    rowData[i] = '';
  }

  var fullName =
    String(data.studentLastName || '').trim() +
    ' ' +
    String(data.studentFirstName || '').trim();
  var phone = String(data.phone || '').trim();
  var email = String(data.email || '').trim();
  var grade = String(data.grade || '').trim();
  var school = String(data.schoolName || '').trim();
  var types = joinInquiryTypes_(data.inquiryTypes);

  setCell_(rowData, col, '申込日時', new Date());
  setCell_(rowData, col, 'ステータス', '新規問い合わせ');
  setCell_(rowData, col, '生徒姓', data.studentLastName || '');
  setCell_(rowData, col, '生徒名', data.studentFirstName || '');
  setCell_(rowData, col, '姓(カナ)', data.studentLastNameKana || '');
  setCell_(rowData, col, '名(カナ)', data.studentFirstNameKana || '');
  setCell_(rowData, col, '学年', grade);
  setCell_(rowData, col, '学校名', school);
  setCell_(rowData, col, 'メールアドレス', email);
  setCell_(rowData, col, '電話番号', phone ? "'" + phone : '');
  setCell_(rowData, col, '保護者名', data.guardianName || '');
  setCell_(rowData, col, 'きっかけ', data.referralSource || '');
  setCell_(rowData, col, '問い合わせ内容', buildInquiryContent_(data));
  setCell_(rowData, col, '受付ID', data.inquiryId || '');
  setCell_(rowData, col, '相談詳細・備考', buildRemarks_(data));

  sheet.appendRow(rowData);

  notifyChat_(
    '🔔 【お問い合わせ・新規（新サイト）】\n' +
      '生徒: ' +
      fullName +
      ' (' +
      grade +
      ')\n' +
      '学校: ' +
      school +
      '\n' +
      'メール: ' +
      email +
      (types ? '\n種類: ' + types : ''),
    config
  );

  if (email) {
    var subject =
      '【学習塾ミネルバ】お問い合わせありがとうございます（無料学習相談のご案内）';
    var body =
      fullName +
      ' 様\n\n' +
      '学習塾ミネルバ 塾長の橋本でございます。\n' +
      'この度は当塾へお問い合わせをいただき、誠にありがとうございます。\n\n' +
      '資料を以下にお送りいたします。まずはこちらをご一読ください。\n\n' +
      '--------------------------------------------------\n' +
      '■ パンフレット\n' +
      ' ' +
      config.PAMPH_URL +
      '\n\n' +
      '■ 料金表・通塾規定\n' +
      ' ' +
      config.PRICE_URL +
      '\n' +
      '--------------------------------------------------\n\n' +
      '資料をご覧いただく中で、ご不明な点も多々あるかと存じます。\n' +
      'ただ、学習のお悩みや課題は一人ひとり異なり、資料だけではお子様に最適な学習法をすべてお伝えしきれないのが実情です。\n\n' +
      'そのため当塾では、まずは【無料学習相談】にてお子様の現状を詳しくお伺いし、\n' +
      'これからの学習の進め方について一緒に考えさせていただく時間を設けております。\n\n' +
      'また、当塾では指導の質を可視化するため、普段からすべての授業において\n' +
      '「何が」「なぜ」出来ていないかまでを記載した【指導報告】を保護者様へお送りしております。\n\n' +
      '体験授業（最大2回）においても、この分析を同様に実施いたします。\n' +
      '・学習方法に誤った箇所はないか（途中式を省く、単語や漢字を見ながら移す等）\n' +
      '・学習を阻害する心理的要因はないか（間違いは許されない、早く解くことが大事等）\n' +
      '・今の単元以前につまずきの要因がないか（割合の概念やbe動詞と一般動詞の区別等）\n' +
      'こうした「テストの点数だけでは見えない根本的な原因」をプロの視点で見極め、\n' +
      'どの単元からやり直す必要があるか、何をどんなペースで進めるべきかを整理して、\n' +
      '授業の翌日までにメールやLINE等でご報告させていただきます。\n\n' +
      '一度、お子様の現状を客観的に整理してみませんか？\n' +
      'ご予約は以下のリンクよりお願いいたします。\n\n' +
      '▼【無料学習相談】のご予約はこちら\n' +
      config.BOOKING_URL +
      '?name=' +
      encodeURIComponent(fullName) +
      '&email=' +
      encodeURIComponent(email) +
      '\n\n' +
      '※体験授業をご希望の場合も、詳細な分析を事前に行うため、まずはこちらの学習相談へのご参加をお願いしております。\n' +
      '※「03-6820-6929」の番号からお電話させて頂くことがございます。\n\n' +
      'お子様の「わかった！」のきっかけを一緒に作れることを、楽しみにお待ちしております。\n\n' +
      '学習塾ミネルバ\n' +
      '塾長 橋本';

    try {
      sendMinervaEmail_(email, subject, body, config);
    } catch (mailErr) {
      // シート・Chat は成功済み。メールだけ失敗した場合はログに残す
      console.error('自動返信メール失敗:', mailErr);
    }
  }

  return { ok: true, inquiryId: data.inquiryId || '' };
}

function doPost(e) {
  try {
    var config = getConfig_();
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var data = JSON.parse(raw);
    var result = handleNewSiteInquiry_(data, config);
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      ok: true,
      service: 'minerva-contact-inquiry-new-site',
      note: 'Jimdo既存GASとは別プロジェクトです',
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * メール送信テスト（Apps Script エディタから手動実行）
 * 1. 下の TEST_EMAIL を自分のメールアドレスに変更
 * 2. 関数 testSendEmail を選んで「実行」
 * 3. 初回は Gmail 送信権限の承認を求められる → 許可
 */
function testSendEmail() {
  var config = getConfig_();
  sendMinervaEmail_(
    'YOUR_EMAIL@example.com',
    '【テスト】学習塾ミネルバ メール送信確認',
    'このメールが届けば送信設定は正常です。',
    config
  );
}
