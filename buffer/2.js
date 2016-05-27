/*
* @Author: Administrator
* @Date:   2016-05-27 10:56:41
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-27 16:03:15
*/

'use strict';

var buf1=new Buffer(3);
var buf2=new Buffer([1,2,3]);
var buf3=new Buffer('你好','utf-8');
//utf-8 是默认的编码方式;
//此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
var buf4=new Buffer(3);
buf4.write('你好',0,3,'utf-8');
//写入缓冲区的字符串。
//缓冲区开始写入的索引值，默认为 0 ;
//写入的字节数，默认为 buffer.length;
//使用的编码。默认为 'utf8' 。
//返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
// var buf5=new Buffer(5);
// var len=buf5.write('hello');
// console.log(buf1);
// console.log(buf2);
// console.log(buf3);
// console.log(buf4);
// console.log(buf5);
// console.log(len);

// var buf6=new Buffer('你好');
// console.log(buf6);
// var buf7=buf6.slice(1);
// buf7[1]=0xff;
// console.log(buf6);
// console.log(buf7);
var buf8=new Buffer("我是陆莹");
var buf9=buf8.slice(0,7);
var buf10=buf8.slice(7);
console.log(buf9.toString());
console.log(buf10.toString());
var StringDecoder=require('string_decoder').StringDecoder;
var decoder=new StringDecoder();
console.log(decoder.write(buf9));
console.log(decoder.write(buf10));
var buf11=new Buffer(10);
buf11.fill(2);
console.log(buf11);
var bufnew1=new Buffer([1,2,3]);
var bufnew2=new Buffer([4,5,6]);
var newBuf=Buffer.concat([bufnew1,bufnew2],6);
console.log(newBuf);
var bufnew3=new Buffer([4,5,6]);
bufnew3.copy(bufnew1,3,0,3);
console.log(bufnew1);
