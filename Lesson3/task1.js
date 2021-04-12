// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

'use strict';

let n = 100;
var i = 3;
var  nSimple = true;

while (i <= n) {
    var  j = 2;
    while (j <= i) {
        if ((i % j == 0) && (i != j)) {
            var nSimple = false;
            break;
        }
        j++;
    }
    if (nSimple == true) console.log(i);
    var nSimple = true;
    i++;
}
