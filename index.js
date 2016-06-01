var express=require('express');
var api=express();
var DEFAULT_PORT = 3001;
api.get('/', function(req,res,next){
	res.send("hello world");
});

api.get('/contacts',function(req,res,next){
	res.send([]);

})

api.get('/contacts/:name',function(req,res,next){
	res.send();

})
api.post('/contacts/:name',function(req,res,next){
	if(req.params.name=== 'exists'){
		return res.status(403).send();	
		}
	res.send();
})
api.get('/contacts/:name',function(req,res,next){
	res.send();

})
api.put('/contacts/:name/:new',function(req,res,next){
	res.send();

})
api.delete('/contacts/:name',function(req,res,next){
	res.send();
})
var port=process.env.PORT || DEFAULT_PORT;
console.log("server started on port "+port);
api.listen(port);

module.exports=api;