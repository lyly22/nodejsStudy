var net=require('net');
var server=net.createServer(function(socket){
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log(data);
		console.log('服务器接收到%d个字节',socket.bytesRead);
		socket.write('服务器接收到'+data);
	});
	socket.on('close',function(err){
		console.log('close',err);
	});
	socket.on('end',function(err){
		console.log('end',err);
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8088,function(){
	console.log('服务器启动');
});