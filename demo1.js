var http=require("http");

http.createServer(function(req,res){
    var body="this is the main content of the body";
    var length=body.length;
    res.writeHead(200,{
        "Content-Type":"text/plain",
        "Content-Length":length
    });
    res.end(body)
}).listen(8082);
console.log("Server now is running on localhost:8082");