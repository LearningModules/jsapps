var express = require("express");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookAPI');
var bodyParser = require('body-parser');
var bookRouter=express.Router(); 
var Book = require('./models/bookModel'); // This is a mongoose schema. Can call  Book.find() Book.findById() Book.findByIdAndRemove() Book.findOne() Book.findOneAndUpdate()

//Associating various modules with this app
app.use('/api',bookRouter);
app.use(bodyParser.text); // Body parses is requred to parse the json object from http body and we do app.use to use it in this application
app.use(bodyParser.urlencoded({extended:true}))

//Router 1
bookRouter.route('/Books')
    //GET METHOD
    .get(function(req,res){
        //var query = req.query; // This will parse the request query parameter from GET url. avoiding it as any such query will hit DB
        // now we will enable query on certain query parameter only
        var query = {}; // create empty query
        if(req.query.genre){ //allow hook only for genre
            query.genre =  req.query.genre;
        }
        Book.find(query,function(err,books){ // Passes query filters here 
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            else
                res.json(books);
        });
    })
    //POST METHOD
    .post(function(req,res){
        console.log("Request body "+req.body)
        var book = new Book(req.body) // This will create a new instance of book in mongodb and also generates the _id
        console.log("Book to add "+book);
        //book.save(); // This will save the record in mongodb
        console.log(book);
        res.send(book).status(201);
    });


// Router 2     
bookRouter.route('/books/:bookId')
    .get(function(req,res){
        console.log("Book id "+req.params.bookId)
        Book.findById(req.params.bookId,function(err,book){ // Passes query filters here 
            console.log("Book retrieved "+book)
            if(err)
                res.status(500).send(err);
        
                res.json(book).status(200);
        });
    });





app.listen(port,function(){
    console.log("Server is listening on the port "+port);
});

function someProcessingLogic(data){
 console.log("called processing logic block - "+data);
}

//Root API get call
app.get("/", function(req,res){
    console.log("request object = "+req);
    res.send("Welcome to your first javascript app!! . Its working")
});