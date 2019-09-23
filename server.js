var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser'); 

var userSchema=require("./models/user");
var mongoose = require("mongoose");
    var Blog;
    var Category;
  
var db = mongoose.connect("mongodb://localhost:27017/angDB", function(err, response){  
   if(err){ console.log( err); }  
        else{ //console.log('Connected to ' + db, ' + ', response);
        console.log("connection established successfully")
    
    Blog = mongoose.model("Blogs",userSchema.Blog,"blogs");
    Category=mongoose.model("Categories",userSchema.Category,"categories");
    Blog.find({},(err,data)=>{
        if(err)console.log(err);
        else{
           
           // console.log(data);
           console.log("hi")
           
        }
    })
    
    }  
});  
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //// Website you wish to allow to connect   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  // methods to allowed  
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');// Request headers you wish to allow     
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
});  


app.get("/api/blog",(req,res)=>{
    Blog.find({},(err,data)=>{
        if(err)console.log(err);
        else{
            res.setHeader("content-type","application/json")
            
          //  console.log(data);
            res.send(JSON.stringify(data));
        }
    })
    
})

app.get("/api/featured_blogs",(req,res)=>{
    Blog.find({},(err,data)=>{
        if(err)console.log(err);
        else{
            console.log("featured-blog")
            res.setHeader("content-type","application/json");
            res.send(JSON.stringify(data));
        }
    })
})


app.get("/api/recent_blogs/",(req,res)=>{
    Blog.find({},(err,data)=>{
if(err)console.log(err);
else{
    console.log("recent-blog")
    res.setHeader("content-type","application/json");
    res.send(JSON.stringify(data));
}
    })
})
 

app.get("/api/blog/:ids",(req,res)=>{
    console.log("Hi");
    var id=req.params.ids;// to access the parameters
    console.log(id);
    Blog.find({id:id},(err,data)=>{
        if(err)console.log(err);
        else{
            console.log(data);
            res.setHeader("content-type","applicaition/json");
            res.send(JSON.stringify(data));
        }
    })

})
app.listen(3000,()=>{
    console.log("server on");
})