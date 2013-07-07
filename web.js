var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");
  var buffer = new Buffer(32);
  console.log(fs.readFileSync("~/bitstarter/index.html"));

  response.send('Hello world 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
