"use stict";

function hello() {
    console.log("hello, world!");
}
hello();

function hi() {
    console.log("Say hi");
}
hi();

const arr = [1, 14, 4, 30, 54];

const sorted = arr.sort(compareNum);

function compareNum(a, b) {
        return a - b;
}
console.log(sorted);