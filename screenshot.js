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
 *   実行ごとに中の .png を削除して撮り直します。git 管理対象外です。
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

// PC とスマホの両方を撮る（スマホ表示の崩れを確認するため）
// sliceHeight は --slices 指定時の分割撮影の高さ
const VIEWPORTS = [
  {
    name: 'pc',
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    isMobile: false,
    sliceHeight: 1500,
  },
  {
    name: 'sp',
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    isMobile: true,
    sliceHeight: 1000,
  },
];

// node screenshot.js --slices で縦分割撮影（細部確認用）
const useSlices = process.argv.includes('--slices');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
// ============================================

/**
 * 保存先を空にしてから撮り直す。
 * 分割数はページの長さで変わるため、消さずに撮ると前回の余分なスライスが
 * 残り、古い画像を最新だと思って見てしまう。
 */
function resetOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    return 0;
  }

  const stale = fs
    .readdirSync(OUTPUT_DIR)
    .filter((name) => name.toLowerCase().endsWith('.png'));

  stale.forEach((name) => fs.unlinkSync(path.join(OUTPUT_DIR, name)));
  return stale.length;
}

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

    // lazy 指定を外して強制読み込みを促す（iframe の地図なども含む）
    document
      .querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]')
      .forEach((el) => {
        el.loading = 'eager';
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

/** 意図しない横スクロールが発生していないか調べる */
async function detectHorizontalOverflow(page) {
  return page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;

    const offenders = [];
    if (scrollWidth > docWidth + 1) {
      document.querySelectorAll('body *').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        // 横スクロールを許可した要素（テーブル等）の内側は対象外
        if (el.closest('.overflow-x-auto')) return;
        if (rect.right > docWidth + 1 || rect.left < -1) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 70),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
          });
        }
      });
    }

    return { docWidth, scrollWidth, offenders: offenders.slice(0, 8) };
  });
}

/**
 * フルページ画像は縦に長すぎて細部が見えないため、
 * --slices を付けた場合は縦方向に分割して撮影する。
 */
async function captureSlices(page, filename, viewportName, sliceHeight) {
  const pageHeight = await page.evaluate(
    () => document.documentElement.scrollHeight
  );
  const pageWidth = await page.evaluate(
    () => document.documentElement.clientWidth
  );
  const count = Math.ceil(pageHeight / sliceHeight);

  for (let i = 0; i < count; i += 1) {
    const y = i * sliceHeight;
    const height = Math.min(sliceHeight, pageHeight - y);
    const index = String(i + 1).padStart(2, '0');
    const outPath = path.join(
      OUTPUT_DIR,
      `${viewportName}-${filename}-s${index}.png`
    );

    // 該当位置まで実際にスクロールする。ビューポート外の iframe（地図など）は
    // 描画されないため、これがないと白抜けで写る。
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await new Promise((resolve) => setTimeout(resolve, 250));

    await page.screenshot({
      path: outPath,
      clip: { x: 0, y, width: pageWidth, height },
      captureBeyondViewport: true,
    });

    console.log(`  ✓ ${path.relative(process.cwd(), outPath)}`);
  }
}

async function capturePage(page, pagePath, filename, viewportName, options = {}) {
  const url = `${BASE_URL}${pagePath}`;
  const outPath = path.join(OUTPUT_DIR, `${viewportName}-${filename}.png`);

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

  if (options.sliceHeight) {
    await captureSlices(page, filename, viewportName, options.sliceHeight);
  } else {
    await page.screenshot({
      path: outPath,
      fullPage: true,
    });
  }

  const overflow = await detectHorizontalOverflow(page);
  const overflowNote =
    overflow.scrollWidth > overflow.docWidth + 1
      ? `  ⚠ 横はみ出し ${overflow.docWidth}px → ${overflow.scrollWidth}px`
      : '';

  if (options.sliceHeight) {
    if (overflowNote) console.log(`  ${overflowNote.trim()}`);
  } else {
    console.log(`  ✓ ${path.relative(process.cwd(), outPath)}${overflowNote}`);
  }

  if (overflow.offenders.length > 0) {
    overflow.offenders.forEach((o) => {
      console.log(`      ${o.tag}.${o.cls} (left:${o.left} right:${o.right})`);
    });
  }
}

async function main() {
  const removed = resetOutputDir();

  console.log(`撮影開始: ${BASE_URL}`);
  console.log(`保存先:   ${OUTPUT_DIR}`);
  if (removed > 0) {
    console.log(`前回の画像 ${removed} 件を削除しました`);
  }
  console.log('');

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

  let success = 0;
  let failed = 0;

  for (const viewport of VIEWPORTS) {
    console.log(`\n=== ${viewport.name.toUpperCase()} (${viewport.width}px) ===`);
    await page.setViewport({
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.deviceScaleFactor,
      isMobile: viewport.isMobile,
      hasTouch: viewport.isMobile,
    });

    for (const { path: pagePath, filename } of PAGES) {
      try {
        await capturePage(page, pagePath, filename, viewport.name, {
          sliceHeight: useSlices ? viewport.sliceHeight : undefined,
        });
        success += 1;
      } catch (error) {
        failed += 1;
        console.error(`  ✗ 失敗 (${pagePath}): ${error.message}`);
        console.error('    → npm run dev でサーバーが起動しているか確認してください');
      }
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
