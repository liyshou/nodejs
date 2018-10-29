var http = require('http');
var util = require('util');
var querystring  = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>Node.js</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer(function (req,res) {
    var post ='';
    req.on('data',function (chunk) {
        post += chunk;
    });

    req.on('end',function () {

        post = querystring.parse(post);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        if(post.name && post.url) { // 输出提交的数据
            res.write("网站名：" + post.name);
            res.write("<br>");
            res.write("网站 URL：" + post.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);