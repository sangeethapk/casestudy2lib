// const express=require('express');
// const loginRouter=express.Router();
// const Credentialdata = require('../model/Credentialdata');
// loginRouter.use(express.static('./public'));

// loginRouter.use(express.urlencoded({extended:false}));

// function router(){
//     console.log("loginrouter");
//     loginRouter.get('/', function(req, res){
//         console.log("inside get");
//              res.render('login',{ message: ' ' });
              
//      });
 
//     loginRouter.post('/', function(req, res){
//           console.log("login entry");
     
       
//          Credentialdata.find({"username":req.body.userName})
//             .then(function (credential) {
//                 console.log("--------Credential-----"+credential);
//                 if (credential.length != 0) {

//                     if(credential[0].username==req.body.userName&&credential[0].password==req.body.password){
//                         if(credential[0].username==="admin"){
//                             var nav = [

//                                 { link: '/books', name: 'Books' },
//                                 { link: '/authors', name: 'Authors' },
//                                 { link: '/addbooks', name: 'Add Books' },
//                                 { link: '/addauthor', name: 'Add Author'},
//                                 {link:'/listbookforupdate',name:'Update Book'},
//                                 {link:'/listauthorsforupdate',name:'Update Author'},
//                                 { link: '/', name: 'Log Out' }
//                             ]; 
                            
                            
                            
//                             res.render('index', { 
//                                 nav,
//                                 title: "Library",
//                                 img: "admin.png"
//                          });
//                         }
//                         else{

//                             var nav = [

//                                 { link: '/books', name: 'Books' },
//                                 { link: '/authors', name: 'Authors' },
                               
//                                 { link: '/', name: 'Log Out' }
//                             ]; 
//                             res.render('index', { nav,
//                                 title: "Library",
//                                 img: "library.png"
//                          });
                            

//                         }
//                     }
//                 }
//                 else {
//                     res.render('login', { message: 'Username doesnot exist...' });
//                 }
         
            
            
         
      
//     });
// });
    
     
//       return loginRouter;    
 
// }
//     module.exports=router;