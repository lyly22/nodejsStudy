var dgram=require('dgram');
var socket=dgram.createSocket('udp4');
socket.send(new Buffer('我是陆莹'),0,12,41234,'localhost',function(err,bytes){
	console.log('发送了%d个字节',bytes);
});
socket.on('message',function(msg,rinfo){
	console.log(msg.toString());
	console.log(rinfo);
});