var StringDecoder = require('string_decoder').StringDecoder;//实例化
var decoder = new StringDecoder();  //默认utf8编码

var cent = new Buffer([0x31,0x32]);
console.log(decoder.write(cent)); //

var euro = new Buffer("珠峰");
console.log(decoder.write(euro));