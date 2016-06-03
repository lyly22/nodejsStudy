var net=require('net');
var util=require('util');
var server=net.createServer({allowHalfOpen:false},function(socket){//是否允许客户端中断
	console.log(util.inspect(socket.address()));
	server.getConnections(function(err,count){
		console.log(count);
	});
	socket.on('error',function(err){
		console.log(err);
		socket.destroy();
	});
	socket.on('close',function(err){
		console.log(err);
		socket.destroy();
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8089,function(){
	console.log(util.inspect(server.address()));
	setTimeout(function(){
		server.close();
	},3000);
});
server.on('close',function(err){
	console.log('服务器关闭');
});