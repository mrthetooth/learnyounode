var net = require ('net');
var port = Number(process.argv[2]);

var server = net.createServer(function (socket){
  socket.write(getDate());
  socket.end('\n');
});
server.listen(port);

function getDate () {
  var date = new Date();
  var currDate =
    date.getFullYear()
    + '-'
    + addZero((date.getMonth()+1))
    + '-'
    + addZero(date.getDate())
    + ' '
    + addZero(date.getHours())
    + ':'
    + addZero(date.getMinutes());
  return currDate;
}

function addZero (num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}
