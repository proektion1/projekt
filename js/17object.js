"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};
console.log(options.name);
//delete options.name;
console.log(options); // выводит массив
console.log(Object.keys(options)); // выводит объекты массива
console.log(Object.keys(options).length); //4 выводит кол-во объектов
console.log(Object.entries(options));


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
        console.log(`Свойств1а ${i} имеет значение ${options[key][i]}`);
        //counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }

}
console.log(counter);


// Тестовый объект (для запоминания)

const miniBD = {
    type: 'short',
    print: 'hanna',
    kolvo: 78,
    tag: 'hanna_m',
    uri: 'h78',
    color: {
        line: 'red',
        topii: 'blue',
        general: 'red',
    },
    makeTest: function() {
        console.log("Test");
    },
};
miniBD.makeTest();



//ДЕСТРУКТУРИЗАЦИЯ - быстрое получение объектов
const {line, topii} = miniBD.color;
console.log(line);
console.log(topii);
//




console.log(Object.keys(miniBD));
console.log(Object.keys(miniBD).length);
console.log(Object.values(miniBD));
console.log(Object.entries(miniBD));
//console.log(miniBD);
//console.log(miniBD.print);
/* for (let key in miniBD) {
    //console.log(miniBD[key]);
    console.log(`Свойство ${key} иммеет значение ${miniBD[key]}`);
} */

for (let key in miniBD) {
    if (typeof(miniBD[key]) === 'object') {
        for (let i in miniBD[key]) {
            console.log(`Свойство ${i} в объекте ${key} иммеет значение ${miniBD[key][i]}`);
        }}
        else {
            console.log(`Свойство ${key} иммеет значение ${miniBD[key]}`);
        }
    }
