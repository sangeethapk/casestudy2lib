const express = require('express');
const deleteebookRouter = express.Router();
const Bookdata = require('../model/Bookdata');


deleteebookRouter.use(express.static('./public'));

var updatedetail = [];
function router(nav) {

    
    deleteebookRouter.get('/:title', function (req, res) {


        var query = { "title": req.params.title };
        console.log(req.params.title);

            //var item=Bookdata.updateOne({"title":req.params.title},update);
                console.log("Delete vlaue----" );
                Bookdata.findOneAndDelete(
                    { title: req.params.title },
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


            });



    
    return deleteebookRouter;

}
module.exports = router;