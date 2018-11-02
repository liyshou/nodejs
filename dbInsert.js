
function InsertData(client,arry)
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
      const db = client.db("test");
      const pass = db.collection('custom');
      var data=[{name:namevalue,age:agevalue}];
        console.log(data);
      pass.insert(data,function (err,result) {
          console.log(result);
          client.close();
      });
}


module.exports = InsertData;
