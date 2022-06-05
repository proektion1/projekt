"use strict";

const log = function (a, b, ...rest) {
    console.log(a, b, rest); 
}
log('basic', 'rest', 'oper', 'usage'); //basic rest [ 'oper', 'usage' ]


function calcOrDouble (numb, basic=2) {
    console.log(numb * basic);
}
calcOrDouble(3, 5); //15


