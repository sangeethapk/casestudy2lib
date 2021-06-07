const express=require('express');
const bookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
bookRouter.use(express.static('./public'));

var booksdetails=[];
function router(nav){
   

bookRouter.get('/',function(req,res){

    
    
    Bookdata.find()
    .then(function(books){
        console.log("-------------------------"+books);
        booksdetails=books;
        console.log(books);
        res.render("books",{
            nav,
            title:"Library",
            books,
            Home:"/index"

    });
    

    });
});


bookRouter.get('/:id',function(req,res){

        const id=req.params.id;

        res.render("book",{
            nav,
            title:"Library",
            book:booksdetails[id],
            Home:"/index"

        });

    });

      

    return bookRouter;

}


    module.exports=router;