var mongodb = require('mongodb');
var server = new mongodb.Server('94.191.33.247',27017,{auto_reconnect:true});
var db = new mongodb.Db('test',server,{safe:true});
db.open(function (err,db) {
    if(!err)
    {
        db.collection('custom',{safe:true},function (err,collection) {
            collection.find().toArray(function (err,docs) {
                console.log('find');
                console.log(docs);
            });
            collection.findOne(function (err,doc) {
                console.log('findOne');
                console.log(doc);
            });
        });
    }
});
