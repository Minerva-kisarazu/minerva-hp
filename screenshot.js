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
 *   各 PNG は撮影直前に上書きします（開始時に一括削除しない）。
 *   Cursor で PNG を開いたまま実行すると、古い画像が書き戻されることがあります。
 *   撮影後に横並び結合画像も作ります:
 *     combined-pc.png / combined-sp.png / combined-all.png
 *   --no-combine で結合をスキップできます。
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
// node screenshot.js --no-combine で横並び結合をスキップ
const skipCombine = process.argv.includes('--no-combine');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
/** 今回の実行で書き込んだファイル（終了時の検証・掃除用） */
const writtenThisRun = new Set();
let runStartedAt = Date.now();

/** 横並び結合時の各ページの表示幅（フル解像度だと1枚が巨大になるため縮小） */
const COMBINE_COLUMN_WIDTH = 480;
const COMBINE_GAP = 12;
const COMBINE_LABEL_HEIGHT = 40;
// ============================================

/**
 * 保存先を空にしてから撮り直す。
 * 分割数はページの長さで変わるため、消さずに撮ると前回の余分なスライスが
 * 残り、古い画像を最新だと思って見てしまう。
 */
function removeFileOrThrow(filePath) {
  if (!fs.existsSync(filePath)) return;

  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    throw new Error(
      `${path.basename(filePath)} を削除できません。` +
        ' Cursor や画像ビューアで開いている場合は閉じてから再実行してください。' +
        ` (${error.code || error.message})`
    );
  }
}

/** 撮影後に Cursor 等が古い内容を書き戻していないか確認する */
function collectStaleOutputs() {
  const stale = [];
  const runStartThreshold = runStartedAt - 3000;

  for (const outPath of writtenThisRun) {
    if (!fs.existsSync(outPath)) {
      stale.push(`${path.basename(outPath)} (ファイル自体がありません)`);
      continue;
    }

    const { mtime } = fs.statSync(outPath);
    if (mtime.getTime() < runStartThreshold) {
      stale.push(`${path.basename(outPath)} (${mtime.toLocaleString('ja-JP')})`);
    }
  }

  return stale;
}

async function verifyOutputsStayFresh() {
  // Cursor が「削除されたファイル」を古い内容で復元するのを検知するため少し待つ
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const stale = collectStaleOutputs();
  if (stale.length === 0) return;

  throw new Error(
    '以下の PNG が撮影後に古い内容へ戻されました:\n' +
      stale.map((name) => `  - ${name}`).join('\n') +
      '\n\n原因: screenshots 内の PNG を Cursor で開いたまま node screenshot.js を実行すると、' +
      '削除後にエディタが古い画像を書き戻すことがあります（pc-01-home だけ更新日が古いまま、など）。\n' +
      '対処: screenshots フォルダ内の PNG タブをすべて閉じ、未保存状態にしてから再実行してください。'
  );
}

/**
 * 各ページのフルページ PNG を横並びに結合する。
 * フル解像度のままだと数万ピクセルになるため、列幅を揃えて縮小する。
 */
async function combineSideBySide(imagePaths, labels, outPath) {
  const sharp = require('sharp');

  const columns = [];
  for (let i = 0; i < imagePaths.length; i += 1) {
    const imagePath = imagePaths[i];
    if (!fs.existsSync(imagePath)) {
      throw new Error(`結合用画像がありません: ${imagePath}`);
    }

    const resized = await sharp(imagePath)
      .resize({ width: COMBINE_COLUMN_WIDTH, withoutEnlargement: true })
      .png()
      .toBuffer({ resolveWithObject: true });

    columns.push({
      buf: resized.data,
      width: resized.info.width,
      height: resized.info.height,
      label: labels[i] || path.basename(imagePath, '.png'),
    });
  }

  const totalWidth =
    columns.reduce((sum, col) => sum + col.width, 0) +
    COMBINE_GAP * Math.max(columns.length - 1, 0);
  const maxImageHeight = Math.max(...columns.map((col) => col.height));
  const totalHeight = COMBINE_LABEL_HEIGHT + maxImageHeight;

  const composites = [];
  let x = 0;

  for (const col of columns) {
    const labelSvg = Buffer.from(`
      <svg width="${col.width}" height="${COMBINE_LABEL_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0f172a"/>
        <text x="50%" y="58%" fill="#f8fafc" font-size="18" font-family="Segoe UI, Meiryo, sans-serif"
          text-anchor="middle" dominant-baseline="middle">${col.label}</text>
      </svg>
    `);

    composites.push({
      input: await sharp(labelSvg).png().toBuffer(),
      left: x,
      top: 0,
    });
    composites.push({
      input: col.buf,
      left: x,
      top: COMBINE_LABEL_HEIGHT,
    });

    x += col.width + COMBINE_GAP;
  }

  await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 3,
      background: { r: 226, g: 232, b: 240 },
    },
  })
    .composite(composites)
    .png()
    .toFile(outPath);

  writtenThisRun.add(outPath);
  const { mtime, size } = fs.statSync(outPath);
  return { mtime, size };
}

/** PC 行と SP 行を縦に重ねて、レビュー用の1枚にまとめる */
async function combineReviewSheets() {
  const labels = PAGES.map((page) => page.filename);
  const pcPaths = PAGES.map((page) =>
    path.join(OUTPUT_DIR, `pc-${page.filename}.png`)
  );
  const spPaths = PAGES.map((page) =>
    path.join(OUTPUT_DIR, `sp-${page.filename}.png`)
  );

  console.log('\n=== 横並び結合 ===');

  const pcOut = path.join(OUTPUT_DIR, 'combined-pc.png');
  const spOut = path.join(OUTPUT_DIR, 'combined-sp.png');
  const allOut = path.join(OUTPUT_DIR, 'combined-all.png');

  const pc = await combineSideBySide(
    pcPaths,
    labels.map((name) => `PC ${name}`),
    pcOut
  );
  console.log(
    `  ✓ ${path.relative(process.cwd(), pcOut)} (${pc.mtime.toLocaleString('ja-JP')}, ${Math.round(pc.size / 1024)} KB)`
  );

  const sp = await combineSideBySide(
    spPaths,
    labels.map((name) => `SP ${name}`),
    spOut
  );
  console.log(
    `  ✓ ${path.relative(process.cwd(), spOut)} (${sp.mtime.toLocaleString('ja-JP')}, ${Math.round(sp.size / 1024)} KB)`
  );

  // PC 行の下に SP 行を置いて 1 ファイルにまとめる
  const sharp = require('sharp');
  const [pcMeta, spMeta] = await Promise.all([
    sharp(pcOut).metadata(),
    sharp(spOut).metadata(),
  ]);
  const width = Math.max(pcMeta.width, spMeta.width);
  const height = pcMeta.height + COMBINE_GAP + spMeta.height;

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 226, g: 232, b: 240 },
    },
  })
    .composite([
      { input: pcOut, left: 0, top: 0 },
      { input: spOut, left: 0, top: pcMeta.height + COMBINE_GAP },
    ])
    .png()
    .toFile(allOut);

  writtenThisRun.add(allOut);
  const allStat = fs.statSync(allOut);
  console.log(
    `  ✓ ${path.relative(process.cwd(), allOut)} (${allStat.mtime.toLocaleString('ja-JP')}, ${Math.round(allStat.size / 1024)} KB)`
  );
}

/**
 * 前回の --slices 実行で残った分割 PNG だけ掃除する。
 * 通常のフルページ PNG は、各ページの撮影直前に上書きする。
 */
function cleanupSliceOutputs() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    return 0;
  }

  const stale = fs
    .readdirSync(OUTPUT_DIR)
    .filter((name) => /-(s\d+|writing-)\d*\.png$/i.test(name));

  stale.forEach((name) => removeFileOrThrow(path.join(OUTPUT_DIR, name)));
  return stale.length;
}

/** Windows / Cursor 対策: 一時ファイルへ書いてから、対象ファイルを差し替える */
async function writeScreenshot(page, outPath, options = {}) {
  const tempPath = path.join(
    OUTPUT_DIR,
    `.writing-${process.pid}-${path.basename(outPath, '.png')}-${Date.now()}.png`
  );

  try {
    await page.screenshot({ path: tempPath, ...options });
    removeFileOrThrow(outPath);
    fs.renameSync(tempPath, outPath);
  } catch (error) {
    if (fs.existsSync(tempPath)) {
      try {
        fs.unlinkSync(tempPath);
      } catch {
        // ignore
      }
    }
    throw error;
  }

  writtenThisRun.add(outPath);

  const { mtime, size } = fs.statSync(outPath);
  return { mtime, size };
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

    const { mtime } = await writeScreenshot(page, outPath, {
      clip: { x: 0, y, width: pageWidth, height },
      captureBeyondViewport: true,
    });

    console.log(
      `  ✓ ${path.relative(process.cwd(), outPath)} (${mtime.toLocaleString('ja-JP')})`
    );
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

  let savedAt = null;

  if (options.sliceHeight) {
    await captureSlices(page, filename, viewportName, options.sliceHeight);
  } else {
    ({ mtime: savedAt } = await writeScreenshot(page, outPath, { fullPage: true }));
  }

  const overflow = await detectHorizontalOverflow(page);
  const overflowNote =
    overflow.scrollWidth > overflow.docWidth + 1
      ? `  ⚠ 横はみ出し ${overflow.docWidth}px → ${overflow.scrollWidth}px`
      : '';

  if (options.sliceHeight) {
    if (overflowNote) console.log(`  ${overflowNote.trim()}`);
  } else {
    const savedNote = savedAt ? ` (${savedAt.toLocaleString('ja-JP')})` : '';
    console.log(`  ✓ ${path.relative(process.cwd(), outPath)}${savedNote}${overflowNote}`);
  }

  if (overflow.offenders.length > 0) {
    overflow.offenders.forEach((o) => {
      console.log(`      ${o.tag}.${o.cls} (left:${o.left} right:${o.right})`);
    });
  }
}

async function main() {
  runStartedAt = Date.now();
  const removedSlices = cleanupSliceOutputs();

  console.log(`撮影開始: ${BASE_URL}`);
  console.log(`保存先:   ${OUTPUT_DIR}`);
  console.log(
    '重要: screenshots 内の PNG を Cursor で開いていると、削除後に古い画像が書き戻されます。'
  );
  console.log('      実行前に PNG のタブをすべて閉じてください。');
  if (removedSlices > 0) {
    console.log(`前回の分割 PNG ${removedSlices} 件を削除しました`);
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
  await page.setCacheEnabled(false);

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

  await verifyOutputsStayFresh();

  if (!useSlices && !skipCombine && failed === 0) {
    try {
      await combineReviewSheets();
    } catch (error) {
      failed += 1;
      console.error(`  ✗ 横並び結合に失敗: ${error.message}`);
    }
  } else if (skipCombine) {
    console.log('\n横並び結合: --no-combine のためスキップ');
  }

  console.log(`\n完了: 成功 ${success} / 失敗 ${failed}`);
  writtenThisRun.forEach((outPath) => {
    const { mtime, size } = fs.statSync(outPath);
    console.log(
      `  保存確認: ${path.relative(process.cwd(), outPath)} (${mtime.toLocaleString('ja-JP')}, ${Math.round(size / 1024)} KB)`
    );
  });
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
