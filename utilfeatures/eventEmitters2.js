var events = require('events').EventEmitter;
var util=require('util');

var getResource = function(c) {
    var emitter = new events();
    emitter.emit('started');
    for(var i=0 ; i< c ; i++)
        {   
            console.log('emitting = '+i)
            emitter.emit('data',i);
            if(i==9)
                emitter.emit('ending');
        }
        
    // process.nextTick(function() {
    //     var count = 0;
    //     e.emit('start');
    //     var t = setInterval(function () {
    //         e.emit('data bb', ++count);
    //         if (count === c) {
    //             e.emit('end', count);
    //             clearInterval(t);
    //         }
    //     }, 10);
    // });
    return(emitter);
};

//util.inherits(getResource,EventEmitter);
var r = getResource(100);

r.on('started', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log("I received data -> " + d);
});

r.on('ending', function(t) {
    console.log("I'm done, with " + t + " data events.");
});

var r = getResource(100);

