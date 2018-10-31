//存储过程


var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, db) {

    console.log("连接成功。");
    db.eval("get_custom_count()",function(error, result){
        if (error) {
            console.log(error);
        }else{
            console.log("count:"+result);
        }
        db.close();
    });
});
