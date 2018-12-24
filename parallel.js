const cluster = require('cluster');
const http = require('http');
var request = require('request');
const { Worker } = require('worker_threads');
let lst;    // list will be populated from 0 to n
let index = -1; // index will be used to traverse list
let myWorker; // worker reference
let interval;

http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    console.log("created server at 8000");
}).listen(8000);
request('http://localhost:8000', function (error, response, body) {
    setTimeout(function () {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    },10000);
});

function requestTimer(){
// filling array with 100 items
    lst = Array(1e2).fill().map((v,i) => i);

    // initiating worker process
    initiateWorker();

    // traversing list in main method with specific interval
    interval = setInterval(function(){ processDataInMainThread(); }, 1000);
}

/*
if (cluster.isMaster) {

    // Keep track of http requests
    /!*let numReqs = 0;
    setInterval(() => {
        console.log(`numReqs = ${numReqs}`);
    }, 7000);

    // Count requests
    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }*!/

    // Start workers and listen for messages containing notifyRequest
    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

} else {
    // Worker processes have a http server.
    http.Server((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');

        // notify master about the request
        process.send({ cmd: 'notifyRequest' });
    }).listen(8000);
}
*/
