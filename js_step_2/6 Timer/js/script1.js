window.addEventListener('DOMContentLoaded', () => {

    const oblastTab = document.querySelector('.tabheader__items');
    const allTabs = document.querySelectorAll('.tabheader__item');
    const tabsDescr = document.querySelectorAll('.tabcontent');

    //1. В начале убираем весь контент для табов, чтобы оно не налазили друг на друга
    function hideDescr () {
        tabsDescr.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        allTabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });}

    //2 Показываем контент для 1-го таба
    function showDescr (i=0) {
        tabsDescr[i].classList.add('show');
        tabsDescr[i].classList.remove('hide');
        allTabs[i].classList.add('tabheader__item_active');}

    //3 Делаем табы
    oblastTab.addEventListener('click', (i) => {
        console.log(i);
        const target = i.target;
        console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            allTabs.forEach((tab, nomer) => {
                if (target == tab) {
                    hideDescr();
                    showDescr(nomer);
                }
            });
        }
    });



    hideDescr();
    showDescr();


    // TIMER
    //1. Определяем счётчик и получаем нужное время
    const deadline = '2022-06-30';
    function opredelyaemVremyaDoDedlaina () {
        const vsevremya = Date.parse(deadline) - Date.parse(new Date());
        const dni = Math.floor(vsevremya / (1000*60*60*24));
        const chasy = Math.floor((vsevremya / (1000*60*60)) % 24);
        const minuty = Math.floor((vsevremya / (1000*60)) % 60);
        const secundy = Math.floor((vsevremya / (1000)) % 60);
        return [dni, chasy, minuty, secundy, vsevremya];
    }

    function dobavlyaenNol (vremya) {
        if (vremya >= 0 && vremya < 10) {
            return `0${vremya}`;
        }
        return vremya;
    }

    function ustanovkaSelectorov () {
        const ustanovka = opredelyaemVremyaDoDedlaina(deadline);
        let timer = document.querySelector('.timer');
        timer.querySelector('#days').innerHTML = dobavlyaenNol(ustanovka[0]);
        timer.querySelector('#hours').innerHTML = dobavlyaenNol(ustanovka[1]);
        timer.querySelector('#minutes').innerHTML = dobavlyaenNol(ustanovka[2]);
        timer.querySelector('#seconds').innerHTML =dobavlyaenNol(ustanovka[3]);
        const ObnovlyaemInterval = setInterval(ustanovkaSelectorov, 1000);
        if (ustanovka[4] <= 0) {
            clearInterval(ObnovlyaemInterval);
        }
        //timer.querySelector('#days').innerHTML = (ustanovka[1]);
        //den.innerHTML = (ustanovka[1]);
        //hours.innerHTML = (ustanovka[2]);
        //minutes.innerHTML = (ustanovka[3]);
        //seconds.innerHTML = (ustanovka[4]);
    }


    ustanovkaSelectorov();


});

