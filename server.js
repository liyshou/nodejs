var http= require('http');
var fs = require('fs');
var finddata  =require('./db');
var InsertData = require('./dbInsert');
var mongoose = require('mongodb').MongoClient;
DB_URL = 'mongodb://94.191.33.247:27017/test';

//数据库连接
mongoose.connect(DB_URL,function (err,client) {
    if(!err){
        console.log("连接成功。");
        new finddata(client);
        var arry;
        http.createServer(function(req,res)
        {
            res.writeHead(200,{"Content-type":"text/blain; charset=utf-8"});
            res.write("身份证:"+global.id);
            res.write("\n姓名:"+global.name);
            res.write("\n年龄:"+global.age);

            req.on('data',function (data) {
               console.log("服务器接收到的数据:" +decodeURIComponent(data));
                arry=decodeURIComponent(data).toString().split('&');
            });
            req.on('end',function () {
                console.log("客户端请求数据全部接收完毕")
            });
            //新增记录入库
            new InsertData(client,arry);
            res.end();
        }).listen(8888);
    }
     client.close();
});



