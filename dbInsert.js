
function InsertData(client,arry) {

    console.log("连接成功。");
    const db = client.db("test");
    const pass = db.collection('custom');

   // var data = [{"name": "node", "age": 1}, {"name": "test1", "age": 55}];
    pass.insert(arry, function (err, result) {
        console.log(result);
        client.close();
    });
}


module.exports = InsertData;
