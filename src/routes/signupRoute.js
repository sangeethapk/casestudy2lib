const express = require('express');
const signupRouter = express.Router();
const Credentialdata = require('../model/Credentialdata');
signupRouter.use(express.static('./public'));

function router() {


    signupRouter.get('/', function (req, res) {
        res.render('signUp', { message: '' });
    });

    signupRouter.post('/', function (req, res) {
        console.log("post");
         
        //  console.log(credentials.has({username:req.body.userName,password:req.body.password}));
        Credentialdata.find({"username":req.params.username})
            .then(function (credential) {
                console.log("--------Credential-----"+credential);
                if (credential.length != 0) {
                    res.render('signUp', { message: 'Username already exist...' });
                }
                else {
                    var item =

                    {
                        name: req.body.fname,
                        email: req.body.email,
                        username: req.body.userName,
                        password: req.body.password


                    }

                    var user = Credentialdata(item);
                    user.save()
                        .then(() => {
                            console.log("redirect to login")
                            res.redirect("/index");

                        })
                        .catch(()=>{

                            res.render("signUp",{message:"User already exist"});
                        })


                }


            });

        
       
        });

    return signupRouter;

}
module.exports = router;