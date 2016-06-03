/*
* @Author: Administrator
* @Date:   2016-05-08 17:12:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-31 14:36:32
*/

'use strict';
var fs=require('fs');
fs.writeFile('./new.txt','我是谁',{
	flag:'a',
	encoding:'utf8'
},function(err){
	console.log('成功');
});