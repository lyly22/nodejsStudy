/*
* @Author: Administrator
* @Date:   2016-05-08 17:12:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-08 17:19:36
*/

'use strict';
var fs=require('fs');
fs.writeFile('./1.txt','你好呵呵',function(err){
	console.log('成功',err);
});