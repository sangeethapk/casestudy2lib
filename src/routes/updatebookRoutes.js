const express = require('express');
const updatebookRouter = express.Router();
const Bookdata = require('../model/Bookdata');


updatebookRouter.use(express.static('./public'));



const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
updatebookRouter.use(express.json());
updatebookRouter.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
 
});

var upload = multer({ storage: storage })





var updatedetail = [];
function router(nav) {

    updatebookRouter.get('/:title', function (req, res) {
       // console.log("title value" + req.params.id);

        var titlename = req.params.title;
        console.log(titlename);

        Bookdata.find({ "title": titlename })
            .then(function (books) {
                console.log("-------------------------+Updated book");

                console.log(books);
                var book = books[0];
                res.render("updatebook", {
                    nav,
                    title: "Library",
                    book,
                    Home: "/index"

                });


            });
        //     .then(function(books){

        //        var book=books[0];
        //         console.log(books[0]);
        //         res.render("updatebook",{
        //             nav,
        //             title:"Library",
        //             book,
        //             Home:"/index"

        //     });



        // })



    });


    updatebookRouter.post('/:title', upload.single('image'), (req, res) => {



        if (!req.file) {
            console.log("No file received");
            
        
          } else {
            console.log('file received');
           // const host = req.host;
            const filePath = req.file.originalname;    
            
    
             var query = { "title": req.params.title };
                 console.log(req.params.title);
         
                             const update = {
                             title: req.body.title,
                             author: req.body.author,
                             genre: req.body.genre,
                             description: req.body.description,
                             image: filePath
                         };
                         //var item=Bookdata.updateOne({"title":req.params.title},update);
                         console.log("Update vlaue----" + update);
                         Bookdata.findOneAndUpdate(
                             { title: req.params.title },
                             update,
                             function (err, result) {
                                 if (err) {
                                     res.send(err);
                                 } else {
                                     res.redirect("/books");
                                     //Bookdata(result).save();
                                 }
                             }
                         );
                         console.log("After update.....")
    
     
    
            }
    
        });
    


    // updatebookRouter.post('/:title', function (req, res) {


    //     var query = { "title": req.params.title };
    //     console.log(req.params.title);

    //                 const update = {
    //                 title: req.body.title,
    //                 author: req.body.author,
    //                 genre: req.body.genre,
    //                 description: req.body.description,
    //                 image: req.body.image
    //             };
    //             //var item=Bookdata.updateOne({"title":req.params.title},update);
    //             console.log("Update vlaue----" + update);
    //             Bookdata.findOneAndUpdate(
    //                 { title: req.params.title },
    //                 update,
    //                 function (err, result) {
    //                     if (err) {
    //                         res.send(err);
    //                     } else {
    //                         res.redirect("/books");
    //                         //Bookdata(result).save();
    //                     }
    //                 }
    //             );
    //             console.log("After update.....")


    //         });



    
    return updatebookRouter;

}
module.exports = router;