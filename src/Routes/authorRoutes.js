const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            name: 'J K Rowling',
            novels: 'Harry Potter, fantastic Beasts etc..',
            img: "/jkrowling.jpg"
        },
        {
            name: 'Arthur Conan Doyle',
            novels: 'Sherlock Holmes, The Adventure of the Final Problem etc..',
            img: "/conandoyle.jpg"
        },
        {
            name: 'Stephen King',
            novels: 'The Green Mile, The Stand etc..',
            img: "/stephen.jpg"
        }
    ];

    authorsRouter.get('/',function(req,res, next){
        res.render("authors",
            {
                nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/login",name:"Login"},{link:"/signup",name:"Signup"}],
                title:"Authors",
                authors
        });
    });

    authorsRouter.get('/:id',function(req,res, next){
        const id = req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;
}

module.exports = router;