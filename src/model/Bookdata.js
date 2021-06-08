const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/library");
//"mongodb+srv://userone:<userone>@ictakfiles.9muvg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority"

mongoose.connect("mongodb+srv://userone:userone@ictakfiles.9muvg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.')) 



const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:{type:String,unique: true},
    author:String,
    genre:String,
    description:String,
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;
