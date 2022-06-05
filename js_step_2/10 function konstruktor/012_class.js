"use strict";

class Rectangle  {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //создадим какой-нибудь метод
    calcArea () {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 2);
// тут лужит объект, у которого есть 2 св-ва height и width, и метод calcArea
const long = new Rectangle(18, 2); // это ЭКЗЕМПЛЯРЫ

console.log(square.calcArea());
console.log(long.calcArea());
