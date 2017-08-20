var express = require("express");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookAPI');
var bodyParser = require('body-parser');

bookRouter = require('./routes/bookRoutes.js')();
var Book = require('./models/bookModel'); // This is a mongoose schema. Can call  Book.find() Book.findById() Book.findByIdAndRemove() Book.findOne() Book.findOneAndUpdate()

//Associating various modules with this app
app.use('/api',bookRouter);
app.use(bodyParser.text); // Body parses is requred to parse the json object from http body and we do app.use to use it in this application
app.use(bodyParser.urlencoded({extended:true}));


// Setting app server to listen on port
app.listen(port,function(){
    console.log("Server is listening on the port "+port);
});

//Root API get call
app.get("/", function(req,res){
    console.log("request object = "+req);
    res.send("Welcome to your first javascript app!! . Its working")
});