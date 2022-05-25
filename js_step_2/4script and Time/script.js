/* //1 способ
const timeId1 = setTimeout(function () {
    console.log('Hello1');
}, 2000);

//2 способ
const timeId2 = setTimeout(function (text) {
    console.log(text);
}, 2000, 'Hello2'); */

/* const btn = document.querySelector('.btn');
let timeId3,
    i = 0;
btn.addEventListener('click', () => {
    //const timeId3 = setTimeout(logger, 2000);
    timeId3 = setInterval(logger, 2000); //КАжДЫЕ 2 СЕУНДЫ
});
 */
/* 

function logger () {
    if (i===3) {
        clearInterval(timeId3);
    }
    console.log('text');
    i++;
} */
/* 
let id = setTimeout(function log(){
    console.log('hello');
    id = setTimeout(log, 500);
}, 500); */

const btn = document.querySelector('.btn'); //определили кнопку старта

    function myAnimation () { //функция анимации
        const elem = document.querySelector('.box'); //определили коробку, которая будет двигаться
        let pos = 0;                                // позиция 0;

        const id = setInterval(frame, 10);          //интервал. после 10 млс запускаем фрейм
        function frame () {                         //фрейм
            if (pos == 300) {                       // если позиция равна 300, то останавливаем setInterval
                clearInterval(id);
            } else {                                //в ином случае = сама анимация
                pos++;                              //увеличиваем позицию кубика на 1
                //Смещаем кубик на 1px вниз и вправо
                elem.style.top = pos + "px";        //+1пиксель каждый раз
                elem.style.left = pos + "px";
            }
        }
    }
    btn.addEventListener('click', myAnimation); // при клике запускаем анимацию