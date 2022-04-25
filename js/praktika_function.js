"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
 start();

const personalMovieDB = {
   // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};





function rememberMyFilms () {
    for (let film = 0; film < 2; film ++) {
        console.log(film);
        const lasstfilm = prompt('Один из последних просмотренных фильмов?', "");
        const lasstocenka = prompt('На сколько оцените его?', "");
        
            if (lasstfilm != null && lasstocenka != null && lasstfilm !='' && lasstocenka !='' && lasstfilm.length <50) {
            personalMovieDB.movies[lasstfilm] = lasstocenka;
            console.log('done');
            console.log(film);
             }
            else {
            console.log('error');
            film--;
            }
    }
}

//rememberMyFilms();








function detectpersonalLevel() {
    if (numberOfFilms >= 0 && numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
        }
        else if (numberOfFilms >=10 && numberOfFilms <30) {
        console.log('Вы классический зритель');
        }
        else if (numberOfFilms >= 30) {
        console.log('Вы киноман');
        }
        else {
        console.log('Произошла ошибка');
        }
}
detectpersonalLevel();


/* function showMyBD () { //false
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyBD(personalMovieDB.privat); */

function showMyBD (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyBD(personalMovieDB.privat);


/* 1 способ с жанрами */
/* function writeYourGenres() {
    for (let i=1; i <=3; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
} */

/* 2 способ с жанрами (меньше кода)*/
function writeYourGenres() {
    for (let i=1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
} 

writeYourGenres();