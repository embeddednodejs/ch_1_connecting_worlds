
var buf = new Buffer(4);
// <Buffer 50 0a 00 03>
buf.fill(0);
// <Buffer 00 00 00 00>

buf.writeUInt8(0x78, 2);
console.log(buf);
// <Buffer 00 00 78 00>

buf.readUInt8(2);
// 120

console.log(buf.toString());
// x

console.log(buf.toString('hex'))
// 00007800


var buf2 = new Buffer('deadbeef', 'hex');
console.log(buf2);
// <Buffer de ad be ef>


// import stream libraries
var stream = require('stream');
var Stream = stream.Stream;

