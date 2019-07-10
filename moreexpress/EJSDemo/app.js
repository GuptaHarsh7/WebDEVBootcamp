var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingVar : thing});
});

app.get("/posts",function(req,res){
  var posts =[
    {title:"post 1",author:"Suzie"},
    {title:"My Adorable pet",author:"Shin"},
    {title:"Can you believe this!! ",author:"Taro"}
  ];
  res.render("posts",{posts:posts});
});

app.get("*",function(req,res){
  res.send("NO SUCH PAGE");
});

app.listen("3000",process.env.IP,function(){
    console.log("Server is listening");
});