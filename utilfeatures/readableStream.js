var  request = require('request');
var s = request('http://www.google.co.in'); 
var fs = require('fs');
var zlib = require('zlib');
// Here , request object is already inheriting EventEmitter class and hence we can listen on it using s.on()

s.on('data', function(chunk){
    console.log('>>>> DATA RECEIVED >>> : '+chunk); // Standard event called data is emitter whenever a chunk is received from http server.
})

s.on('end', function(chunk){
    console.log('>>>> NO MORE DATA');
})


s.pipe(fs.createWriteStream('htmlOutput.html')); // we create a writable stream to filesystem from request readable stream.
s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('htmlOutput.gzip')); // pipes through a gzip creater and then file system