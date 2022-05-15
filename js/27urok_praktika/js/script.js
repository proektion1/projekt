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
        "Скотт11 Пилигрим против..."
    ]
};


const delAds = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genrFilm = poster.querySelector('.promo__genre'),
      ffffilms =  document.querySelectorAll('.promo__interactive-item');

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


/* Меняем список фильмов */
movieDB.movies.sort(); // Отсортируем список фильмов по алфавиту
ffffilms.forEach (function (element, nn) { 
    element.innerHTML = `${nn+1}. ${movieDB.movies[nn]}
                        <div class=\"delete\"></div>`;
});


/*  
ДРУГОЙ СПОСОБ - если заменить только текст
for (let m=0; m<ffffilms.length; m++) {
    ffffilms[m].textContent = movieDB.movies[m];
 } */






