const express = require('express');
const booksRouter = express.Router();       //allows us to create a router handler

function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "harry.jpg"
        },
        {
            title: 'Paathumayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: "basheer.jpg"
        }
    ];
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        // const id = req.params.id;
        res.render("book",
        {
            nav,
            title:'Library',
            book: books[req.params.id]
        });
    });

    return booksRouter;

}


module.exports = router;