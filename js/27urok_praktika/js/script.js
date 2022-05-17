/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "123",
        "Одержимость",
        "Скотт11 Пилигрим против...",
        "ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ",
        "ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ111111"
    ]
};


const delAds = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genrFilm = poster.querySelector('.promo__genre'),
      //ffffilms =  document.querySelectorAll('.promo__interactive-item'),
      ffffilm1s =  document.querySelector('.promo__interactive-list');
      ffffilm1s.innerHTML = "";

/* 1 способ - удаляет только рекламу - ВЕРНЫЙ */
console.log(delAds);
delAds.forEach(element => {
    element.remove();
});

/* 2 способ - через функцию
delAds.forEach(function (element) {
    element.remove();
});
*/

//Cпособ сменить жанр
genrFilm.textContent = "Драма";

/* Меняем ФОН */
poster.style.backgroundImage = "url('img/bg.jpg')";

movieDB.movies.sort(); // Отсортируем список фильмов по алфавиту

/* Меняем список фильмов 
Если кол-во на странице = кол-во в нашей БД
Если в БД больше - не отобразятся лишние
Если меньше  UNDEFINED
ffffilms.forEach (function (element, nn) {  // Берем каждый элемент псевдомассива и его номер
                                            //добавляем штмл код в этот элемент (старый удаляется)
    element.innerHTML = `${nn+1}. ${movieDB.movies[nn]} 
                        <div class=\"delete\"></div>`;
});
*/

// += - добавляет к текущему списку. Без него выведет только последний.
// a = a+1  ===  a+=a

/* 1 запись СТрелочная  */
movieDB.movies.forEach ((film, i) => {
    ffffilm1s.innerHTML += `<li class=\"promo__interactive-item\">${i+1}. ${film}
    <div class=\"delete\"></div>
    </li>`;
});

/* 2 запись функшн */
/* movieDB.movies.forEach ( function (film, i) {
    ffffilm1s.innerHTML += `<li class=\"promo__interactive-item\">${i+1}. ${film}
    <div class=\"delete\"></div>
    </li>`;
}); */


/*  
ДРУГОЙ СПОСОБ - если заменить только текст
for (let m=0; m<ffffilms.length; m++) {
    ffffilms[m].textContent = movieDB.movies[m];
 } */






