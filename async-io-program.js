var fs = require('fs');
var filePath = process.argv[2];

fs.readFile (filePath, 'utf8', countLines);

function countLines (err, data) {
  if (err) console.error (err);
  else {
    var ln = data.split('\n').length - 1;
    console.log(ln);
  }
}
