var http = require('http');
var options = process.argv[2];

http.get(options, logResponse);

function logResponse (res) {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
}
