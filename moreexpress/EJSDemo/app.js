var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("Welcome to home page!");
});

app.listen("3000",process.env.IP,function(){
    console.log("Server is listening");
})
