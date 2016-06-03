var net=require('net');
var util=require('util');

var server=net.createServer({allowHalfOpen:false},function(socket){
	//socket表示服务器监听的socket对象
	console.log(util.inspect(socket.address()));
	//查看当前连接数量
	server.getConnections(function(err,count){
		console.log(count);
	});
	socket.on('error',function(err){
		console.log(err);
		socket.destroy();
	});
});
server.on('error',function(err){
	console.log(err);
});
server.listen(8080,'localhost',511,function(){
	//端口号、IP地址或主机名、等待队列中的最大数量
	console.log(util.inspect(server.address()));
	setTimeOut(function(){
		server.close();
	},3000);
});
server.on('close',function(){
	console.log('服务器端正常关闭');
});
// net.Socket代表一个socket端口对象
// socket端口对象可用来读取客户端发送的流数据，读到数据时出发data事件
// socket.on('data',function(data){]});