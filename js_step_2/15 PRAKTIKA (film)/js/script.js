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
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "123",
        "Одержимость",
        "Скотт11 Пилигрим против...",
        "ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ",
        "ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ1111112"
    ]
};
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




