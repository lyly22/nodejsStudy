var net=require('net');
var util=require('util');

var server=net.createServer({allowHalfOpen:false},function(socket){
	//socket表示服务器监听的socket对象
	console.log(util.inspect(socket.address()));
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log(data);
		console.log('已经接收到%d个字节',socket.bytesRead);
	});
	socket.on('close',function(){
		console.log('close');
	});
	socket.on('end',function(){
		console.log('end');
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8080,'localhost',511,function(){
	//端口号、IP地址或主机名、等待队列中的最大数量
	console.log(util.inspect(server.address()));
	
});