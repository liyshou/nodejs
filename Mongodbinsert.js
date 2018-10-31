var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://94.191.33.247:27017/test";

function insertData(db)
{
    var devices = db.collection('vip');
    var data = {"name":"node","age":22,"addr":"nb","addTime":new Date()};
    devices.insert(data,function(error, result){
        if(error)
        {
            console.log('Error:'+ error);
        }else{

            console.log(result.result.n);
        }
        db.close();
    });
}

MongoClient.connect(DB_URL, function(error, db){
    console.log('连接成功!');
    insertData(db);
});
