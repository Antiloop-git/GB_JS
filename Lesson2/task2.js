// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);


'use strict'

var a = 2;
var x = 1 + (a *= 2); 
// x = 1 + (a = a * 2) = 1 + (2 * 2) = 5

console.log(x);



