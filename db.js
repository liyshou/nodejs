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
                    global.age = doc.age;
                    global.id = doc._id;
                    global.name = doc.name;
                    console.log("id:"+global.id +"    age:" + global.age +"    name:"+ global.name);
                }
            }
            client.close();
        });
    });
}

module.exports = FindData;
