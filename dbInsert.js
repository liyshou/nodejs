
function InsertData(client,arry)
{
      console.log("连接成功。");
      const db = client.db("test");
      const pass = db.collection('custom');
      arry.forEach(function (v,i)
      {
         console.log(v);
        var value= v.toString().split('=');
        var nametmp ;
        var agetmp;
        var value1;
        value.forEach(function (value1,j)
        {
            if(j == 0) {
                nametmp = value1;
                console.log("name:" + nametmp);
            }
            else if(j ==1){
                agetmp = value1;
                console.log("age:" + agetmp);
            }


        });
        pass.insertOne({
            name:value1,
            age:value1
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
