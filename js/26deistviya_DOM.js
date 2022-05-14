"use strict";


const box =  document.getElementById('box');
const btns = document.getElementsByTagName('button'); 
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');
const jneHeart = document.querySelector('.heart');
//const hearts = wrapper.querySelectorAll('.heart');
//Берем не весь документ а родитель wrapper
//const jneHeart = wrapper.querySelectorAll('.heart');
//Берем не весь документ а родитель wrapper



//меняем стили
/* console.dir(box); // Посмотреть все характеристики элемента box*/

/* box.style.backgroundColor = 'blue'; //меняем цвет
box.style.width = '500px';          //меняем ширину */
btns[1].style.borderRadius = '100%';//сглаживаем углы
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 900px;';

/* 1 способ
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

/* 2 способ */
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

/* Создать элемент */
/* const text = document.createTextNode('Тут был я'); */
const div = document.createElement('div');
div.classList.add('black'); 
//black уже описан в стайл.ксс
//div дали класс black
document.body.append(div); 
// Берем body и внутрь его вставляем созданный div

/* Добавляем без определения переменной */
//Берем wrapper и добавляем div
//document.querySelector('.wrapper').append(div);
//wrapper.append('div');


wrapper.prepend(div); //Вставить перед wrapper
/* div.innerHTML = "<h1>Hello World</h1>"; //Вставляем HTML
div.textContent = "Hello";  //Вставляем текст */
div.innerHTML = "<h1>Hello World</h1>";
div.insertAdjacentHTML('afterbegin', '<h2>hi</h2>');
/* 'beforebegin': до самого element (до открывающего тега).
'afterbegin': сразу после открывающего тега  element (перед первым потомком).
'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
'afterend': после element (после закрывающего тега). */






/* hearts[0].before(div); // вставить перед первым элементом
hearts[0].after(div); // вставить после первого элементом

circles[0].remove(); // удалить элемент
hearts[0].replaceWith(circles[0]); //заменить элемент hearts на circles

 */





/* 

УСТАРЕВШИЕ КОНСТРУКЦИИ
wrapper.appendChild(div); // ДОБАЛЯЕМ 
wrapper.insertBefore(div, hearts[0]); //вставить div перед hearts[0]. 
wrapper.removeChild(hearts[1]); //удалить элемент
wrapper.replaceChild(circles[0], hearts[1]); //вместо hearts ставим circles */

