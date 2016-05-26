/*
* @Author: Administrator
* @Date:   2016-05-24 21:32:26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-25 10:51:34
*/

'use strict';

var http=require('http');
var fs=require('fs');
var mime=require('mime');
var url=require('url');

function serve(req,res){
	//true表述将query转换成对象
	var urlObj=url.parse(req.url,true);
	//console.log(req.url,urlObj.query,urlObj.pathname);
	//console.log(req.url===urlObj.pathname);
	// var url=req.url;
	var pathname=urlObj.pathname;
	if(pathname==='/'){
		res.setHeader('Content-Type','text/html;charset=utf-8');
		fs.readFile('1.html',function(err,data){
			res.write(data);
			res.end();
		});
	}else if(pathname==='/clock'){
		var counter =0;
    	var int = setInterval(function(){
	        res.write(new Date().toString());
	        counter++;
	        if(counter==5){
	            clearInterval(int);
	            res.end();
	        }
    	},1000);
	}else{
		insert(pathname,res);
	}
	function insert(pathname,res){
		res.setHeader('Content-Type',mime.lookup(pathname)+';charset=uft-8');
		fs.readFile(pathname.slice(1),function(err,data){
			res.write(data);
			res.end();
		});
	}
}

http.createServer(serve).listen(8080,'localhost');