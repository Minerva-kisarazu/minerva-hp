/**
 * /print/pamphlet を PDF 化して public/downloads に保存する。
 * パンフは A4×4ページ（CSS @page A4）。チラシは当面非公開。
 *
 * 使い方:
 *   1. 別ターミナルで npm run dev
 *   2. npm run export:pdf
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_PDF = path.join(ROOT, 'public', 'downloads');
const OUT_SHOT = path.join(ROOT, 'screenshots', 'print');
const BASE_URL = process.env.PRINT_EXPORT_BASE_URL || 'http://127.0.0.1:3000';

fs.mkdirSync(OUT_PDF, { recursive: true });
fs.mkdirSync(OUT_SHOT, { recursive: true });

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return undefined;
}

(async () => {
  const executablePath = findChrome();
  const browser = await puppeteer.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000, deviceScaleFactor: 1 });

  // --- pamphlet (A4 × 4 pages) ---
  console.log('exporting pamphlet');
  await page.goto(`${BASE_URL}/print/pamphlet`, {
    waitUntil: 'networkidle0',
    timeout: 90000,
  });
  const pamphletPdf = path.join(OUT_PDF, 'minerva-pamphlet.pdf');
  const pamphletTmp = path.join(OUT_SHOT, '_pdf-tmp', 'minerva-pamphlet.pdf');
  fs.mkdirSync(path.dirname(pamphletTmp), { recursive: true });
  await page.pdf({
    path: pamphletTmp,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  try {
    fs.copyFileSync(pamphletTmp, pamphletPdf);
    console.log('pamphlet', fs.statSync(pamphletPdf).size, '→', pamphletPdf);
  } catch (e) {
    console.warn(
      'public/downloads への書き込みに失敗（ファイルが開かれている可能性）。一時出力:',
      pamphletTmp,
      e.code || e.message
    );
  }

  const pages = await page.$$('.pamphlet-pages .pamphlet-page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({
      path: path.join(OUT_SHOT, `pamphlet-p${i + 1}.png`),
    });
  }
  console.log('screenshots', pages.length);

  if (process.env.PRINT_EXPORT_INCLUDE_FLYER === '1') {
    console.log('exporting flyer');
    await page.goto(`${BASE_URL}/print/flyer`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    const flyerPdf = path.join(OUT_PDF, 'minerva-flyer.pdf');
    await page.pdf({
      path: flyerPdf,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log('flyer', fs.statSync(flyerPdf).size, '→', flyerPdf);
  }

  await browser.close();
  console.log('done');
})().catch((e) => {
  console.error(e);
  console.error(
    '\nヒント: 先に npm run dev を起動してから、もう一度 npm run export:pdf を実行してください。'
  );
  process.exit(1);
});
