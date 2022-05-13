"use strict";
let a = 5,
    b = 10;
b = a + 5;
console.log(b); //10
console.log(a); //5

const obj = {
    a: 5,
    b: 1,
};
const copy = obj; // ЗДЕСЬ ПЕРЕДАЁТСЯ ЗНАЧЕНИЕ ПО ССЫЛКЕ
                  // в  copy кладётся ссылка
console.log(copy); //{ a: 5, b: 1 }

copy.a = 10;

console.log(copy); //{ a: 10, b: 1 }
console.log(obj); //{ a: 10, b: 1 } СТРАНННО!!! СМ 12 строку



/* 1 способ */
//ДЕЛАЕМ КЛОНИРОВАНИЕ ЧЕРЕЗ ФУНКЦИЮ
function copppy(PARAMETR) {         // СОЗДАЕМ ФУНКЦИЮ
    let objCopy = {};               // создаём пустой объект, чтобы туда записать значения  
    for (let key in PARAMETR) {     // Перебираем ключи (свойства) в пеереданном PARAMETR
       objCopy[key] = PARAMETR[key];//значение PARAMETR передаем в пустой objCopy
    }
    return objCopy;                 //возвращаем objCopy из функции во внешнюю среду
}



const numbers = {
    a: 2, // свойство а которое равно 2
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

/* const newNumbers = copppy(numbers); //КЛОНИРУЕМ!!!
console.log(newNumbers);// ПРОВЕРЯЕМ { a: 2, b: 5, c: { x: 7, y: 4 } }
newNumbers.a = 8888;    //МЕНЯЕМ значение свойства
console.log(newNumbers); //{ a: 8888, b: 5, c: { x: 7, y: 4 } }
console.log(numbers);   // { a: 2, b: 5, c: { x: 7, y: 4 } } */

/* Когда мы так клонируем объекты, нужно запомнить, 
что есть глубокие и поверхностные копии. 
Когда нет вложенных объектов или массивов – 
поверхностные отрабатывают хорошо (как у нас), 
но если в массиве были вложенные объекты, 
то у вложенных снова будет передача по ссылке! */


/* 2 способ */
/* Добавляем к объекту ещё 1 объект */
const lulu = {
    asa: 43,
    tt: 65,
};
const add = {
    d: 17,
    i: 20
};
//console.log(Object.assign(lulu, add)); СКЛАДЫВАЕМ
const gggg = Object.assign(lulu, add); // ЗАВИСИМЫЙ lulu поверхностный
const gggg1 = Object.assign({}, add); //НЕЗАВИСИМЫЙ поверхностный
console.log(lulu);

/* Самый простой способ клонирвоать объект: */
const namePer = Object.assign({}, add); // add - объект, который нужно скопировать


/* 3 способ - ТОЛЬКО с МАССИВОМ
Метод slice() возвращает новый массив, 
содержащий копию части исходного массива. */
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'dsfsdf';
console.log(newArray); //[ 'a', 'dsfsdf', 'c' ]
console.log(oldArray); //[ 'a', 'b', 'c' ]



/* 4 способ - оператор разворота - для массива и объектов*/
/* СПРЕД оператор */
const   video = ['youtube', 'vimio', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        inernet = [...video, ...blogs, 'vk', 'facebook'];
console.log(inernet);
/* [
    'youtube',
    'vimio',
    'rutube',
    'wordpress',
    'livejournal',
    'blogger',
    'vk',
    'facebook'
  ] */
console.log(inernet[1]); //vimio
inernet[1] = 3434;
console.log(inernet);
/* 
'youtube',
3434,
'rutube',
'wordpress',
'livejournal',
'blogger',
'vk',
'facebook' 
*/


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);
/* 
2
5
7 
*/
const array = ["a", "b"];
const newAaray = [...array];
console.log(newAaray); //[ 'a', 'b' ]
console.log(newAaray[1]); //b



const q = {
    one: 1,
    two: 2,
};
const newObj = {...q};
console.log(newObj); //{ one: 1, two: 2 }
console.log(newObj.one); //1


gggg1.d = 700;
console.log(gggg1);
console.log(add);

//console.log(gggg);
gggg.i = 500;
gggg.asa = 700;
console.log(gggg);
console.log(lulu);
console.log(add);




/* САМОСТОЯТЕЛЬНАЯ 
РАБОТА */
function myCopyHome (newObject) {
    let cloneObj = {};
    for (let x in newObject) {
        cloneObj[x] = newObject[x];
    }
    return cloneObj;
}
const secObj = {
    f: 64,
    a: 54,
    utu: 55,
    faer: {
        gf: 45,
        hg: 54,
    }
};
//const yohoo = myCopyHome(secObj); // КЛОНИРУЕМ


const yoho22 = Object.assign({}, secObj);
console.log(yoho22);
yoho22.f = 53434;
yoho22.faer.gf = 55555;
console.log(yoho22);
console.log(secObj);


console.log(yohoo);
yohoo.utu = 900;
yohoo.faer.gf = 73737373; // ТУТ БУДЕТ передача по ссылке (так как вложенный объект)
console.log(yohoo);
console.log(secObj);








