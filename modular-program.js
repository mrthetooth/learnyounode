var mod = require('./modularmodule');

var filePath = process.argv[2];
var ext = process.argv[3];

mod (filePath, ext, function (err, files) {
  if (err)
    console.error('Uh oh! Something when wrong: ', err);
  else {
    files.forEach(function (file) {
        console.log (file);
    });
  }
}); 
