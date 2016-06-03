var url=require('url');
var urlObj=url.parse("http://luying:123@www.baidu.com:80/index?name=luying&age=10#top");
console.log(urlObj);
console.log(url.format(urlObj));