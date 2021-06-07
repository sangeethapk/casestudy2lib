const express = require('express');
const Authordata = require('../model/Authordata');
const adminAuthorRouter = express.Router();

adminAuthorRouter.use(express.static('./public'));



//multer global declarations
var path = require('path');
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
adminAuthorRouter.use(express.json());
adminAuthorRouter.use(express.urlencoded({ extended: true }));


//for storing in external storage
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname ) //Appending extension
    }

});

var upload = multer({ storage: storage })

//end of multer declarations


function router(nav) {

    adminAuthorRouter.get('/', function (req, res) {

        res.render("addauthor", {
            nav,
            title: "Library",
            message: ""


        }
        );
    });


    adminAuthorRouter.post('/add',upload.single('image'), (req, res) => {//here image is the name of <img> in the form

        if (!req.file) {
           
            console.log("No file received :"+ req.file);


        } else {
            console.log('file received');
            // const host = req.host;
            const filePath = req.file.originalname; //find path of image stored locally by multer    
            var item =

            {
                author: req.body.authorname,
                country: req.body.country,
                genre: req.body.genre,
                famousbooks: req.body.famousbooks,
                description: req.body.description,
                image: filePath
            }


            var author = Authordata(item);


            author.save()
                .then(() => {
                    res.redirect("/authors");

                })
                .catch(() => {
                    console.log("Cannot Add");
                    res.render("addauthor", {
                        nav,
                        title: "Library",
                        message: "Cannot Add...Author already exist"

                    });

                });
        }
    });
    
    return adminAuthorRouter;


}


module.exports = router;