/**
 * 学習塾ミネルバ公式サイト — 全ページのフルスクリーンショット撮影
 *
 * 使い方:
 *   1. 別ターミナルで開発サーバーを起動する
 *        npm run dev
 *   2. このスクリプトを実行する
 *        node screenshot.js
 *
 * 保存先: ./screenshots/
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// ===== ここを書き換えれば対象を変えられます =====
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

// パス → 保存ファイル名（拡張子なし）
const PAGES = [
  { path: '/', filename: '01-home' },
  { path: '/policy', filename: '02-policy' },
  { path: '/grades', filename: '03-grades' },
  { path: '/price', filename: '04-price' },
  { path: '/contact', filename: '05-contact' },
];

const VIEWPORT = {
  width: 1440,
  height: 900,
};

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
// ============================================

/** ページ全体をスクロールして、遅延読み込み画像をすべて発火させる */
async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(window.innerHeight / 2, 400);
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    for (let y = 0; y < maxScroll; y += step) {
      window.scrollTo(0, y);
      await delay(150);
    }

    // 最下部まで到達したあと、レイアウトが伸びる場合に備えてもう一度
    window.scrollTo(0, document.documentElement.scrollHeight);
    await delay(300);
    window.scrollTo(0, 0);
    await delay(200);
  });
}

/** すべての img が読み込み完了するまで待つ（タイムアウト付き） */
async function waitForImages(page) {
  await page.evaluate(async () => {
    const timeoutMs = 20000;
    const started = Date.now();

    // lazy 指定を外して強制読み込みを促す
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = 'eager';
    });

    const images = Array.from(document.images);

    await Promise.all(
      images.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();

        return new Promise((resolve) => {
          const done = () => resolve();
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });

          // タイムアウトしたら諦める（壊れた画像で止まらないように）
          const check = () => {
            if (img.complete || Date.now() - started > timeoutMs) {
              done();
            } else {
              setTimeout(check, 200);
            }
          };
          check();
        });
      })
    );

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });
}

async function capturePage(page, pagePath, filename) {
  const url = `${BASE_URL}${pagePath}`;
  const outPath = path.join(OUTPUT_DIR, `${filename}.png`);

  console.log(`→ ${url}`);

  await page.goto(url, {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });

  // 遅延読み込み画像を起こしてから、読み込み完了を待つ
  await scrollThroughPage(page);
  await waitForImages(page);
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 最上部に戻してからフルページ撮影
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((resolve) => setTimeout(resolve, 200));

  await page.screenshot({
    path: outPath,
    fullPage: true,
  });

  console.log(`  ✓ 保存: ${path.relative(process.cwd(), outPath)}`);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`撮影開始: ${BASE_URL}`);
  console.log(`保存先:   ${OUTPUT_DIR}\n`);

  // Puppeteer 同梱 Chrome が無い環境では、インストール済みの Chrome を使う
  const systemChromeCandidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA &&
      path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'),
  ].filter(Boolean);

  const executablePath = systemChromeCandidates.find((candidate) => fs.existsSync(candidate));

  const browser = await puppeteer.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  let success = 0;
  let failed = 0;

  for (const { path: pagePath, filename } of PAGES) {
    try {
      await capturePage(page, pagePath, filename);
      success += 1;
    } catch (error) {
      failed += 1;
      console.error(`  ✗ 失敗: ${error.message}`);
      console.error('    → npm run dev でサーバーが起動しているか確認してください');
    }
  }

  await browser.close();

  console.log(`\n完了: 成功 ${success} / 失敗 ${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
