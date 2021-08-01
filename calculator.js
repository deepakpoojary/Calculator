const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extention: true}));

app.listen(process.env.PORT || 3000, function(req,res){
  console.log("server is running on port 3000");
});


app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
})
app.post("/",function(req,res){
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var result = number1 + number2;
  res.send("the result is " + result);
});
