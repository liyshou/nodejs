    /***
    * 去掉字符串中的特殊字符
    */
    var excludeSpecial = function(s) {
        // 去掉转义字符
        s = s.replace("'", '');
        s = s.replace("'", '');

        return s;
    };
/*
    function main()
    {
        var s = "He is called 'Johnny'";
        console.log(s);
        console.log(excludeSpecial(s));
        console.log(s);
    };*/
    module.exports = excludeSpecial;
