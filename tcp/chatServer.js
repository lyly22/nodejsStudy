// 创建一个服务器
// 客户端可以连接服务器
// 客户端可以发言，广播给大家
// 客户端连接和退出都要通知大家
// 显示当前的在线人数
var net=require('net');
var clients={};
var server=net.createServer(function(socket){
	var nickname;
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		data.replace(/\r\n/,'');
		if(nickname){
			broadcast(nickname,nickname+':'+data+'\r\n');
		}else{
			nickname=data;
			clients[nickname]=socket;
			broadcast(nickname,nickname+'加入聊天室\r\n');
		}
	});
	server.getConnections(function(err,count){
		socket.write('欢迎光临，当前在线'+count+'人,请输入用户名\r\n');
	});
	socket.on('end',function(){
		broadcast(nickname,nickname+'离开了聊天室\rn');
		clients[nickname].destroy();
		delete clients[nickname];
	});
	socket.on('error',function(){

	});
});
function broadcast(nickname,msg){
	for(var name in clients){
		if(nickname!=name){
			clients[name].write(msg);
		}
	}
}
server.listen(8088);