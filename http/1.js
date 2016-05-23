/*
* @Author: Administrator
* @Date:   2016-05-23 22:31:46
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-23 22:41:04
*/

'use strict';


var http=require('http');

function serve(request,response){
	console.log(request.method);
	console.log(request.url);
	console.log(request.headers);
	response.statusCode=404;
	response.setHeader('name','luying');
	response.setHeader('Content-Type','text/html;charset=utf-8');
	response.write(new Date().toString());
	response.end();
}
http.createServer(serve).listen(8080,'localhost');

