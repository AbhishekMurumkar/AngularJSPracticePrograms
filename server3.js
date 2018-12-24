var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
	console.log("req =");
	var body=''+JSON.parse(req);
	console.log(body);
	fs.writeFile('text2.txt',req,function(err,data){
		if(err) throw err;
		else
		{
			res.end();
		}
	});
}).listen(8082);