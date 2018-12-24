var http=require('http');
var data=require('./db');
var fs=require('fs');
var body='';

var server=http.createServer(function(req,res){
	console.log(req.url);
	req.on('data',function(data){body+=data;});
	req.on(('end'),function(){
	console.log("body="+body);
	var url2=body.split('&');

		if(req.url=='/signup')
		{	       	
	       	var email=url2[0].split('=')[1]; 
	       	var name=url2[1].split('=')[1];
	       	var p1=url2[2].split('=')[1];
	       	var p2=url2[3].split('=')[1];

	       	console.log(email,name,p1,p2);

	       	if(p1==p2)
	       	{
		        data.insert_query(email,name,p1,function(err,result,fields){
		            if(err){
		            	res.end(err);
		            }
		            else {
		                res.end('inserted success fully and closed connection');}
		        });
	       	}
	       	else
	       	{
				res.end('password mismatch');       		
	       	}
		}
		else if(req.url=='update-password')
		{
			var email=url2[0].split('=')[1];
			var oldpass=url2[1].split('=')[1];
			var newpass=url2[2].split('=')[1];
			var conpas=url2[3].split('=')[1];
			console.log(email,oldpass,newpass,conpas);
			if(newpass==conpas)
			{
				data.update_password(email,oldpass,newpass,function(err,result,fields){
					if(err){res.end(err);}
					else
					{
						res.end('updated-password and closed connection');
					}
				});
			}
			else
			{
				res.end('password mismatch');
			}
		}
		else if(req.url=='/update-name')
		{
			var email=url2[0].split('=')[1];
			var name=url2[1].split('=')[1];
			console.log(email,name);
			if(newpass==conpas)
			{
				data.update_name(email,name,function(err,result,fields){
					if(err){res.end(err);}
					else
					{
						res.end('updated-name and closed connection');
					}
				});
			}
			else
			{
				res.end('password mismatch');
			}
		}
		else
		{
			res.end('invalid page');
		}
	});

}).listen(8082);