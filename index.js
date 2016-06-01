var express=require('express');
var api=express();

api.get('/', function(req,res,next){
	res.send("hello world");
});
console.log("server started on port 3001");
api.listen(3001);

module.exports=api;