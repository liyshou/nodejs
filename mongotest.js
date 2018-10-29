

// 3.0 以上 高版本语法
var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
mongoClient.connect(DB_CONN_STR, function(err, client) {
    assert.equal(null, err);
    console.log("连接成功。");
// admin 为 数据库名称；
    const db = client.db("test");
// PASS 为 数据库里面的某一个集合；
    const pass = db.collection('custom');
    var data=[{"name":"node","age":1},{"name":"test1","age":55}];
    pass.insert(data,function (err,result) {

        assert.equal(err, null);
        console.log(result);
        db.close();
    });

});

module.exports = router;

