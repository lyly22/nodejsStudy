/*
* @Author: Administrator
* @Date:   2016-05-08 17:12:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-08 17:16:11
*/

'use strict';
var fs=require('fs');
fs.readFile('./1.txt',function(err,data){
	if(err){
		console.log(err);
	}
	console.log(data);
});