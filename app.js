var express = require('express');
var app = express();

const pdf = require('./pdf');

app.get('/', function (req, res) {
  pdf.pdf('express ');
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
