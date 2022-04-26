"use strict";


function first () {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();




function learnJS(lang, callback) { //объявляем функцию с 2 аргументами. 2 арг - функция
    console.log(`Я учю: ${lang}`);
    callback();                     //выполняем 2 функцию только после console.log
}

learnJS('Javascript', function() {      //запускаем функцию с 2 аргументами
    console.log('Я прошёл этот урок!'); //2 аргумент - функция с текстом
});
