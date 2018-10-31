//修改上述 db.js


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
                    exports.customerage = doc.age;
                }
            }
            client.close();
        });
    });
}

module.exports = FindData;
