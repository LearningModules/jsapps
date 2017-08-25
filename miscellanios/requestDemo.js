var request = require('request');

request('http://www.google.co.in',function(err,response,body){
    if (err)
        console.log("Error Occurred : "+err);
    else
        console.log("Response headers : "+response.headers);
        console.log("Response body  "+body);
})