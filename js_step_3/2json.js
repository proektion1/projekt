"use strict";

const person = {
    name: "Alex",
    tel: "+7922222222",
};

console.log(JSON.stringify(person)); //{"name":"Alex","tel":"+7922222222"}
console.log(JSON.parse(JSON.stringify(person))); //{ name: 'Alex', tel: '+7922222222' }


const person2 = {
    name: "Alex",
    tel: "+7922222222",
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
const clone = JSON.parse(JSON.stringify(person2)); 
//clone совершенно неззависит от person2
// глубокая копия
clone.parents.mom="Ann";
console.log(person2);
console.log(clone);
/* { name: 'Alex',
    tel: '+7922222222',
    parents: { mom: 'Olga', dad: 'Mike' }}
  { name: 'Alex',
    tel: '+7922222222',
    parents: { mom: 'Ann', dad: 'Mike' }} */