var namevalue;
var phonevalue;
var passwordvalue;
var data;
function InsertData(client,arry)
{
      console.log("连接成功。");
      if(!Array.isArray(arry)) {
          console.log("接收到的数据是分割的字符串");
          var value1;
          arry.forEach(function (v, i) {
              var value = v.toString().split('=');
              value.forEach(function (value1, j) {
                  if (i == 0 && j == 1) {
                      console.log("name:" + value1);
                      namevalue = value1;
                  }
                  else if (i == 1 && j == 1) {
                      console.log("phone:" + value1);
                      phonevalue = value1;
                  }
                  else if (i == 2 && j == 1) {
                      console.log("password:" + value1);
                      passwordvalue = value1;
                  }
              });
          });
          data= [{customername: namevalue, phone: Number(phonevalue),password:passwordvalue ,_id: 2}];
      }
      else{
          data = arry;
          console.log("接收到的数据是一个json 格式的数组");
      }
    const db = client.db("test");
    const pass = db.collection('register');
    console.log(data);
    pass.insertMany(data, function (err, result) {
        console.log(result);
        client.close();
    });
}
module.exports = InsertData;
