var http = require('http');
function requestOrder(order){
    console.log('order',order);
    res.
}
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);