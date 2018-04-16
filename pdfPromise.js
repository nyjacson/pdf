function pdf(res, query){
 const puppeteer = require('puppeteer');
 let browser;

 const launch = () => {
    return new Promise((resolve, reject) => {
    browser = puppeteer.launch({headless: true});
      resolve(browser);
    });
  }

  const br = (browser) => {
    return new Promise((resolve, reject) => {
    const page = browser.newPage();
      resolve(page);
    });
  }

  const goto = (page) => {
    return new Promise((resolve, reject) => {
      page.goto('https://' + query);
      resolve(page);
    });
  }

  const getData = (page) => {
    return new Promise((resolve, reject) => {
      const data = page.pdf();
      resolve(data);
    });
  }

  const returnData = (data) => {
    return new Promise((resolve, reject) => {
        res.contentType("application/pdf");
        res.send(data);
        res.status(200);
        res.end();
        browser.close();
    });
  }

  const onRejectted = (v)=>{
    console.log("onRejectted",v);
  }

Promise.resolve()
.then(launch)
.then(br)
.then(goto)
.then(getData)
.then(returnData)
.catch(onRejectted);
}

module.exports.pdf = pdf;
