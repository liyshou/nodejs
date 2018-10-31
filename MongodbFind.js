
var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, client) {
    if(!err)
    {
        console.log("连接成功。");
        FindData(client);
    }
});

function FindData(client) {
    const db = client.db("test");
    const collection = db.collection('custom');

    //查询数据
    var whereStr = {"name":"shou"};
    collection.find(whereStr,function (error,cursor) {
        cursor.each(function (error ,doc) {
            if(doc){
                if(doc.age){
                    console.log("age:" + doc.age);
                }
            }
            client.close();
        });
    });
}
