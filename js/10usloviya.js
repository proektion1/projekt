"use strict";
if (4==4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;
 if (num<49) {
     console.log('Error');
 } else if (num>100) {
     console.log('More');
 } else {
     console.log ('Ok');
 }

 const ff = 50;
 (ff === 50) ? console.log ('Ok') : console.log('Error');


const yy = 50;
 switch (yy) {
     case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
     case 50:
        console.log('В точку!');
        break; 
    default:
        console.log('В другой раз!');
        break; 
 }