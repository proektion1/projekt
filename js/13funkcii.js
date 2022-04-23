"use strict"; 

let num = 20; //глобальная переменная

function showFirstMessage (text) {
    console.log(text);
    num = 10; // перезаписываем переменную
}

console.log(num); // выведет 20
showFirstMessage("Hello, world!"); // запускаем функцию и передаём ей параметр
console.log(num); // выведет 10, так как запустилась функция, и в ней перезаписалась переменная


let num1 = 20; //глобальная переменная
function showFirstMessage (text) {
    console.log(text);
    let num1 = 10; // локальная переменную
}
console.log(num1); // выведет 20
showFirstMessage("Hello, world!"); 
console.log(num1); // выведет 20, так как внутри функции была ОБЪЯВЛЕНА (не перезаписана) локальная переменная, 
                // за её прееделами будет работать глобальная она будет только внутри функции


function calc (a, b) {
    return (a + b); // возвратит сложение
}

console.log(calc(4, 3));
console.log(calc(5, 6));

function ret () {
    let num = 50;
    return num; // вернёт нам во внешний мир значение переменной
}

const anotherNum = ret();
console.log(anotherNum);



/* Классификация функций */
/* 1. Деклорейшн - создаётся сразу. Можно к ней обращаться в начале кода, 
а сама функция может быть в конце. Браузер сперва считывает все такие функции.a
В примерах выше, как раз она! */

/* 2. Экспрешн */

const logger = function() {
    console.log("Hello");
};
logger();

/* 3. Стрелочная функция */

const caalc = (a, b) => a + b;

