// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
    // Префиксная форма возвращает новое значение.

// d = b++; alert(d);           // 1
    // постфиксная форма возвращает старое (до увеличения/уменьшения числа).


// c = (2+ ++a); alert(c);      // 5

// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3

// Почему код даёт именно такие результаты?

'use strict'

var a = 1, b = 1, c, d;

c = ++a;  // с = 2 Префиксная форма возвращает новое значение.
console.log(c);
console.log(a); // a = 2

d = b++;
console.log(d);  // d = 1   постфиксная форма b++ увеличивает d, но возвращает старое значение (которое было до увеличения b)
console.log(b);  // b = 2    

c = 2+ ++a;  //2 + 2 + 1 = 5   Префиксная форма возвращает новое значение (a = a +1)
console.log(c);

d = 2+ b++; // 2 + 2 = 4  постфиксная форма b++ увеличивает d, но возвращает старое значение (которое было до увеличения b)
console.log(d);


console.log(a); // 3
console.log(b); // 3
