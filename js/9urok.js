"use strict"; 

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

const lastFilm = prompt('Один из последних просмотренных фильмов?', "");
const filmOcenka = prompt('На сколько оцените его?', "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [lastFilm]: filmOcenka,
    },
    actors: {},
    genres: {},
    privat: false,
};
console.log(lastFilm, filmOcenka);
console.log(personalMovieDB);