// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какимо бъектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу

'use strict'; 

let items = {
    item1: 30,
    item2: 40,
    item3: 50,
 };


function countBasketPrice(items) {
    let res = 0;

    for (var key in items) {
        res = res + items[key]
        }
    return 'Сумма всех товаров:' + res;
}
  

console.log(countBasketPrice(items));