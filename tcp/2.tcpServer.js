var net=require('net');
var util=require('util');
var server=net.createServer({allowHalfOpen:false},function(socket){//是否允许客户端中断
	console.log(util.inspect(socket.address()));
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log(data);
		console.log('接收到%d个字节',socket.bytesRead);
	});
	socket.on('close',function(err){//一定会触发
		console.log('close',err);
	});
	socket.on('end',function(err){//正常关闭
		console.log('end',err);
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8089,function(){
	console.log(util.inspect(server.address()));
});