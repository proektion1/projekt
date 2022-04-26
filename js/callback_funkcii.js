"use strict";


function first () {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учю: ${lang}`);
    callback();
}
learnJS('Javascript', function() {
    console.log('Я прошёл этот урок!');
})