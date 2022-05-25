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

});

