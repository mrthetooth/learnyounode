var http = require('http');
var bl = require('bl');

var options = process.argv[2];

http.get(options, logResponse);

function logResponse (res){
  res.pipe(bl(function (err, data) {
    if (err) console.error(err.toString());
    else {
      console.log(data.length);
      console.log(data.toString());
    }
  }));
}
