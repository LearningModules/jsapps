var  request = require('request');
var s = request('http://www.google.co.in'); 
// Here , request object is already inheriting EventEmitter class and hence we can listen on it using s.on()

s.on('data', function(chunk){
    console.log('>>>> DATA RECEIVED >>> : '+chunk); // Standard event called data is emitter whenever a chunk is received from http server.
})

s.on('end', function(chunk){
    console.log('>>>> NO MORE DATA');
})