var http = require('http');
var bl = require('bl');
var OUTPUT = [];
var COUNTER = 0;
var URLS = process.argv.slice(2);

for (i = 0; i < URLS.length; i++){
  getUrl(i);
}

function getUrl (index) {
  http.get(URLS[index], function (res){
    res.pipe(bl(function (err, data) {
      if (err) return console.error(err);
      else {
        OUTPUT[index] = data.toString();
        COUNTER++;

        if (COUNTER == URLS.length) {
          printOutput();
        }
      }
    }));
  });
}

function printOutput (){
  OUTPUT.forEach(function(data){
    console.log(data);
  });
}
