"use strict";

/* НОВЫЕ МЕТОДЫ */
/* Получаем css селектор (класс, вложеность, атрибут и т.д.) */
// Позволяем применять forEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item=> {
    console.log(item);
});

const jneHeart = document.querySelector('.heart'); // Позволяет получить 1 элемент
console.log(jneHeart); // самый первый



/* СТАРЫЕ МЕТОДЫ */
/* 1. Получаем объект по ID */
const box =  document.getElementById('box');
console.log(box);

/* 2. Получаем элементы по имени тега */
const btns = document.getElementsByTagName('button'); 
//получили псеводомассив
//То есть у него есть числовые свойства (индексы) и свойство length.
//У них нет свойств, и методов массивов, таких как forEach, join, slice и др.
const btn1s = document.getElementsByTagName('button')[1];//получили конкретную кнопку
console.log(btns);      //вывести все кнопки
console.log(btns[1]);   //вывести конкретную кнопку
console.log(btn1s);     //вывести конкретную кнопку

/* 3. Получаем элемент по имени класса */
const circles = document.getElementsByClassName('circle'); // псевдомассив
console.log(circles);

