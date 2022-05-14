"use strict";

//Какое будет выведено значение: let x = 5; alert( x++ ); ? 6
let x = 5; 

alert( x++ ); //5 делает сложение потом
alert( x++ ); //6
let xx = 11; 
alert( ++xx ); //12 сразу делает сложение


//Чему равно такое выражение: [ ] + false - null + true ?
console.log([ ] + false);         //false
console.log([ ] + false - null);   //Nan
console.log([ ] + false - null + true); //Nan
console.log(typeof([] + false)); //string
console.log(typeof([ ] + false)); //string
//Пустой массив - пустая строка



//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; 
let x = y = 2;  // так не пишут
console.log(x); //2

//Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); //12 
//[] - даст пустую строрку. дальнейшей сложение идёт, как сложение строк
console.log([] + 6);     //6
console.log([]);         //[] 


//Что выведет этот код: alert( "1"[0] )?
console.log( "1"[0] );     //1 - т.к.[0] - это индекс строки, т.е. 1
console.log( "1"[1] ); //undefined, так как только 0 индексов

//•	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); //null
console.log(2 && 1); //1
console.log(2 && 1 && null); //null
/* && - замыкается на ложном выражении, || замыкается на правде
после него код перестанет выполняться 
Идёт слева направо*/


/* •	Есть ли разница между выражениями? !!( a && b ) и (a && b)? */
console.log(!!( 1 && 2 ) === (1 && 2)); // FALSE т.к. !! всегда вернёт boolean false


/* •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ? */
console.log(null || 2 && 3 || 4); //3
/* && выполняется первее || т.к. из-за приоритета выполнения
1. 2 && 3 даст 3
2. null || 3, даст 3. 
3. далее 3 || 4 , а || замыкается на правде */
console.log(3 || 4); //3
console.log(3 && 4); //4



/* •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? */
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a==b); //false
// a и b - разные хранилища информации с одинаковыми значениями.
// Мы сравниваем не элементы, а сами хранилища, они разные



/* •	Что выведет этот код: alert( +"Infinity" ); ? */
console.log( +"Infinity" ); //Infinity + означает, что в строке числовое значение
console.log(typeof(+"Infinity"));//number



/* •	Верно ли сравнение: "Ёжик" > "яблоко"? */
console.log("Ёжик" > "яблоко"); //false идёт посимвольное сравнение "Ё не равно я"


/* •	Чему равно 0 || "" || 2 || undefined || true || falsе ? */
console.log(0 || "" || 2 || undefined || true || falsе); //2
/* 0 - false
"" - false
2 - true
2 || undefined  || замыкается на true */