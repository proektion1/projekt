"use strict"; 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');}
    },
    rememberMyFilms: function () {
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
    },
    detectpersonalLevel: function() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
            }
            else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
            console.log('Вы классический зритель');
            }
            else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
            }
            else {
            console.log('Произошла ошибка');
            }
    },
    showMyBD: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
       /*  for (let i=1; i <=3; i++) {


          1 способ (спрашиваем по порядку)  
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
                if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--;}
                else {
                    personalMovieDB.genres[i - 1] = genre;
                } */

                // 2 способ - спршиваем через запятую
                for (let i=1; i <2; i++) {
                let genre = prompt(`Введите ваши любимые жанры через запятую`);
                if (genre === '' || genre == null) {
                    console.log("Вы ввели некорректные данные");
                    i--;}
                    else {
                        personalMovieDB.genres = genre.split(", ");;
                    } 
        }


/*         personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}'`);
        }); */
        
    } 

};

