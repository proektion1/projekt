"use strict";


/* УРОВНИ в DOM
console.log(document.documentElement);
console.log(document.head);
console.log(document.body); */


/* 
console.log(console.log(document.body.childNodes)); //узлы-дети у body
console.log(console.log(document.body.firstChild)); // Самый первый узел
console.log(console.log(document.body.lastChild));  // Самый последний узел 
 */

console.log(document.querySelector('#current').parentNode); // получить родителя first
console.log(document.querySelector('#current').parentNode.parentNode); // ранний родитель wrapper11

//nextSibling и parentNode - получаем след элемент (даже перенос или пустую строку)
console.log(document.querySelector('[data-current="3"]')); // получим data-current="3"
console.log(document.querySelector('[data-current="3"]').nextSibling);//получ след элемент
console.log(document.querySelector('[data-current="3"]').previousSibling);//пред элемент

//nextElementSibling и parentElement - получает конкретный элемент 
//(без переноса строки и т.п.)
console.log(document.querySelector('[data-current="3"]').nextElementSibling);//пред элемент
console.log(document.querySelector('#current').parentElement);
console.log(console.log(document.body.firstChild));
console.log(console.log(document.body.firstElementChild));



console.log(console.log(document.body.childNodes)); // Псевдомассив

/* Задача:
Получить все элементы, кроме текстовых нод */
for (let node of document.body.childNodes) { // берём нод в псевдомассиве и перебираем
    if (node.nodeName == '#text') { //если нода имеет св-во nodeName #text
        continue;                   //останавливает цикл и начинает заново с др элементом
    }
    console.log(node);
}