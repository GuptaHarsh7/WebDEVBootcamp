var express = require("express");
var app = express();

// "/"=>"Hi,there"
app.get("/",function(req,res){
 res.send("Hi there, welcome to my assignment");
});

//"/speak/:animal"=>animal says voice
app.get("/speak/:animal",function(req,res){
 var animal = req.params.animal;
 var voices ={
     "cow":"Moo",
     "pig":"Oink",
     "dog":"Woof Woof"
 };
 res.send("The "+animal+" says "+voices[animal]);
});

//"/repeat/:word/:no"=>repeat word equal to no
app.get("/repeat/:word/:no",function(req,res){
 var message=req.params.word;
 var times=Number(req.params.no);
 var result ="";
 for(var i=0;i<times;i++){
        result+=message;
     }
     res.send(result);
}
);

//"*"
app.get("*",function(req,res){
 res.send("Sorry,page not found...What are you doing with your life?");
});

//server start
app.listen("34395",process.env.IP, function(){
    console.log("server has started");
});