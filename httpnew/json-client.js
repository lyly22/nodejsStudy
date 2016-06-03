var http=require('http');
var options={
	//host:aa,//域名或目标主机IP
	hostname:'localhost',//域名或主机IP，优先级比host高
	port:9090,//端口号
	headers:{//客户端请求头对象
		'Content-Type':'application/json'
	},
	path:'/',//请求路径
	method:'post'//请求方法,
	//auth:认证信息 如 “username:password"
}//向哪个服务器发请求
var request=http.request(options,function(response){//callback当获取到目标网站所返回的响应流时调用的回到函数
	response.setEncoding('utf8');
	var result='';
	response.on("data",function(data){
		result+=data;
	});
	response.on('end',function(data){
		console.log(result);
	});
});

request.write(JSON.stringify({"name":"zfpx"}));//向目标服务器发送数据
request.end();//结束本次请求