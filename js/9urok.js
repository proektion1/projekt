"use strict"; 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const filmOcenka1 = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const filmOcenka2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm1] = filmOcenka1;
personalMovieDB.movies[lastFilm2] = filmOcenka2;


console.log(personalMovieDB);