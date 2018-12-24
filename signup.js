var http=require('http');
http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type': 'text/html'});
    
    var url1=req.url;
    var fun_name=url1.split("?"); console.log(fun_name);

    if(fun_name[0]=="/insert")
    {
        var url2=fun_name[1].split('&');
        console.log(url2);
        var  id=url2[0].split("=")[1];
        var  name=url2[1].split("=")[1];
        console.log(id,name);

        data.insert_query(id,name,function(err,result,fields){
            if(err) throw err;
            else {
                res.end('inserted success fully and closed connection');}
        });
    }else
    {
    	res.end('error');
    }
});
