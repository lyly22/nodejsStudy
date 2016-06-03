var net=require('net');
var util=require('util');
var fs=require('fs');
var ws=fs.createWriteStream('./socket.txt');
var server=net.createServer({allowHalfOpen:false},function(socket){//是否允许客户端中断
	console.log(util.inspect(socket.address()));
	socket.setEncoding('utf8');
	socket.pipe(ws);
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8089,function(){
	console.log(util.inspect(server.address()));
});