var http=require('http');
http.createServer(function(req,res){
	res.setHeader('Content-Type','text/html');
	console.log(res.getHeader('Content-Type'));
	res.removeHeader('Content-Type');
	console.log(res.getHeader('Content-Type'));
	console.log(res.headersSent);
	res.sentDate=false;//是否发日期
	res.statusCode=400;
	res.write('hello');
	console.log(res.headersSent);
	res.end('world');
}).listen(8081,function(){
	console.log("start");
});