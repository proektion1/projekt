'use strict';


const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth; // внутрення часть без отступов
const height = box.clientHeight;
const width1 = box.offsetWidth; //с отступами
const height1 = box.offsetHeight;
const height2 = box.scrollHeight; // со скроллом (если есть)

console.log(width, height, width1, height1, height2);

// Рскрываем скролл на странице
let btn1 = document.querySelector('button');
btn1.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop); //показать, сколько мы пролистали

});

console.log(box.getBoundingClientRect()); // получить координаты
console.log(box.getBoundingClientRect().top); // получить координаты

const style = window.getComputedStyle(box); //стили, которые применились к объекту
console.log(style);         //все стили
console.log(style.display); //block

let x = document.documentElement.scrollTop; // сколько пролистал
//если установить documentElement.scrollTop = 0; -> вернёт в начало старницы
