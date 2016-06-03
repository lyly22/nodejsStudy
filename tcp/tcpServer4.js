var net=require('net');
var util=require('util');
var fs=require('fs');

var ws=fs.createWriteStream('./socket2.txt');
var server=net.createServer({allowHalfOpen:false},function(socket){
	socket.setTimeout(10*1000);
	socket.on('timeout',function(){
		socket.resume();
		socket.pipe(ws,{end:false});
		ws.write(socket.remoteAddress);
	})
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8080,'localhost',511,function(){
	//端口号、IP地址或主机名、等待队列中的最大数量
	console.log(util.inspect(server.address()));
	
});