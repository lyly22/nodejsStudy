/*
* @Author: Administrator
* @Date:   2016-05-25 19:00:07
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-25 19:22:35
*/

'use strict';

var eventEmitter=require('events');
var util=require('util');
function Person(name){
	this.name=name;
}
util.inherits(Person,eventEmitter);
var me=new Person('luying');

me.on('up',function(){
	console.log('get Up');
});

me.addListener('up',function(){
	console.log('get UP agin');
});

var sleep=function(){
	console.log('i sleep');
}
me.once('sleep',sleep);

//me.removeAllListeners('up');
me.emit('up');
// me.emit('sleep');
// me.emit('sleep');
me.removeListener('sleep',sleep);
me.emit('sleep');
//console.log(me.listeners('on'));