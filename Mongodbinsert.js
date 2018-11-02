
var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, client) {

    console.log("连接成功。");
    const db = client.db("test");
    const pass = db.collection('custom');
    var data=[{ name: 'shouman', age: 56 }];
    pass.insert(data,function (err,result) {
        console.log(result);
        client.close();
    });

});
