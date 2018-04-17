const pdf = (res, query) => {
  const puppeteer = require('puppeteer');

  new Promise((resolve, reject) => {
    puppeteer
      .launch({ headless: true })
      .then(browser => {
        return browser.newPage();
      })
      .then(page => {
        page.goto('https://example.com').then(() => {
          return page.pdf();
        });
      })
      .then(data => {
        res.contentType('application/pdf');
        res.send(data);
        res.status(200);
        res.end();
        resolve();
        browser.close();
      })
      .catch(error => console.log('error', error));
  });
};

module.exports.pdf = pdf;
