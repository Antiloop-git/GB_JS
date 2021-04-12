// * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
// должно так:
// for(...){// здесь пусто}


'use strict';


function checkAndPrint (i) {
  console.log(i);
  return i < 9
}


for (let i = 0; checkAndPrint(i); i++) {  
}   


