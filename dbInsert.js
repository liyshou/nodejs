
function InsertData(arry)
{
      console.log("连接成功。");
    var value1;
    var namevalue;
    var agevalue;
      arry.forEach(function (v,i)
      {
        var value= v.toString().split('=');

        if(i ==0)
        {
            value.forEach(function (value1,j)
            {
                 if(j ==1){
                    console.log("name:" + value1);
                    namevalue  = value1;
                }
            });
        }
         else if(i ==1)
          {
              value.forEach(function (value1,j)
              {
                  if(j ==1){
                      console.log("age:" + value1);
                      agevalue = value1;
                  }
              });
          }
      });
      console.log("获取到的数据：name["+namevalue+"]  "+"age["+agevalue +"]");
    var DB_CONN_STR = 'mongodb://94.191.33.247:27017/test';
    const mongoClient = require('mongodb').MongoClient;
    mongoClient.connect(DB_CONN_STR, function(err, client) {
        const db = client.db("test");
        const pass = db.collection('custom');
        var data = [{name: 'shouman', age: 56}];

        console.log(data);
        pass.insertMany(data, function (err, result) {
            console.log(result);
            client.close();
        });
    });
}


module.exports = InsertData;
