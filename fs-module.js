var fs=require("fs");
/*
var str=fs.readFileSync('text.txt','utf-8');//reads the file synchronously
var str1=fs.readFile('text.txt','utf-8',function(err,data){ //reads file asynchronously
    if(err) throw err;
    else{
        console.log(data);
    }
});
console.log("file is read");
//console.log(str);
fs.writeFileSync('text2.txt',str);// write the file synchronously
fs.writeFile('text3.txt',str,function(err,data){ //write the file asynchronously
    if(err) throw err;
    else{
        console.log(data);
    }
});
console.log("write to text 3 completed");

*/
//fs.unlink('text3.txt');//deletes the file

//-----------------------------------------------------------------------directories

fs.mkdir('nodejs',function(){
    fs.writeFile("./nodejs/demo.txt","the content should present in file",function(err,data){
        if(err) throw err;
        else
            console.log(data);
    });
});  //creates directory asyn

//fs.mkdirSync('nodejs1');//creates directory synch

//fs.rmdir('nodejs');//deleted empty dir asynch

//fs.rmdirSync('nodejs1');//deletes empty dir synch