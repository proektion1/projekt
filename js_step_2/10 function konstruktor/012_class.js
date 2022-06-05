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

class ColoredRectambleWithText extends Rectangle { //extends наследует все св-ва и методы Rectangle
    constructor (height, width, texx, bgColor) {
        super(height, width); // вызывает суперконструктор родителя, чтобы не копираовать this.height = height;
        this.texx = texx;
        this.bgColor = bgColor;
    }
    showMyPops () {
        console.log(`Текст: ${this.texx}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectambleWithText(25, 10, 'hello', 'red');

div.showMyPops();
console.log(div.calcArea());

/* console.log(square.calcArea());
console.log(long.calcArea()); */
