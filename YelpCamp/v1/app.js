var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {  name: "Salmon Creek" , image : "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f77267ed09145c2_340.jpg" },
    {  name: "Pushkar" , image : "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732d72d1934bcd5f_340.jpg" },
    {  name: "Granite Hill" , image : "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732d72d1934bcd5f_340.jpg" },
    {  name: "Mountain Goat's Rest" , image : "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c732d72d1934bcd5f_340.jpg" }
];

app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("landing");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{data:campgrounds});
});

app.get("/campgrounds/new",function(req,res){
  res.render("new");
});

app.post("/campgrounds",function(req,res){
  // get data from and add to campgrounds array
  var name =req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image:image};
  campgrounds.push(newCampground);
  //redirect back tto campgrounds page
  res.redirect("/campgrounds");
});

app.listen("3000",process.env.IP,function(){
    console.log("YelpCamp Server has started!");
});