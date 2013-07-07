var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer();

app.get('/', function(request, response) {
  response.send('Hello world 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
