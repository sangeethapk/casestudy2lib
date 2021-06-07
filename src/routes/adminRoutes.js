const express=require('express');
const Bookdata = require('../model/Bookdata');
const adminRouter=express.Router();
var path = require('path')


adminRouter.use(express.static('./public'));
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
adminRouter.use(express.json());
adminRouter.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
 
});

var upload = multer({ storage: storage })

function router(nav){

adminRouter.get('/',function(req,res){
    
    res.render("addbooks",{
        nav,
        title:"Library",
        message:''
       
       

    }
    );
});


adminRouter.post('/add',upload.single('image'), (req, res) => {



    if (!req.file) {
        console.log("No file received");
        
    
      } else {
        console.log('file received');
       // const host = req.host;
        const filePath = req.file.originalname;    
        var item=

        {
                 title:req.body.title,
                 author:req.body.author,
                 genre:req.body.genre,
                 description:req.body.description,
                 image:filePath

         }

     var book=Bookdata(item);
     book.save()
     .then(() => {
         res.redirect("/books");
         
     })
     .catch((err) => {
         console.log("Cannot Add "+err);
          res.render('addbooks',{ 
             nav,
              title:"Library",
            message :"Cannot add... Book already exist"
          });

         
     })
      }
      

 



    });


   return adminRouter;

}


    module.exports=router;