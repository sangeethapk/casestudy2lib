const express=require('express');
const listubookupdateRouter=express.Router();
const Bookdata=require('../model/Bookdata');
listubookupdateRouter.use(express.static('./public'));

var booksdetails=[];
function router(nav){
   

    listubookupdateRouter.get('/',function(req,res){

        
    Bookdata.find()
    .then(function(books){
        console.log("-------------------------"+books);
        booksdetails=books;
        console.log(books);
        res.render("listbookforupdate",{
            nav,
            title:"Library",
            books,
            Home:"/index1"

    });
    

    });
});


listubookupdateRouter.get('/:id',function(req,res){

        const id=req.params.id;

        res.render("book",{
            nav,
            title:"Library",
            book:booksdetails[id],
            Home:"/index1"

        });

    });

      

    return listubookupdateRouter;

}


    module.exports=router;