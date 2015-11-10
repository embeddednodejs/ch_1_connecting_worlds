// import stream libraries
var stream = require('stream');
var Stream = stream.Stream;

// create new stream to capture data
var ws = new Stream();
ws.writable = true;

// define write behavior
ws.write = function(data) {
  console.log('input=' + data);
}

// when closing a stream
ws.end = function(data) {
  console.log('bye');
}

// combine stream from input to output
console.log('Stream stdin to writable stream\n');
process.stdin.pipe(ws);
