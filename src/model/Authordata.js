const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/library");

mongoose.connect("mongodb+srv://userone:userone@ictakfiles.9muvg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.')) 
   


const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:{type:String,unique: true},
    country:String,
    genre:String,
    famousbooks:String,
    description:String,
    image:String
});

var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;