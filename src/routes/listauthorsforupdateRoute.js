const express=require('express');
const listuauthorupdateRouter=express.Router();
const Authordata=require('../model/Authordata');
listuauthorupdateRouter.use(express.static('./public'));

var authordetails=[];
function router(nav){
   

    listuauthorupdateRouter.get('/',function(req,res){

    
    
        Authordata.find()
    .then(function(authors){
        console.log("-------------------------"+authors);
        authordetails=authors;
        console.log(authors);
        res.render("listauthorsforupdate",{
            nav,
            title:"Library",
            authors,
            Home:"/index1"

    });
    

    });
});


listuauthorupdateRouter.get('/:id',function(req,res){

        const id=req.params.id;

        res.render("author",{
            nav,
            title:"Library",
            author:authordetails[id],
            Home:"/index1"

        });

    });

      

    return listuauthorupdateRouter;

}


    module.exports=router;