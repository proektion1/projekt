"use strict";
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let i = 0;
const deleteelement = (e) => {
    //e.target.remove();
    console.log(e.target);
    //console.log(e.currentTarget); //показывает всплыие элементов при вложенных элементах
    console.log(e.type);
/*     i++;
    if (i==1) { 
        btn.removeEventListener('click', deleteelement); //удаляем обработчик события
    } */
};

btn.addEventListener('click', deleteelement); //После клика выполняем функцию
overlay.addEventListener('click', deleteelement); 


// Нажначаем всем кнопкам обработчик событий
const allButton = document.querySelectorAll('button');
allButton.forEach(function (lalala, nomerKnopki) {
    lalala.addEventListener('click', function() {
        console.log(`Вау, мы нажали на кнопку ${nomerKnopki+1}`);
    });
});


/* btn.onclick = function() {
    alert('clclcl');
};  */

/* btn.addEventListener('сlick', () => { //click - название события 
                                         //из документации н: dblclick, сlick
    alert('Click');
}); */

/* Если в колбек функцию нужноещё какие-то аргументы, то след:
1 идёт объект события */

/* btn.addEventListener('mouseenter', (e) => { //e - любое обозначение
console.log(e); //MouseEvent {isTrusted: true, screenX: 47, screenY: 192, 
                //clientX: 47, clientY: 89, …}

console.log(e.target); // <button id="btn">Нажми меня</button>
e.target.remove();      // удаляет этот элемент
console.log('Click');  // Click
}); */

/* Удаляем стандартное поведение (например, 
если нажать на ссылку браузер перейдёт на страницу,
 - это можно отменить). */

const link = document.querySelector('a'); //берем 1 ссылку с тегом а
link.addEventListener('click', function(smotrimOtmenu) { //вешаем обработчик
    smotrimOtmenu.preventDefault(); // удаляет стандартное поведение
                                    // не переходим по ссылке
     console.log(smotrimOtmenu.target); //<a href="https://www.youtube.com/">
                                        //https://www.youtube.com/</a>
});