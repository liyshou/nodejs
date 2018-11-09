
var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DB_CONN_STR, function(err, client) {

    console.log("连接成功。");
    const db = client.db("test");
    const pass = db.collection('register');
    var data=[{"customername":"gjbjhnjk","phone":"4545151656458","password":"8755415"}];
    pass.insert(data,function (err,result) {
        console.log(result);
        client.close();
    });

});
