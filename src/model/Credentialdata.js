const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/library");

mongoose.connect("mongodb://localhost:27017/library")
.then (() => console.log ('MongoDB connected.')) 
.catch (err => console.error (err)) 


const Schema=mongoose.Schema;
const CredentialSchema=new Schema({
    username:{type:String,unique: true},
    password:String,
    name:String,
    email:String,
    
    
});

var Credentialdata=mongoose.model('credentialdata',CredentialSchema);
module.exports=Credentialdata;