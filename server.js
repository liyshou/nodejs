var http= require('http');

var httpvale = "shoushouman";
http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-type":"text/blain"});
    res.write(httpvale);
    res.end();
}).listen(8888);