/*exports.world = function () {
    console.log('hello world');
}*/
module.exports={};
//耻辱的使用了全局变量
global.varA = "abc";
function hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;//设置值
    }

    this.sayHello = function () {
        console.log('hello' +name);
    }

}
module.exports = hello;
