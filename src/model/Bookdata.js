const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/library");

mongoose.connect("mongodb://localhost:27017/library").then (() => console.log ('MongoDB connected.')) 
.catch (err => console.error (err)) 


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
