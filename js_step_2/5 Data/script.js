"use strict";

const now = new Date(); //текущая дата
console.log(now);

const now1 = new Date();            //текущая дата
console.log(now1);                  //2022-05-25T17:57:03.499Z
console.log(now1.getFullYear());    //2022
console.log(now1.getMonth());       //4
console.log(now1.getDate());        //25    
console.log(now1.getDay());         //3 (начин с воскресен)
console.log(now1.getUTCHours());    //17 часов по UTC
console.log(now1.getTimezoneOffset()); //-300 отличие зоны
console.log(now1.getTime()); //сколько милисекунд с 1970 года

console.log(now1.setHours(18)); // устновить время равное 18 часам
console.log(now1.setHours(18, 40)); // устновить время 18-40 часам


//Бенчмарк - производительность системы
let start = new Date();         //определяем текущую дату
for (let i = 0; i < 100; i++) { //делаец простой цикл
    let some = i ** 3;
}
let end = new Date();            //определяем новую дату
console.log(`Цикл отработал за ${end - start} миллисекунд`); //бенчмарк