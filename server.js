var express = require('express');
var data=require('./db');
var bodyParser     =        require("body-parser");
var app            =        express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//creating the server
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});


app.post('/signup',(req,res)=>{
	res.write('connected');  
	console.log(req.body);  
        
        var email=req.body.mail;
        var  name=req.body.name;
        var  p1=req.body.p1;
        var  p2=req.body.p2;
        console.log(email,name,p1,p2);
        if(p1==p2)
        {
        	        data.insert_query(email,name,p1,function(err,result,fields){
		            if(err) throw err;
		            else {
		                res.end('inserted success fully and closed connection');}
		        });
        }
        else
        {
        	res.end("password mismatch");
        }
})

app.get('/update',(req,res)=>{
	
}) 
app.use('/', express.static(__dirname + '/'));
