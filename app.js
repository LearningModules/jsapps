var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bookRouter=express.Router();
app.use('/api',bookRouter);
bookRouter.route('/books')
    .get(function(req,res){
        var response= {"message":"this is message from API"};
        feedData(req);
        res.json(response);
    })
    .post(function(req,res){
        res.send("Received post data")
    });

app.listen(port,function(){
    console.log("Server is listening on the port "+port);
});

function feedData(data){
 console.log("called function"+data);
}

//Root API get call
app.get("/", function(req,res){
    console.log("request object = "+req);
    res.send("Welcome to your first javascript app!! . Its working")
});