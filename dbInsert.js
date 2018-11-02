
function InsertData(client,arry) {

    console.log("连接成功。");
    const db = client.db("test");
    const pass = db.collection('custom');
    var dataarr = [];
      arry.forEach(function (v,i) {
         console.log(v);
         dataarr[i] = v;

     });

    pass.insert(dataarr, function (err, result) {
        console.log(result);
        client.close();
    });
}


module.exports = InsertData;
