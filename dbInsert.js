var namevalue;
var phonevalue;
var passwordvalue;
function InsertData(client,arry)
{
      console.log("连接成功。");
    var value1;
      arry.forEach(function (v,i)
      {
        var value= v.toString().split('=');
        value.forEach(function (value1,j)
        {
             if(i==0 &&j ==1)
             {
                console.log("name:" + value1);
                namevalue  = value1;
            }
            else if(i==1 &&j==1)
             {
                 console.log("phone:" + value1);
                 phonevalue  = value1;
             }
             else if(i==2 &&j==1)
             {
                 console.log("password:" + value1);
                 passwordvalue  = value1;
             }
        });
      });
      //console.log("获取到的数据：name["+namevalue+"]  "+"age["+agevalue +"]");
  //  var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
   // const mongoClient = require('mongodb').MongoClient;
  //  mongoClient.connect(DB_CONN_STR, function(err, client) {
        const db = client.db("test");
        const pass = db.collection('register');
        var data = [{name: namevalue, phone: Number(phonevalue),password:passwordvalue ,_id: 2}];

        console.log(data);
        pass.insertMany(data, function (err, result) {
            console.log(result);
            client.close();
        });
  //  });
}


module.exports = InsertData;
