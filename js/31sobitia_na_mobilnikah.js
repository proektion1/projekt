"use strict";

/* 

touchstart // косание элемента
touchmove // скольжение
touchend // как только палец оторвался от экрана
touchenter // ведём пальцем по экрану пока не наскакиваем на элемент, на которое повешено это событие
touchleave // палец продолжил скользит за пределы какого-то элемента
touchcancel // точка соприкосновения не регистрируется а поверхности - палец вышел за пределы браузера

 */
window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.targetTouches);

    });
/*     box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('moove');

    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');

    }); */

/*     3 главных св-ва при работе с сенсорными устройствами
    1. touches // список всех пальцев, которые взаимодействуют с экраном
    2. targetTouches // все пальцы, которые взаимодействуют с конкретным элементом
    3. changedToushes // список пальцев, которые участвуют в конкркетном событии
 */
    // Показываем координаты перемещения пальца по экрану
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);

    });



});