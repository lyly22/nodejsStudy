/*
* @Author: Administrator
* @Date:   2016-05-24 21:32:26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-24 21:47:50
*/

'use strict';

var http=require('http');
var fs=require('fs');
var mime=require('mime');

function serve(req,res){
	var url=req.url;
	if(url==='/'){
		res.setHeader('Content-Type','text/html;charset=utf-8');
		fs.readFile('1.html',function(err,data){
			res.write(data);
			res.end();
		});
	}else{
		insert(url,res);
	}
	function insert(url,res){
		res.setHeader('Content-Type',mime.lookup(url)+';charset=uft-8');
		fs.readFile(url.slice(1),function(err,data){
			res.write(data);
			res.end();
		});
	}
}

http.createServer(serve).listen(8080,'localhost');