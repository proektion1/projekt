"use strict"; 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    if (numberOfFilms > 0 && numberOfFilms < 10) {
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



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


// ЦИКЛЫ 1 способ - самый простой, но немного корявый, если ошибка в фильме, то окно с оценкой будет всё равно
/* for (let film = 0; film < 3; film ++) {
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
} */




/* 2 способ - проверка имени фильма и оценки. 
НЕПОНЯТНО как при ошибке оценки выводить только окно с оценкой, без названия фильма 
Работает норм! Мне нравится!*/
for (let film = 0; film < 3; film ++) {
    console.log(film);
    const lasstfilm = prompt('Один из последних просмотренных фильмов?', "");
    if (lasstfilm != null &&lasstfilm !='' && lasstfilm.length <50) {
        console.log(film); // просто проверка цикла
        console.log('lasstfilm done'); // просто проверка цикла

        const lasstocenka = prompt('На сколько оцените его?', "");
            if (lasstocenka != null && lasstocenka !='') {
            personalMovieDB.movies[lasstfilm] = lasstocenka;
            console.log('done'); // просто проверка цикла
            console.log(film); // просто проверка цикла
             }
             else {
                film--;
             }
             }
    else {
        film--;
    }
}
console.log(personalMovieDB);