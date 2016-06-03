/*
* @Author: Administrator
* @Date:   2016-05-08 17:12:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-08 17:29:27
*/

'use strict';
var fs=require('fs');
fs.appendFile('./1.txt','你好呵呵',function(err){
	console.log('成功',err);
});

function copy(src,target){
	fs.readFile(src,function(err,data){
		fs.writeFile(target,data,function(){
			console.log('ok');
		})
	})
}
copy('1.txt','2.txt');