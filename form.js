var http=require('http');
var server=http.createServer(function (req,res) {
    if(req.method=='post')
    {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else
    {
      res.end('<!DOCTYPE html>\n' +
          '<html>\n' +
          '<body>\n' +
          '<form action="http://localhost:8082/login" method="get">\n' +
          '    <table>\n' +
          '        <tr><th>Enter Full Name:</th><td><input type="text" name="\'userfullname"required="required"/></td></tr>\n' +
          '        <tr><th>Enter Password:</th><td><input type="password" name="\'userpassword"required="required"/></td></tr>\n' +
          '        <tr><th>Confirm Password:</th><td><input type="text" name="confirmpassword"required="required"/></td></tr>\n' +
          '        <tr><input type="submit" value="Sign Up"></tr>\n' +
          '    </table>\n' +
          '</form>\n' +
          '</body>\n' +
          '</html>')  ;
    }
}).listen(8082);