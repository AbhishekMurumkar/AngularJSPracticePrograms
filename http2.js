var http = require('http');
var data=require("./db");
var body="";
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
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
                data.endConnection();
                res.end('inserted success fully and closed connection');}
        });
    }
    else if(fun_name[0]=="/update")
    {
        res.write("success");
        var url2=fun_name[1].split('&');
        console.log(url2);
        var  id=url2[0].split("=")[1];
        var  name=url2[1].split("=")[1];
        console.log(id,name);

        data.update_query(id,name,function(err,result,fields){
            if(err) throw err;
            else {
                data.endConnection();
                res.end('updated success fully and closed connection');}
        });
    }
    else if(fun_name[0]=="/select") {
        data.select_query(function (err, result, fields) {
            if (err) throw err;
            //console.log("result="+result);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i].id + "  " + result[i].user_name);
                body = body + "<br> id=" + result[i].id + " and name=" + result[i].user_name;
            }
            console.log("body=" + body);
            res.end(body);
        });
    }
    else
    {
        res.end("<br>invalid option");
    }
    console.log("end body"+body);
}).listen(8082);