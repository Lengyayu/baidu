var baiduRank = require("./baidu-rank");

//var url1 = "http://www.diehl-metering.net/";
//var url2 = "http://diehl-metering.cn/";
//var url3 = "http://www.metering-cloud.com/";
var url = new Array();
url[0] = "http://www.diehl-metering.net/";
url[1] = "http://diehl-metering.cn/";
url[2] = "http://www.metering-cloud.com/";

var word = "代傲表计";
var start = 1;
var end = 6;

baiduRank(url[0], word, start, end).then(ret => console.log(ret));
/*for (var i = 0;i < url.length;i++)
{
    baiduRank(url[i], word, start, end).then(ret => console.log(ret));
}
var word2 = "代傲";
end2 = 50;
for (var i =0;i < url.length;i++) {
    baiduRank(url[i], word2, start, end2).then(ret => console.log(ret));
}*/

