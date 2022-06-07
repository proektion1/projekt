//==========Сделать табы в меню (Выберите стиль питания)
//1. В начале убираем весь контент для табов, чтобы оно не налазили друг на друга   
/* Также убираем активный стиль у табов
Показываем контент для 1-го таба
скрываем контент табов и активный стиль у кнопки
Показываем контент 1 таба (0 индекс псевдомассива) и добавляем активный ксс
3 Делаем табы по нажатию */
		 
		
//2. Сделать таймер		 
// TIMER
//1. Определяем сколько дней, часов, минут до deadline (2022-06-30)
// Если 5 дней, то выводить 05 дней/ Также с секундами и т.д.
//ЧТобы не моргала верстка timeInterval = setInterval(updateClock, 1000);
// 1000 (1 сек) не нужно было ждать. Запустим 1 раз вручную		 
		 
/* Задача 9
Открытие модальных окон на 2 кнопках
Закрытие модального окна через крестик 
Закрытие модального окна через кнопку ескейп


Задача 10
Появление модального окна через 8 секунд
Если форму юзер получил сам через кнопку - больше не показывать
Когда долистали до конца - показать форму
Форма не должна появляться каждый раз при долистывании (только 1 раз) */

const tabContent = document.querySelectorAll('.tabcontent');
const vseTaby = document.querySelector('.tabheader__items');
const tab = vseTaby.querySelectorAll('.tabheader__item');


function hide() {
	tabContent.forEach(item => {
		item.classList.add('hide');
		item.classList.remove('show');
	});
	tab.forEach(item => {
		item.classList.remove('tabheader__item_active');
	});
}

function show(item = 0) {
	tabContent[item].classList.add('show');
	tabContent[item].classList.remove('hide');
	tab[item].classList.add('tabheader__item_active');
}

hide();
show();

vseTaby.addEventListener('click', (e) => {
	let target = e.target;
	if (target && target.classList.contains('tabheader__item')) {
		tab.forEach((btn, i) => {
			if (btn == target) {
				hide();
				show(i);
			}
		});
	}
});

const timer = document.querySelector('.timer');
const days = timer.querySelector('#days');
const hours = timer.querySelector('#hours');
const minutes = timer.querySelector('#minutes');
const seconds = timer.querySelector('#seconds');
const deadline = '2022-06-30';
function opredvremya() {
	const AllTimeSec = Date.parse(deadline) - Date.parse(new Date());
	const dni = Math.floor(AllTimeSec / (1000*60*60*24));
	const hour = Math.floor(AllTimeSec/(1000*60*60) % 24);
	const minute = Math.floor(AllTimeSec/(1000*60) % 60);
	const sec = Math.floor(AllTimeSec/(1000) % 60);
	return {
		AllTimeSec: AllTimeSec,
		dni: dni,
		hour: hour,
		minute: minute,
		sec: sec
	};
}

function zero(x) {
	if (x>=0 && x< 10) {
		return `0${x}`;
	}
	return x;
}
pishemVremya ();

function pishemVremya () {
	const t = opredvremya(deadline);
	days.innerHTML = zero(t.dni);
	hours.innerHTML = zero(t.hour);
	minutes.innerHTML = zero(t.minute);
	seconds.innerHTML = zero(t.sec);

	const timeInterval = setInterval(pishemVremya, 1000);
	if (t.AllTimeSec <= 0) {
		clearInterval(timeInterval);
	}
	
}

const knopka = document.querySelectorAll('[data-modal]');
const okno = document.querySelector('.modal');
const closeKnopka = document.querySelector('.modal__close');

knopka.forEach(element => {
	element.addEventListener('click', () => {
		okno.classList.add('show');
		okno.classList.remove('hide');
	});
});
closeKnopka.addEventListener('click', () => {
	okno.classList.add('hide');
	okno.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape" && okno.classList.contains('show')) {
		//event code смотреть в интернете
		// Код работает только когда открыто модальное окно
		okno.classList.add('hide');
	okno.classList.remove('show');
	}
 });

 okno.addEventListener('click', (e) =>{
	if (e.target === okno) {
		okno.classList.add('hide');
		okno.classList.remove('show');
	}
 });