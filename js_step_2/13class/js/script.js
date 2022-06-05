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





    // TIMER
    const deadline = '2022-06-30';

    //1. Определяем сколько дней, часов, минут до deadline (2022-06-30)
    function getTimeRemaning (deadline) {
        //получим МС в нашем конечном времени
        const t = Date.parse(deadline) - Date.parse(new Date()),
                //1000*60*60*24 -кол-во МС в суткахъ
                days = Math.floor(t / (1000*60*60*24)),
                // t/100*60*60 - общее кол-во часов до таймера
                // Общее кол-во часов делим на 24 и возвращаем остаток
                hours = Math.floor((t / (1000*60*60) % 24)),
                //кол-во минут в сутках
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
        
    }

    // Если 5 дней, то выводить 05 дней/ Также с секундами и т.д.
    function getZeroDney (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }

    function setClock(selector, deadline) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              //ежесекундное обновление счётчика
              timeInterval = setInterval(updateClock, 1000);
        
        //ЧТобы не моргала верстка timeInterval = setInterval(updateClock, 1000);
        // 1000 (1 сек) не нужно было ждать. Запустим 1 раз вручную
        updateClock();
        
        function updateClock() {
            const t = getTimeRemaning(deadline);
           /*в t запишется ретурн
             return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            }; */
            //console.log(t); //{total: 3033057000, days: 35, hours: 2, minutes: 30, seconds: 57}
            days.innerHTML = getZeroDney(t.days);
            hours.innerHTML = getZeroDney(t.hours);
            minutes.innerHTML = getZeroDney(t.minutes);
            seconds.innerHTML = getZeroDney(t.seconds);
            
            //если время прошло, остановить таймер
            if(t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);



    // МОДАЛЬНОЕ ОКНО
    const modalOpen = document.querySelectorAll('[data-modal]');
    const windowModal = document.querySelector('.modal');
    const windowModalClose = document.querySelector('[data-close]');

    console.log(modalOpen);
    console.log(windowModal);
    console.dir(windowModal);


//На весь псевдомассив нельзя повесить обработчик событий,
//поэтому его нужно перебрать
    modalOpen.forEach(knoplka => {
       // 1 способ. Через тоггл
      // windowModal.classList.toggle('show'); //если нет класс show, то добавляем
      //windowModal.style.display = 'block'; - если document.querySelector (т.е. 1 элемент)
      knoplka.addEventListener('click', openModal);
    });
 
        // Функция открытия окна
    function openModal () {
        windowModal.classList.add('show');
        windowModal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // нельзя прокручивать страницу
        clearInterval(modalTimerId); // Если юзер сам открыл, то через время не открываем
    }

    // 2. Закрываем окно
    function clozemodal () {
        windowModal.classList.add('hide');
        windowModal.classList.remove('show');
        document.body.style.overflow = '';
       
    }
    // Само закрытие
    windowModalClose.addEventListener('click', clozemodal);

    // Чтобы закрывать при клике ВНЕ области формы
    windowModal.addEventListener('click', (e) =>{
        if (e.target === windowModal) {
            clozemodal();
        }
     });

     //3 Закрываем через кнопку Ескейп
     document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && windowModal.classList.contains('show')) {
            //event code смотреть в интернете
            // Код работает только когда открыто модальное окно
            clozemodal();
        }
     });

     //4. Появление модального окна через 8 секунд
     // const modalTimerId = setTimeout(openModal, 8000);

      function showModalByScroll () {
        //pageYOffset - пикселей, на которое прокручен документ по вертикали (вниз или вверх). 
        //document.documentElement.clientHeight - высота видимой части экрана
        //document.documentElement.scrollHeight - полный размер окна с учётом прокрутки
        //прокрутили + сложили видиму часть и сравнили со всей высотой страницы
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // сбросить обработчик, чтобы каждый раз не вызывался при прокрутке вниз
          }
      }


      window.addEventListener('scroll', showModalByScroll);


      // Используем классы для карточек

      class MenuCard {
          constructor (src, alt, title, desc, price, parentSelector) {
            // Перечисляем св-ва
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.parent = document.querySelector(parentSelector); // '.menu .container'
            this.transfer = 3;
            this.changeToRub();
            
          }
          // ДЕЛАЕМ КОВЕРТАЦИЮ
          changeToRub() {
            this.price = +this.price * this.transfer;
          }
        // Перечисляем методы
          render() {
            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div></div>
            `;
            this.parent.append(element); // внутрь селектора методом append передадим element
          }

      }

      new MenuCard( // 1 раз покажет и не сохранит. Где-то вызвать не получится
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
      ).render(); 
      
      new MenuCard( // 1 раз покажет и не сохранит. Где-то вызвать не получится
      "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        11,
        '.menu .container'
      ).render(); 

      new MenuCard( // 1 раз покажет и не сохранит. Где-то вызвать не получится
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      12,
      '.menu .container'
    ).render(); 


});
