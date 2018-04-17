function pdf(res, query) {
  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://' + query);
    // await page.goto('https://google.co.jp');
    const data = await page.pdf();
    res.contentType('application/pdf');
    res.send(data);
    res.status(200);
    res.end();
    await browser.close();
  })();
}

module.exports.pdf = pdf;
