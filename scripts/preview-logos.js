const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const chrome = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].find((p) => fs.existsSync(p));
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: chrome,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();

  const jobs = [
    {
      file: 'horizontal-no-tagline-transparent-1500x214.svg',
      bg: '#d0d0d0',
      w: 1000,
      h: 280,
      out: 'screenshots/preview2-horizontal.png',
    },
    {
      file: 'custom-vertical-with-tagline-transparent-1500x1500.svg',
      bg: '#d0d0d0',
      w: 700,
      h: 700,
      out: 'screenshots/preview2-vertical.png',
    },
    {
      file: 'sign-no-tagline-transparent-1500x1500.svg',
      bg: '#d0d0d0',
      w: 700,
      h: 700,
      out: 'screenshots/preview2-icon.png',
    },
    {
      file: 'horizontal-no-tagline-transparent-1500x214.svg',
      bg: '#006058',
      w: 1000,
      h: 280,
      out: 'screenshots/preview2-horizontal-on-green.png',
    },
  ];

  for (const job of jobs) {
    const svg = fs.readFileSync(path.join('public/images', job.file), 'utf8');
    const html = `<!doctype html><html><head><meta charset="utf-8"></head>
      <body style="margin:0;background:${job.bg};display:flex;align-items:center;justify-content:center;width:${job.w}px;height:${job.h}px">
        <div style="max-width:92%;max-height:92%">${svg}</div>
      </body></html>`;
    await page.setViewport({ width: job.w, height: job.h, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'load', timeout: 15000 });
    await page.evaluate(() => {
      const svgEl = document.querySelector('svg');
      if (svgEl) {
        svgEl.removeAttribute('width');
        svgEl.removeAttribute('height');
        svgEl.setAttribute('width', '100%');
        svgEl.style.width = '100%';
        svgEl.style.height = 'auto';
        svgEl.style.maxHeight = '90vh';
        svgEl.style.display = 'block';
      }
    });
    await page.screenshot({ path: job.out });
    console.log('wrote', job.out);
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
