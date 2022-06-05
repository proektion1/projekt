document.addEventListener('DOMContentLoaded', () => {


    const allTabs = document.querySelectorAll('.tabheader__item');
    const tabContent = document.querySelectorAll('.tabcontent');
    const oblastMenu = document.querySelector('.tabheader__items');



    //1. Скрываем всю инфу (табов
    function hidetabcontent () {
    tabContent.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
    allTabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });}

    //2. Показываем 1 таб
    function showTabInfo (i=0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
        allTabs[i].classList.add('tabheader__item_active');}
    
    //3. Делаем табы
    oblastMenu.addEventListener('click', (i) => {
        allTabs.forEach((tabs, nomer) => {
            if (i.target ==  tabs) {
                hidetabcontent();
                showTabInfo(nomer); 
            }
        });

        
    });

    hidetabcontent();
    showTabInfo();


// ТАБЫ

const deadline = '2022-08-09';

function schetVremeni () {
    const obsheevremya = Date.parse(deadline) - Date.parse(new Date()),
          dni = Math.floor(obsheevremya / (1000*60*60*24)),
          chasi = Math.floor((obsheevremya / (100*60*60)) % 24),
          minut = Math.floor((obsheevremya / (100*60)) % 60),
          sec = Math.floor((obsheevremya/1000) % 60);
          return {
              den: dni,
              chasi: chasi,
              minut: minut,
              sec: sec,
              total: total
          };
}

function nulik (beremvremya) {
    if (beremvremya >= 0 && beremvremya <10) {
        return `0${beremvremya}`;
    }
    return beremvremya;
}

function stavimSellector () {
    const blockVremeni = document.querySelector('.timer'),
          blockDays = blockVremeni.querySelector('#days'),
          blockChas = blockVremeni.querySelector('#hours'),
          blockMinut = blockVremeni.querySelector('#minutes'),
          blockSec = blockVremeni.querySelector('#seconds'),
            
          vremya = setInterval(stavimVremya, 1000);
          stavimVremya();
            function stavimVremya () {
                const znacheniyaVremeni = schetVremeni(deadline);
                    blockDays.innerHTML = nulik(znacheniyaVremeni.den);
                    blockChas.innerHTML = nulik(znacheniyaVremeni.chasi);
                    blockMinut.innerHTML = nulik(znacheniyaVremeni.minut);
                    blockSec.innerHTML = nulik(znacheniyaVremeni.sec);
                    if (znacheniyaVremeni.total <= 0) {
                        clearInterval(stavimVremya);
                    }
            }
            
    }
    stavimSellector();





// Модальные окна через toggle

const knopkaOpenOkno = document.querySelectorAll('[data-modal]');
const modOkno = document.querySelector('.modal');
const zakryt = document.querySelector('.modal__close');

// 1. Открываем модальное окно на всех кнопках
knopkaOpenOkno.forEach(knopki => {
    knopki.addEventListener('click', () => {
        modOkno.classList.toggle('show');
    });
});

//2. Закрытие мод окна
    function zzakritie () {
        modOkno.classList.toggle('show');
    }

    zakryt.addEventListener('click', zzakritie);

    modOkno.addEventListener('click', (e) => {
        if (e.target === modOkno) {
            zzakritie();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modOkno.classList.contains('show')) {
            zzakritie();
        }
    });

    



    class CardTovar {
        constructor (img, alt, title, des, price, mestoSelector) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.des = des;
            this.price = price;
            this.mesto = document.querySelector(mestoSelector);
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                    <img src=${this.img} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.des}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                </div>
            `;
            this.mesto.append(element);
        }
    }

    new CardTovar(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();
    new CardTovar(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        11,
        '.menu .container'
    ).render(); 
    new CardTovar(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        12,
        '.menu .container'        
    ).render();  

});