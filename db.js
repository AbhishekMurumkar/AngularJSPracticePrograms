var mysql = require('mysql');
var connections  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'first'
});


//select query
exports.select_query = function (callback) {
    connections.getConnection(function(err,connection){
        if(err) throw err;
        var sql = "select * from demo";
        connection.query(sql, function (err, result, fields) {
            connection.release();
            if (err) throw err;
            callback(err, result, fields);
        });
    });
};

//insert function
    exports.insert_query = function (person_mail,person_name,person_pass,callback ) {
        connections.getConnection(function (err,connection) {
            if(err) throw err;
                console.log("Connected!");
                var sql = "insert into demo2 values('" + person_mail + "',\'" + person_name + "\','"+person_pass+"');";
                connection.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    console.log("inserted successfully");
                    connection.release();
                    callback(err,result,fields);
                });
            });
    };

    // update query
exports.update_password=function(person_email,person_password_old,person_password_new,callback){
    connections.getConnection(function (err,connection) {
        if(err) throw  err;
            console.log("connected");
            var sql="update demo2 set password='"+person_password_new+"' where email='"+person_email+"';";
            connection.query(sql,function(err,result,fields){
                if(err) throw err;
                console.log("updated successfully");
                connection.release();
                callback(err,result,fields);
            });
        });
};

exports.update_name=function(person_email,person_name,callback){
    connections.getConnection(function (err,connection) {
        if(err) throw  err;
            console.log("connected");
            var sql="update demo2 set name='"+person_name+"' where email='"+person_email+"';";
            connection.query(sql,function(err,result,fields){
                if(err) throw err;
                console.log("updated successfully");
                connection.release();
                callback(err,result,fields);
            });
        });
};
