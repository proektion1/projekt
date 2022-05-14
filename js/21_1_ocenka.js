"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');}
    },
    rememberMyFilms: function () {
        for (let film = 0; film < 2; film ++) { // Спрашиваем про 2 последних фильмаъ
            console.log(film);
            const lasstfilm = prompt('Один из последних просмотренных фильмов?', ""); // Получаем 1 фильм
				if (lasstfilm != null && lasstfilm !='' && lasstfilm.length <50) {     // Проверка написания
					    for(let ooocenka  = 1; ooocenka < 2; ooocenka ++) {             //Цикл для проверки оценки
							const lasstocenka = prompt('На сколько оцените его?', "");  //вводим оценку фильма
                                if (lasstocenka != null && lasstocenka !='' && !isNaN(lasstocenka)) {
								personalMovieDB.movies[lasstfilm] = lasstocenka;}      // в БД
                                else {ooocenka--;}                                      //Снова просим оенку
						}
				}
                else {film--;}		                                                      //Снова проси фильм
		}
		}
		};