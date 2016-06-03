var querystring=require('querystring');
var obj=querystring.parse('name=luying&age=10');
console.log(obj);
var obj2=querystring.parse('name@luying;age@10',';','@',{maxKeys:2});
console.log(obj2);
var string=querystring.stringify(obj);
var string2=querystring.stringify(obj2,';','@');
console.log(string);
console.log(string2);
