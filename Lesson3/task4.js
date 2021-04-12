// * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:

'use strict';


function checkAndPrint (i) {
  console.log("*".repeat(i));
  return i < 20
}


for (let i = 0; checkAndPrint(i); i++) {  
}   


