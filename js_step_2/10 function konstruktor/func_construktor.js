"use strict";

const num = new Number(3);
console.log(num); //[Number: 3]




// Функция
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
const moomn = new User('Moonnd', 28); 


User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28); 
const alex = new User('Alex', 20);

ivan.exit(); //Пользователь Ivan ушел
moomn.exit();

console.log(ivan); //User { name: 'Ivan', id: 28, human: true }
console.log(alex); //User { name: 'Alex', id: 20, human: true }
console.log(moomn);
ivan.hello(); //Hello Ivan
alex.hello(); //Hello Alex

const alexdaaaa = new User('alexdaaaa', 20, false);
console.log(alexdaaaa);