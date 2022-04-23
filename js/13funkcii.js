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


