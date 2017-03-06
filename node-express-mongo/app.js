var express = require('express');
var app = express();
var mangoose = require('mongoose');

mongoose.connect('mongodb://mongo')
app.get('/', function (req, res) {
  res.send("Hello from Docker");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
