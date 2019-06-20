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
//Tell Express to listen for requests (start server)
app.listen("34395",process.env.IP, function(){
    console.log("server has started");
});