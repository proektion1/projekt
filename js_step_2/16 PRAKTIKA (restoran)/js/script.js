//1. Сделать меню с табами
//2. Сделать таймер
//3. Открыть модальные окна и закрыть (закрыть по кнопке, клику вне формы и клавише Esc)
//4. Автоматическое модальное окно через 3 секунды + при скролле в самый низ


const tabContent = document.querySelectorAll('.tabcontent');
const oblastMenu = document.querySelector('.tabheader__items');
const menuTab = oblastMenu.querySelectorAll('.tabheader__item');

function hide() {
tabContent.forEach(element => {
    element.classList.add('hide');
});
menuTab.forEach(element => {
    element.classList.remove('tabheader__item_active');
});
}
function showMenu (i=0) {
    tabContent[i].classList.add('show');
    tabContent[i].classList.remove('hide');
    menuTab[i].classList.add('tabheader__item_active');
}

hide();
showMenu();

oblastMenu.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
        menuTab.forEach((element, i) => {
            if (element == target) {
                hide();
                showMenu(i);
            }
        });
    }
});


const vremyaNaStr = document.querySelector('.timer');
const days = vremyaNaStr.querySelector('#days');
const hours = vremyaNaStr.querySelector('#hours');
const minutes = vremyaNaStr.querySelector('#minutes');
const seconds = vremyaNaStr.querySelector('#seconds');
const deadline = '2022-06-27';
vyvodimVremya();

function smotrimVremya () {
    const vremya = Date.parse(deadline) - Date.parse(new Date());
    const day = Math.floor(vremya / (1000*60*60*24));
    const hour = Math.floor(vremya / (1000*60*60) % 24);
    const min = Math.floor(vremya /  (1000*60) % 60);
    const sec = Math.floor((vremya / 1000) % 60);
    return {
        vremya: vremya,
        day: day,
        hour: hour,
        min: min,
        sec: sec
    };
}

function getZero (i) {
    if (i>=0 && i< 10) {
        return `0${i}`;
    }
    return i;
}

function vyvodimVremya() {
    const retVremya = smotrimVremya();
    days.innerHTML = getZero(retVremya.day);
    hours.innerHTML = getZero(retVremya.hour);
    minutes.innerHTML = getZero(retVremya.min);
    seconds.innerHTML = getZero(retVremya.sec);
    const x = setInterval(vyvodimVremya, 1000);
    if (retVremya.vremya <= 0) {
        clearInterval(vyvodimVremya);
    }
}
vyvodimVremya();


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalBtn = document.querySelectorAll('[data-modal]');

const modalTimerId = setTimeout(showModal, 3000);


function showModal () {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); // Если юзер сам открыл, то через время не открываем
    window.removeEventListener('scroll', showModalByScroll);

}

function closeModal () {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

modalBtn.forEach(element => {
    element.addEventListener('click', showModal);
    
});
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});


function showModalByScroll () {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        window.removeEventListener('scroll', showModalByScroll); // сбросить обработчик, чтобы каждый раз не вызывался при прокрутке вниз
      }
}
window.addEventListener('scroll', showModalByScroll);