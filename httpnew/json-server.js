var http=require('http');
http.createServer(function(req,res){
	req.setEncoding('utf8');
	var result="";
	req.on('data',function(data){
		result+=data;
	});
	req.on('end',function(data){
		console.log(result);
		res.end('响应返回数据'+result);
	});
}).listen(9090,function(){
	console.log('start');
});