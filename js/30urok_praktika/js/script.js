/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */
// Возьмите свой код из предыдущей практики
'use strict';

document.addEventListener('DOMContentLoaded', () => {





    const movieDB = {
        movies: [
            "Логан", "Лига справедливости", "123", "Одержимость", "Скотт11 Пилигрим против...", "ЯЯЯЯЯЯЯЯ2ЯЯЯЯЯЯЯЯ", "ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ111111"]};
    
    const delAds = document.querySelectorAll('.promo__adv img'), //картинки с рекламой
          poster = document.querySelector('.promo__bg'),        // фоновое изображение
          genrFilm = poster.querySelector('.promo__genre'),     //жанр
          //ffffilms =  document.querySelectorAll('.promo__interactive-item'),
          ffffilm1s =  document.querySelector('.promo__interactive-list'),

        

          addFilm = document.querySelector('form.add'),            // Получаем форму с именем add, чтобы проверить submit
          poleFilm = addFilm.querySelector('.adding__input'), // Поле с фильмом
          chek = addFilm.querySelector('[type="checkbox"]');       //кнопка 


    /* 1 cпособ удаления рекламы через функцию */
    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };
    

    const makeChanges = () => {
    genrFilm.textContent = "Драма";
    poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    
    // Отсортируем список фильмов по алфавиту
    const sortArr = (arr) => {
        arr.sort();
    };








    /* СОЗДАНИЕ СПИСКА НА СТРАНИЦЕ + Функция удаления!!! */
    function createMoviList (films, parent) { //Добавляем films -фильмы (movieDB.movies), и parent - это родительский клсс (document.querySelector('.promo__interactive-list');)
        parent.innerHTML = "";                 // ul promo__interactive-list = "";
        sortArr(films);
        films.forEach ((film, i) => {           //movieDB.movies.forEach (фильм и его индекс)
            parent.innerHTML += `<li class=\"promo__interactive-item\">${i+1}. ${film}
            <div class=\"delete\"></div>
            </li>`;
        });
         // ДОБАВИЛИ В UL interactive-list все li class 
         // Добавляем удаление фильмов   
        document.querySelectorAll('.delete').forEach((btn, i) => { //Берем все кнопки с удалением. Перебираем (кнопка, её номер)
            btn.addEventListener('click', () => {                  //добавляем кнопке обработчик событий (КЛИК)
            btn.parentElement.remove();                            // удаляем по нажатию. parentElement – родитель-элемент.
            // у <div class="delete"></div> есть родитель <LI promo__interactive-item>
            movieDB.movies.splice(i, 1);                           //удаляем из БД. УДалить 1 элемент с массива начиная с i
            
            console.log(movieDB.movies);
            createMoviList(films, parent); // рекрусия, чтобы после удаления список перезаписывался
        });

    });
}
    

    
    
    
    /* ДОБАВЛЕНИЕ ФИЛЬМА с проверкой на длину и отображением на стр и БД */
    addFilm.addEventListener('submit', (name) => {           //Вещаем обраб по клику
        name.preventDefault();                                //убираем перезагрузку
        let newFilm = poleFilm.value;
        const favorite = chek.checked;      //checked - установлена галочка (булиновое значение - тру или фолс)
        
        if(newFilm) {                       //Если пользователь ввёл хоть 1 букву - работаем, если нет - нет
            if (newFilm.length >= 21) {
                newFilm = `${newFilm.value.slice(1, 21)}...`;
            }  
            if (favorite) {
                console.log("Добавлен любимый фильм!");
            }
        movieDB.movies.push(newFilm); //Пушим - добавляем в конец массива новый элемент
        sortArr(movieDB.movies); // Отсортируем список фильмов по алфавиту
        createMoviList(movieDB.movies, ffffilm1s);
        name.target.reset();
        }   
    });
    
  
    deleteAdv(delAds);
    makeChanges();
    createMoviList(movieDB.movies, ffffilm1s);
    console.log(movieDB.movies);
    });




