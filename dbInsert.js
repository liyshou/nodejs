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
    const db = client.db("test");
    const pass = db.collection('register');
    var data = [{customername: namevalue, phone: Number(phonevalue),password:passwordvalue ,_id: 2}];

    console.log(data);
    pass.insertMany(data, function (err, result) {
        console.log(result);
        client.close();
    });
}
module.exports = InsertData;
