//console.log(1);


"use strict"; // работаем в современном режиме

/* 1 ПЕРЕМЕННЫЕ */
/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number); */



// ОБЪЕКТЫ
//есть значение, которое описывает объект, например: имя - Джон
/* const obj = {
    name: "Jhon",
    age: 25,
    isMarried: false,
};

console.log(obj.name); */


// МАССИВЫ (просто значения в массиве, у каждого элементы есть ключ - порядковый номер). Массив - частный случай объектов
/* let arr = ['plun.jpg', 'fff.png', 6, 'qwerty.jpg'];
console.log(arr['1']); */


/* alert('Hello');
const result = confirm("Are you here?");
console.log(result); */

/* const answer = +prompt("Вам есть 18 лет?", "18"); // Появляется модальное окно в которое пользователь может написать что угодно
console.log(typeof(answer)); // Узнаём тип данных - всегда СТРОКА!
console.log(answer + 5);  */

/* const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers); // ТИП_ ОБЪЕКТ. 0 индекс - имя, 1 индекс - фамилия.  Массив - частный случай объектов */



/* 5 ИНТЕРПОЛЯЦИЯ */
/* const category = 'cat';
console.log('https://domain.com/' + category);
console.log(`https://domain.com/${category}`); // интерполяция

const user = "Ivan";
alert (`Привет, ${user}`); */



/* 6 ОПЕРАТОРЫ JS */
/* конкатенация или просто сложение*/
/* console.log("arr" + " - object"); //arr - object
console.log(4 + " - object");     //4 - object
console.log(4 + +" - object");    //Nan - not a number + после сложения означает, что в кавычках числовое значениеъ
console.log(4 + +"5");            //9 */

/* ИНКРИМЕНТ И ДИКРИМЕНТ */
/* let incr = 10,
    decr = 10; */

   // префиксный - делает сразу операцию и возвращает результат СРАЗУ
/* incr++;
decr--;
 console.log(incr); //11
console.log(decr); //9 */

    //ПОСТФИКСНЫЙ   - СНАЧАЛА ВОЗВРАЩАЕТ СТАРОЕ ЗНАЧЕНИЕ, чтобы получить значений переменной её нужно вызвать ещё раз
/* ++incr;
--decr; */
/* console.log(incr++); //11
console.log(decr--); //9 */
/* console.log(incr); 
console.log(decr);  */
/* console.log(--incr); 
console.log(++decr);  */
/* console.log(incr--); 
console.log(decr++);  */




console.log(2*4 == 8);
console.log(2*4 === '8');

/* const isChek = true,
        isClose = true;

    console.log(isChek&&isClose); */

    const isChek = false,
        isClose = false;

    console.log(isChek||!isClose);