// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
// нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.


'use strict';
 
let table = document.getElementById("table");
// let table = document.createElement("table");


let letters = "ABCDEFGH";
let numLetters = "12345678";
let whiteChessmen  = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"];
let blackChessmen  = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"];


for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    let td = document.createElement('td');
    if ((j === 0) || (j === 9)) {
      td.textContent = numLetters.charAt(8 - i);
      tr.append(td);
      if (j === 9) {
          td.className = "rotate";
      }
      continue;

    }

    if ((i === 9) || (i === 0)) {
      td.textContent = letters.charAt(j - 1);
      td.classList.add('letter');
      tr.append(td);
      if (i === 0) {
        td.className = "rotate";
      }
      continue;
    }

    if (i % 2 == j % 2) {
      td.className = "white";
    } else {
      td.className = "black";
    }
    tr.append(td);

    if (i === 8)  {
        td.innerHTML = whiteChessmen[j-1] 
        tr.append(td);
      }
  
      if (i === 7)  {
        td.innerHTML = "&#9817"; 
        tr.append(td);
      }

      if (i === 1)  {
        td.innerHTML = blackChessmen[j-1] 
        tr.append(td);
      }
  
      if (i === 2)  {
        td.innerHTML = "&#9823;"; 
        tr.append(td);
      }
  }
  table.append(tr);
}

// document.divContainer.append(table);
document.divContainer.append(table);