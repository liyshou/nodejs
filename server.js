var http= require('http');
var finddata  =require('./db');
var mongoose = require('mongodb').MongoClient;
DB_URL = 'mongodb://94.191.33.247:27017/test';

//数据库连接
mongoose.connect(DB_URL,function (err,client) {
    if(!err){
        console.log("连接成功。");
        new finddata(client);
        console.log(global.test);
        http.createServer(function(req,res)
        {
            res.writeHead(200,{"Content-type":"text/blain; charset=utf-8"});
            res.write("身份证:"+global.id);
            res.write("\n姓名:"+global.name);
            res.write("\n年龄:"+global.age);
            res.end();
        }).listen(8888);
    }
     client.close();
});



