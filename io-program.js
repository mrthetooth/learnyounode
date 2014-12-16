//Counts line numbers in a file.
//Arguments: Filename

var fs = require('fs');
var ln = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(ln);
