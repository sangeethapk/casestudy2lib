const express = require('express');
const updateauthorRouter = express.Router();
const Authordata = require('../model/Authordata');


updateauthorRouter.use(express.static('./public'));
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
updateauthorRouter.use(express.json());
updateauthorRouter.use(express.urlencoded({extended: true}));

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

    updateauthorRouter.get('/:author', function (req, res) {
        console.log("title value" + req.params.author);

        var name = req.params.author;
        console.log("Author"+name);

        Authordata.find({ "author": name })
            .then(function (authors) {
                console.log("-------------------------+Updated Author");

                console.log(authors);
                var author = authors[0];//find returns an array
                res.render("updateauthor", {
                    nav,
                    title: "Library",
                    author,
                    Home: "/index"

                });


            });
        


    });


    updateauthorRouter.post('/:author',upload.single('image'), (req, res) => {//here image is the name of <img> in the form

        if (!req.file) {
           
            console.log("No file received :"+ req.file);


        } else {
            console.log('file received');
            // const host = req.host;
            const filePath = req.file.originalname; //find path of image stored locally by multer    
                 


        var query = { "title": req.params.author };
        console.log(req.params.author);

                    const update = {
                    author: req.body.authorname,
                    country: req.body.country,
                    genre: req.body.genre,
                    description: req.body.description,
                    image: filePath
                };
                //var item=Bookdata.updateOne({"title":req.params.title},update);
                console.log("Update vlaue----" + update);
                Authordata.findOneAndUpdate(
                    { author: req.params.author },
                    update,
                    function (err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.redirect("/authors");
                            //Bookdata(result).save();
                        }
                    }
                );
                console.log("After update.....")
                }

            });

    


    // updateauthorRouter.post('/:author', function (req, res) {


    //     var query = { "title": req.params.author };
    //     console.log(req.params.author);

    //                 const update = {
    //                 author: req.body.authorname,
    //                 country: req.body.country,
    //                 genre: req.body.genre,
    //                 description: req.body.description,
    //                 image: req.body.image
    //             };
    //             //var item=Bookdata.updateOne({"title":req.params.title},update);
    //             console.log("Update vlaue----" + update);
    //             Authordata.findOneAndUpdate(
    //                 { author: req.params.author },
    //                 update,
    //                 function (err, result) {
    //                     if (err) {
    //                         res.send(err);
    //                     } else {
    //                         res.redirect("/authors");
    //                         //Bookdata(result).save();
    //                     }
    //                 }
    //             );
    //             console.log("After update.....")


    //         });



    
    return updateauthorRouter;

}
module.exports = router;