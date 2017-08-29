var os = require('os');

var toMb =  function(f)
{
    return (Math.round((f/1024/1024*100)/100))
}
console.log('Hostname '+os.hostname());
console.log('Last 15 mins load avg: '+os.loadavg()[2]); // This return an array. last 1 min load, 5 mins load and 15 mins load
console.log('Free memory : '+toMb(os.totalmem()));