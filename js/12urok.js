"use strict"; 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let film = 0; film < 3; film ++) {
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



console.log(personalMovieDB);