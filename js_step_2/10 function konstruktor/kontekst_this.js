"use strict";


const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
    console.log(this); //<button></button>
});


// когда написано в классическом режиме через function(), то
// в этом случае контект вызова будет сам элемент, на кот произошло событие
// т.е. e.target если заменить на стрелочную, то будет андефаид


//У стрелочной функции нет контекста вызова,
//она всегда будет брать его у своего родителя
const obj = {
    num: 5,
    saynumber: function() {
        const say = () => {
            console.log(this); //{ num: 5, saynumber: [Function: saynumber] }
        };
        say();
    }
};

obj.saynumber();





const double = a => a * 2;
console.log(double(5));






/* function showThis () {
    console.log(this);
}
showThis(); */

// 1) Обычная функция: this = window, но если стоит "use strict" то будет undefined

/* function showThis1 (a, b) {
    console.log(this); //undefined
    function sum() {
        console.log(this); //undefined
        return a + b;
    }
    console.log(sum());
}
showThis1(4, 5); */



const obj1 ={
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        //console.log(this);
        shout();
    }
};
obj1.sum();
/* {
    "a": 20,
    "b": 15
} */
// Контекст у методов ОБЪЕКТА будет сам объект

/* 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
const ivan = new User('Ivan', 28);  */
//3 THIS  в конструкторах и классах - это новый экземпляр объекта



//4
/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']); */
/* 
{ name: 'John' }
JohnSmith
{ name: 'John' }
JohnSmith 
*/
/* function count(num) {
    return this*num; // в this будет передаваться 2
}
const double = count.bind(2);
console.log(double(3));
console.log(double(12)); */
//4 метод - ручная привязка this.: call, apply, bind