const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_PDF = path.join(ROOT, 'public', 'downloads');
const OUT_SHOT = path.join(ROOT, 'screenshots', 'print');
fs.mkdirSync(OUT_PDF, { recursive: true });
fs.mkdirSync(OUT_SHOT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 1200, deviceScaleFactor: 1 });

  for (const name of ['pamphlet', 'flyer']) {
    await page.goto(`http://127.0.0.1:3000/print/${name}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    const pdfPath = path.join(OUT_PDF, `minerva-${name}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    });
    const sheets = await page.$$('.print-a4');
    console.log(name, 'sheets', sheets.length, 'pdf', fs.statSync(pdfPath).size);
    for (let i = 0; i < sheets.length; i++) {
      await sheets[i].screenshot({
        path: path.join(OUT_SHOT, `${name}-p${i + 1}.png`),
      });
    }
  }

  await browser.close();
  console.log('done');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
