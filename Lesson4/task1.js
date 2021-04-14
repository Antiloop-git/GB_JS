// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

'use strict'; 

let num = 245;

function getRank(num) {
    let numStr = num.toString(10);
    let numClass = {
        "единицы": NaN,
        "десятки": NaN,
        "сотни": NaN
     };
    
    if ((num > 999) || (num < 0)) {            
        console.log("Число должно быть положительным от 0 до 999");
        return numClass;
    }
    numClass.единицы = +numStr[2];
    numClass.десятки = +numStr[1];
    numClass.сотни = +numStr[0];
    return numClass;
        
}      

console.log(getRank(num));
