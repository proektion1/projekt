/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов 
6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
10) Фильмы должны быть отсортированы по алфавиту */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...1"
    ]
};

//1) удаляем рекламу
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(reklama => reklama.remove());
/* document.querySelectorAll('.promo__adv img').forEach(reklama => reklama.remove()); */

//2) Меняем жанр
const genre = document.querySelector('.promo__genre');
genre.innerText = "Драма";
/* document.querySelector('.promo__genre').innerText = "Драма"; */

//3) Меняем фон
const fonImage = document.querySelector('.promo__bg');
fonImage.style.backgroundImage = "url('img/bg.jpg')";
/* document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')"; */

//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов 
movieDB.movies.sort();
const spisokFilmovNaStranice = document.querySelector('.promo__interactive-list');

function spisokVsehFilmov () {
    spisokFilmovNaStranice.innerHTML = "";
    movieDB.movies.forEach((film, nomerfilm) => {

        spisokFilmovNaStranice.innerHTML += `<li class="promo__interactive-item">
        ${nomerfilm+1}. ${film}<div class="delete"></div>
        </li>`;
    });

    // 8)При клике на мусорную корзину
    const delFilm = spisokFilmovNaStranice.querySelectorAll('.delete');
delFilm.forEach((udalenie, nomer) => {
    udalenie.addEventListener('click', () => {
        udalenie.parentElement.remove();
        movieDB.movies.splice(nomer, 1);
        spisokVsehFilmov ();
    });
});




}
spisokVsehFilmov ();

//6) новый фильм добавляется в список.
const addFilm = document.querySelector('form.add');
const inputFilm = addFilm.querySelector('.adding__input');
const chek = addFilm.querySelector('[type="checkbox"]');//кнопка 

addFilm.addEventListener('submit', (imya) => {
    imya.preventDefault();
    let newFilm = inputFilm.value;
    const favorite = chek.checked; 
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.slice(1,21)}...`;
        }
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }
    movieDB.movies.push(newFilm);
    movieDB.movies.sort();
    spisokVsehFilmov ();
    imya.target.reset();
    }
});




