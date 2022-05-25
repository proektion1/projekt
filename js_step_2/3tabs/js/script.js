window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),     //получаем все табы
          tabsContent = document.querySelectorAll('.tabcontent'),   //контент для табов
          tabsParent = document.querySelector('.tabheader__items'); //родитель табов
        


    //1. В начале убираем весь контент для табов, чтобы оно не налазили друг на друга    

    function hideTabContent () {                                //Скрываем контент для табов
        tabsContent.forEach(item => {                           //Перебираем массив с табами
            //item.style.display = 'none';                        //Убираем со страницы
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        });
        //Также убираем активный стиль у табов
        tabs.forEach(item => {                                  
            item.classList.remove('tabheader__item_active');
        });
    }

    //2 Показываем контент для 1-го таба

    function showTabContent (i = 0) {       //объявляем функцию. i = 0 - сразу обращаемся к 1 эл. массива
        //tabsContent[i].style.display = 'block';     //ДОБАВЛЯЕМ БЛОЧНЫЙ КСС
        tabsContent[i].classList.add('show', 'fade');     //ДОБАВЛЯЕМ БЛОЧНЫЙ КСС
        tabsContent[i].classList.remove('hide');
        
        tabs[i].classList.add('tabheader__item_active'); //дОБАВЛЯЕМ АКТИВНЫЙ КЛАСС КСС
    }

    hideTabContent();  //скрываем контент табов и активный стиль у кнопки
    showTabContent(); //Показываем контент 1 таба (0 индекс псевдомассива) и добавляем активный ксс

    //3 Делаем табы

    tabsParent.addEventListener('click', (event) => { //event - инфа о месте клика (пузырьковая - блок или кнопка)
        const target = event.target;                //чтобы постоянно не писать event.target
        // target = <div class="tabheader__items"> ... </div> - если по области, а не по блоку
        // target = Бdiv class="tabheader__item">Постное</div> - если по конкретному блоку
        //console.log(target); - проверяем
        if(target && target.classList.contains('tabheader__item')) {
        //если мы кликнули по tabheader__items и конкретно по табам
            tabs.forEach((item, i) => { // перебираем все табы. item - таб, i - его номер
                if (target == item) {   //если мы нажали на кнопку под номером "i" и она равны табу, запускаем функцию
                    hideTabContent();   //скрываем
                    showTabContent(i);  //показываем
                }
            });

        }
    });



});
