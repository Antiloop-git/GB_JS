// 1.Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
// градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf —
// температура по Фаренгейту, Tc — по Цельсию.
// 2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать
// значение из name в admin. Вывести admin (должно вывестись «Василий»).
// 3. * Чему будет равно JS-выражение 1000 + "108"?
//     4. * Самостоятельно разобраться с атрибутами тега script (async и defer)

'use strict'

// 1.          Вопрос, почему выдает "ReferenceError: alert is not defined"? Как отлаживать? 
viewAlert(20);

function viewAlert(Tc) {
    var Tf;
    Tf = (9 / 5) * Tc + 32;
    alert("Температура по Фаренгейту: " + Tf);
}


// 2.
var admin;
var name;

name = "Василий";
admin = name;
alert("admin: " + admin);


// 3.
const x = 1000;
const y = "108";
var z = x + y;
console.log(typeof (z) + ' ' + z);

var z = x * y;
console.log(typeof (z) + ' ' + z);








