// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.

// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины

'use strict';

let items = [];

items.push( {name: "item1", price: 30} );
items.push( {name: "item2", price: 40} );
items.push( {name: "item3", price: 50} );


function countBasketPrice(items) {
    let res = 0;
    for (let i = 0; i < items.length; i++) {
        res = res + items[i].price;
      }   
    return res
}
  

console.log(countBasketPrice(items));