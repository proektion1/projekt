"use strict";

const arr = [1, 2, 3, 6, 8];
/* arr[99] = 0;
console.log(arr.length); */
// Свойство length состоит из последнего индекса +1
/* arr[99] = 0;
console.log(arr.length); //100 элементов (99+1) Остальные ячейки будут пустыми EMPTY ITEMS*/

arr.forEach(function (item, i, arr) {   // CALLBACK функция. forEach для каждого элемента выполняется
    //item - сами значения в массиве,                                   
    //i - порядковый номер, arr - значения массива (все)
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
/* 
0: 1 внутри массива 1,2,3,6,8
1: 2 внутри массива 1,2,3,6,8
2: 3 внутри массива 1,2,3,6,8
3: 6 внутри массива 1,2,3,6,8
4: 8 внутри массива 1,2,3,6,8 
*/


arr.pop(); // удаляет последний элемент массива
arr.push(10); //добавляет в конец массива
//console.log(arr);

// ПЕРЕБИРАЕМ массив
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}





// Запрашиваем данные и превращаем в масси
const str = prompt("", ""); 
const products = str.split(", "); // запятая - разделитель элементов
console.log(products); // выведет массив
console.log(products.join('; ')); // из массива в строку

// sort использует алгорит быстрой сортировки
// сортировка (КАК СТРОКИ - по алфавиту, по 1 символу)
const produc1ts = [2, 11, 4, 9, 12, 22, 222];
produc1ts.sort();
console.log(produc1ts);
//11, 12, 2, 22, 222,  4, 9

// сортировка по заданным условиям
const produc11ts = [2, 11, 4, 9, 12, 22, 222];
produc1ts.sort(compareNum); 
function compareNum(a, b) {
    return a - b;
}


console.log(produc11ts);
//2, 4, 9, 11, 12, 22, 222

