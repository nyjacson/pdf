const pdf = (res, query) => {
  const puppeteer = require('puppeteer');

  new Promise((resolve, reject) => {
    puppeteer
      .launch({ headless: true })
      .then(browser => {
        return browser.newPage();
      })
      .then(page => {
        return page
          .goto('https://' + query)
          .then(() => {
            console.log('page', page);
            return page.pdf();
          })
          .catch(error => console.log('not get page', error));
      })
      .then(data => {
        console.log('data', data);
        res.contentType('application/pdf');
        res.send(data);
        res.status(200);
        res.end();
        resolve();
        // browser.close();
      })
      .catch(error => console.log('error', error));
  });
};

module.exports.pdf = pdf;
