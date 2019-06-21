var express = require("express");
var app = express();

// "/"=>"Hi There!!"
app.get("/",function(req, res){
   res.send("Hi there!!");
});

// "/bye"=> "Bye!"
app.get("/bye",function(req,res){
  res.send("Goodbye!");
});

//"/dog"=>"MEOW!"
app.get("/dog",function(req,res){
 res.send("MEOW!");
});

//route param way to create a pattern 
app.get("/r/:something",function(req,res){
 res.send("you created a pattern");
});

app.get("/r/:something/comments/:id/:title",function(req,res){
 res.send("new pattern");
});

// When there is a route that we didn't create
app.get("*",function(req,res){
 res.send("There is no such page!");
})

//Tell Express to listen for requests (start server)
app.listen("34395",process.env.IP, function(){
    console.log("server has started");
});