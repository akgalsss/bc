var fs = require('fs');
var path = require('path');
var express = require('express');

var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('keys/server.key', 'utf8');
var certificate = fs.readFileSync('keys/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/dist", express.static(__dirname + '/dist'));

app.use("/demo", express.static(__dirname + '/src/src'));
app.use('/demo/StreamDemo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/src/StreamDemo.html'));
});

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8080');
});

httpsServer.listen(8443, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at https://localhost:8443');
});
