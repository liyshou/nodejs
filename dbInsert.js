
function InsertData(client,arry)
{
      console.log("连接成功。");
      const db = client.db("test");
      const pass = db.collection('custom');
      arry.forEach(function (v,i)
      {
        var value= v.toString().split('=');
        var value1;
        var namevalue;
        var agevalue;
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
          if(i ==1)
          {
              value.forEach(function (value1,j)
              {
                  if(j ==1){
                      console.log("age:" + value1);
                      agevalue = value1;
                  }
              });
          }

        pass.insertOne({
            name:namevalue,
            age:agevalue
        },function (err,result) {
            if(!err)
            {
                console.log("新增成功。");
                console.log(result);
            }
            else
                console.log(result);
        });
        client.close();
      });
}


module.exports = InsertData;
