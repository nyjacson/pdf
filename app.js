var express = require('express');
var app = express();

const pdf = require('./pdf');

app.get('/', function (req, res) {
    res.send('hello');
})

app.get('/pdf', function (req, res) {
  pdf.pdf(res, req.query.url);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
