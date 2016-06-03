var net=require('net');
var util=require('util');
var fs=require('fs');

var ws=fs.createWriteStream('./socket.txt');
var server=net.createServer({allowHalfOpen:false},function(socket){
	//socket表示服务器监听的socket对象
	console.log(util.inspect(socket.address()));
	socket.setEncoding('utf8');
	socket.pipe(ws,{end:false});
	socket.on('end',function(){
		ws.end('再见');
		socket.unpipe(ws);
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8080,'localhost',511,function(){
	//端口号、IP地址或主机名、等待队列中的最大数量
	console.log(util.inspect(server.address()));
	
});