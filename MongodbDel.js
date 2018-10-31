var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, client) {

    console.log("连接成功。");
    const db = client.db("test");
    const collection = db.collection('custom');

    //查询数据
    var whereStr = {"name":"test1"};
   collection.remove(whereStr,function (err,result) {
       if(err){
           console.log('Error:'+err);
       }
       else{
           console.log(result.result.n);
       }
       client.close();
   });
});
