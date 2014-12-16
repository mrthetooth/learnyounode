var fs = require('fs');
var path = require('path');

module.exports = function (filePath, ext, callback) {
  fs.readdir(filePath, function (err, files) {
    if (err)
      return callback(err);
    else {
      files = files.filter(function (file){
        return path.extname(file) === "." + ext;
      });

      return callback(null, files);
    }
  });
}
