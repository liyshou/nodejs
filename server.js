var http= require('http');
var InsertData = require('./dbInsert');
var mongoose = require('mongodb').MongoClient;
DB_URL = 'mongodb://94.191.33.247:27017/test';

//数据库连接
mongoose.connect(DB_URL,function (err,client) {
    if(!err){
        console.log("连接成功。");
        http.createServer(function(req,res)
        {
            res.writeHead(200,{"Content-type":"text/blain; charset=utf-8"});
            req.on('data',function (data) {
               console.log("服务器接收到的数据:" +decodeURIComponent(data));
                var arry=decodeURIComponent(data).toString().split('&');
                //新增记录入库
                new InsertData(client,arry);
            });
            req.on('end',function () {
                console.log("");
            });
            res.write("漂亮，用户注册成功！！！");
            res.end();
            client.close()
        }).listen(8888);
    }
});



