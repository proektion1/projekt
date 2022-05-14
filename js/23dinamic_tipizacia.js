"use strict";

/* Переводим в строковое значение
1 способ. (страый)*/
console.log(typeof(String(null))); //string
console.log(typeof(String(4)));     //string

/* 2 способ - конкотенация */
console.log(typeof(5+ ''));        // string
const num = 5;
console.log("https://vk.com/catalog/" + num); //https://vk.com/catalog/5
const fontSize = 26 + 'px';

/* Превращаем в число */
/* 1 способ */
console.log(typeof(Number('4'))); //number

/* 2 способ - унарный плюс */
console.log(typeof((+'54')));   //number
let answer = +prompt("Hello", "");

/* 3 способ */
console.log(typeof(parseInt('15px', 10))); //number 10 - вернуть в 10-ричной системе
console.log(parseInt('15px', 10));          //15 - начинается с числа, буквы отбрасывает
console.log(parseInt('ф15px', 10));         //NaN - т.к. начинается с буквы

/* Превращаем в булиновые значение */
/* 0, '', null, undefined, Nan; - всё это FALSE */

/* TRUE */
/* 1 способ) */
let switcher = null;
if (switcher) {             // if false - значит не выполнится
    console.log('Workinh');
}

switcher = 1;
if (switcher) {             
    console.log('Workinh'); //Workinh
}

/* 2 способ */
console.log(typeof(Boolean('4'))); //boolean
console.log((Boolean('4')));        //true

/* 3 способ */
console.log(typeof(('4')));      //string
console.log(typeof(('!4')));     //string
console.log(4);                 //4
console.log('!4');              //!4
console.log(typeof((!4)));      //boolean
console.log(typeof((!!'4')));   //boolean
console.log(!4);                //false
console.log(!!4);               //true