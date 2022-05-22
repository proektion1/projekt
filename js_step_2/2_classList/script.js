/* //Урок про classList

//Создать новый div на странице
const primer = document.createElement('div');
primer.classList.add('sv'); 
console.log(primer); // <div class="sv"></div> 

//Другие методы
const btns = document.querySelectorAll('button'); //берем все кнопки
console.log(btns[0].classList.length); //2 - кол-во классов у 1-ой кнопки

//item позволяет получить class под определенным индексом
console.log(btns[0].classList.item(0)); //blue


console.log(btns[0].classList.add('red')); //у кнопки появится класс blue some red - она перекрасится в красный
console.log(btns[0].classList.remove('blue'));// удаляем blue останется some red
console.log(btns[0].classList.toggle('blue'));//если класс есть - будет убран, если нет - добавлен 

//можно добавлять и удалять несколько значений
console.log(btns[0].classList.add('red', 'dssddsd', 'ddddddddddddddd')); //some red blue dssddsd ddddddddddddddd

// Проверить наличие класса у кнопки (если классов много)
console.log(btns[1].classList.add('ssssss', 'red','black'));
//Проверяем через contains
if (btns[1].classList.contains('red')) {
    console.log('red'); //red
} */


//Гамбургер меню строятся по такому принципу
const btns = document.querySelectorAll('button');
/* btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) { // ! = если у 2 кнопки нет класса red
        btns[1].classList.add('red');         // то добавляем
    } else {
        btns[1].classList.remove('red');       // если есть - удаляем
    }
}); */

// ПРОБУЕМ тоже самое через TOGGLE
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

// Устаревший метод className - выводит результат строкой, не используйте
//console.log(btns[0].className);

//ДЕЛЕГИРОВАНИЕ - с родителя на потомков
const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        //event.target - проверка на существование
        //например, на тег <BR> кликнуть нельзя - это рекомендация ГУГЛ
        console.log('Hello'); // Сработает только ри нажатии на кнопку
    }
/*     if (event.target && event.target.classList.contains('blue')) { //Проверяем через классы кнопок
        console.log('Hello');
    } */
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }

});

//Создадим кнопку и проверим предыдущее делегирование (Hello при нажатии)
const btn = document.createElement('button'); // создаем кнопку
btn.classList.add('red');                     // добавляем класс red
wrapper.append(btn);                          // добавляем кнопку в wrapper 




/* ЕСЛИ ДЕЛАТЬ ЧЕРЕЗ ФОРИЧЬ 
а потом добавить кнопку
ТО Hello при нажатии на эту кнопку не сработает
т.к. у нас изменился wrapper, а его обработчика нет,
мы просто добавили кнопку*/
/* const btn = document.createElement('button'); // создаем кнопку
btn.classList.add('red');                     // добавляем класс red
wrapper.append(btn);  

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello'); // не сработает на новой кнопке
    });
}); */


