"use strict";

const str = "test";
/* const arr = [1, 2, 3];
console.log(arr.length);
console.log(str.length); */
console.log(str.toUpperCase());

console.log(str);


const fruit = "Same fruit";
console.log(fruit.indexOf("fruit")); //5

const logg = "Hello, world!";

console.log(logg.slice(7, 12)); // world
console.log(logg.slice(7));     // world!
console.log(logg.slice(-5));     // orld! - c конца строки отсчёт
console.log(logg.substring(7, 11)); // worl



const num = 12.2;
console.log(Math.round(num)); //округление

const test = "12.2px";
console.log(parseInt(test)); // вернёт 12 в числовой форме
console.log(parseFloat(test)); //12.2 вернёт в 10-ричной системе

