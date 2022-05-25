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






});