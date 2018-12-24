var api_key = 'key-04a74acf7081099e761485a6a3c8a7dc';
var Domain = 'multipliersolutions.co.in';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: Domain});
var http=require("http");
var db=require('./db');

var data = {
    from: 'Maria Service<dev@multipliersolutions.com>',
    to: 'abhishek@multipliersolutions.in',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
};
var n=0;
http.createServer(function(req, res) {
  try{
      const timer=setTimeout(function(){
          res.end("time out exception");
      },3000);

      mailgun.messages().send(data,function(err,data){
        if(err){
            res.write(err.toString());
            res.end();
        }
        else{
            clearTimeout(timer);
            n++;
            var s="sent sms-"+n;
            db.select_query(function (err,result,fields) {
                res.write("result="+result.toString());
                res.end("success "+s);
            });
        }
    });
  }catch (e) {
    clearTimeout(timer);
      res.end(e);
  }
}).listen(8082);
/*
    var body = "";
    setTimeout(mailgun.messages().send(data, function (err, data) {
        if (err) throw err;
        else {
            body = data;
            res.end(body);
        }
    }), 3000)
        .then(throwError)
        .catch(error => {
        res.end(error);
    });
});
*/
        /*
var time;
try{
 mailgun.messages().send(data,function(err,body){
     if(err) throw err;
     else {
         res.end("success" + body);
         }
     setTimeout(function (err) {
             throw new Error("Time out Exception");
         }, 200);
     }
 });
}catch(err)
    {
        res.end(err);
    }
    finally {
    clearTimeout();
}
}).listen(8000);*/
