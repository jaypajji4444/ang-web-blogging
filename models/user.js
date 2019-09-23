var mongoose = require("mongoose");
var Schema = mongoose.Schema;  
 
var UsersSchema = new Schema({      
id: { type: Number},
title:{type:String},
short_desc:{type:String},
author:{type:String},
image:{type:String},
created_at:{type:Date}       
  
},{collection:"blogs"});  
  
 var Category=new Schema({
     id:{type:Number},name:{type:String}
 })
 


module.exports={Blog:UsersSchema,Category:Category};