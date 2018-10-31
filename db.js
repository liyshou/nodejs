//修改上述 db.js
var mongoose = require('mongodb').MongoClient;
    DB_URL = 'mongodb://94.191.33.247:27017/test';

/**
 * 连接
 */
mongoose.connect(DB_URL,function (err,clien) {
    if(!err){
        console.log("连接成功。");
    }

});

mongoose.disconnect(DB_URL,function (err,clit) {
    if(!err)
    {
        console.log("连接断开");
    }

})
module.exports = mongoose;
