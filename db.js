//修改上述 db.js
var mongoose = require('mongodb').MongoClient;
    DB_URL = 'mongodb://94.191.33.247:27017/test';

/**
 * 连接
 */
mongoose.connect(DB_URL,function (err,db) {
    if(!err){
        console.log("连接成功。");
    }
   // db.close();
});


module.exports = mongoose;
