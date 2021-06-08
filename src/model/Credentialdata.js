const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/library");



 mongoose.connect("mongodb+srv://userone:userone@ictakfiles.9muvg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.')) ;


const Schema=mongoose.Schema;
const CredentialSchema=new Schema({
    username:{type:String,unique: true},
    password:String,
    name:String,
    email:String,
    
    
});

var Credentialdata=mongoose.model('credentialdata',CredentialSchema);
module.exports=Credentialdata;