"use strict"; 

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
document.write(`Количество просмотренных фильмов: ${numberOfFilms}`); 


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};
console.log(personalMovieDB);