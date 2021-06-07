const express=require('express');
const authorRouter=express.Router();
const Authordata=require('../model/Authordata');

var authorsdetails=[];
function router(nav){

    authorRouter.get('/',function(req,res){
    
    Authordata.find()
    .then(function(authors){

        authorsdetails=authors;
        console.log(authors);
        res.render("authors",{
            nav,
            title:"Library",
            authors,
            Home:"/index",
            

    });
    

    });
});


authorRouter.get('/:id',function(req,res){

        const id=req.params.id;

        res.render("author",{
            nav,
            title:"Library",
            author:authorsdetails[id],
            Home:"/index"

        });

    });

    

    

   

    return authorRouter;

}


    module.exports=router;