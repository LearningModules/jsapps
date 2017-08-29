var EventEmitter = require('events').EventEmitter;

var getResource = function(c){
    var e = new EventEmitter();
    var totalCycles = c;
    e.emit('started');
    for(var i=0 ; i< totalCycles ; i++)
        {   
            e.emit('data',i);
            if(i==9)
                e.emit('ending');
        }
        //return i;
}

var r = getResource(10000000); // number of cycles requried

r.on('started', function() {
    console.log("I've started!");
});

r.on('data',function(value){
    console.log('received emitter value '+value);
})

r.on('ending',function(){
    console.log('loop ended..')
})