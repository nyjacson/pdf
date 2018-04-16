const pdf = (res, query) => {
  const puppeteer = require('puppeteer');

  new Promise((resolve, reject) => {
    puppeteer.launch().then(function (browser) {
      browser.newPage().then(function (page) {
        page.goto('https://google.co.jp');
        const data = page.pdf();
        res.contentType("application/pdf");
        res.send(data);
        res.status(200);
        res.end();
        resolve();
        browser.close(); 
      });
    });
  });
}

module.exports.pdf = pdf;