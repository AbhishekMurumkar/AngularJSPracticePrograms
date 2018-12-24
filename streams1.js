//readable streams //used when read files containing heavy data or big files, by chunk by chunk
var fs=require('fs');
var readableStream=fs.createReadStream('file.txt',)
