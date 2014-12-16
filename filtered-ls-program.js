var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(filePath, filterDir);

function filterDir (err, files) {
  if (err) console.error(err);
  else {
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log (file);
      }
    });
  }
}
