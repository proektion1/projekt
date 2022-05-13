"use strict";

/* let str = "some";
let strObj = new String(str);
console.log(typeof(str)); //string
console.log(typeof(strObj)); //object */

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const jonh = Object.create(solder);
jonh.sayHello(); // Hello





/* const jonh = {
    helth: 100,
};
jonh.__proto__ = solder; // устаревший стандарт
Object.setPrototypeOf(jonh, solder); // НОВЫЙ стандарт

console.log(jonh.armor); //100 - прототип солдата у джона
jonh.sayHello(); // Hello! */