// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
//  Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
//     ### 4. Присвоить переменной а значение в промежутке [0..15].
//         С помощью оператора switch организовать вывод чисел от a до 15. 
//     ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//            Обязательно использовать оператор return.
//     ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//            где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//             В зависимости от переданного значения операции выполнить одну
//             из арифметических операций (использовать функции из пункта 3)
//              и вернуть полученное значение (использовать switch).

'use strict'
function fSum(arg1, arg2) {
    return arg1 + arg2;
}

function fSub(arg1, arg2) {
    return arg1 - arg2
}

function fDiv(arg1, arg2) {
    try {
        return arg1 / arg2
      } catch (err) {
        console.log('Деление на 0')
      }
}

function fMul(arg1, arg2) {
    return arg1 * arg2
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Сумма":
            return(fSum(arg1, arg2));
            break;
        case "Вычитание":
            return(fSub(arg1, arg2));
            break;
        case "Умножение":
            return(fMul(arg1, arg2));
            break;
        case "Деление":
            return(fDiv(arg1, arg2));
            break;
        default:
            return ("Sorry, we are out of " + operation + ".");
      }
}


function fExecute(arg1, arg2) {
    if ((arg1 >= 0) && (arg2 >= 0)) {
        return(fSub(arg1, arg2));
    } else if ((arg1 < 0) && (arg2 < 0)) {
            return(fSub(arg1, arg2));
    } else if (((arg1 >= 0) && (arg2 < 0)) || ((arg1 < 0) && (arg2 >= 0))) {
            return(fSub(arg1, arg2));
    }
}


var a = 2;
var b = 3;
var dOperation = {sum : "Сумма", subtraction: "Вычитание", multiplication : "Умножение", division  : "Деление"};

console.log(mathOperation (a, b, dOperation.sum));

console.log(fExecute (a, b));



