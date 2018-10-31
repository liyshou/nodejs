var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, client) {

    console.log("连接成功。");
    const db = client.db("test");
    const collection = db.collection('custom');

    //查询数据
    var whereStr = {"name":"shou"};
    var updateDat = {$set:{"age":18}};//如果不用set 则替换整条数据
    collection.update(whereStr,updateDat,function (err,result) {
        if(err){
            console.log('Error:'+error);
        }
        else{
            console.log(result);
        }
        client.close();
    });
});
