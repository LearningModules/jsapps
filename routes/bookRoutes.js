var express = require('express');
var Book = require('../models/bookModel');
var routes = function(){ // declaring as function for testability
//Router 1
var bookRouter=express.Router(); 
bookRouter.route('/Books')
    .get(function(req,res){ //GET METHOD
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
    .post(function(req,res){ //POST METHOD
        console.log("Request body "+req.body)
        var book = new Book(req.body) // This will create a new instance of book in mongodb and also generates the _id
        console.log("Book to add "+book);
        //book.save(); // This will save the record in mongodb
        console.log(book);
        res.send(book).status(201);
    })
    
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
    return bookRouter;
};

module.exports=routes;
