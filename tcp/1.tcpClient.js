var net=require('net');
var socket=new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf8');
socket.connect(8088,'localhost',function(){
	socket.write('hello,你好');
	socket.on('data',function(data){
		console.log(data);
	});
});
socket.on('error',function(err){
	console.log(err);
});