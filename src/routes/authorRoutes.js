const express=require('express');
const authorRouter=express.Router();
const Authordata=require('../model/Authordata');

var authorsdetails=[];
function router(nav){
    var nav1=nav;

    authorRouter.get('/',function(req,res){
    
    Authordata.find()
    .then(function(authors){

        authorsdetails=authors;
        console.log(authors);
        res.render("authors",{
            nav1,
            title:"Library",
            authors,
            Home:"/index1",
            

    });
    

    });
});


authorRouter.get('/:id',function(req,res){

        const id=req.params.id;

        res.render("author",{
            nav1,
            title:"Library",
            author:authorsdetails[id],
            Home:"/index1"

        });

    });

    

    

   

    return authorRouter;

}


    module.exports=router;