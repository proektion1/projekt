"use strict";

const p = document.querySelectorAll('p');
console.log(p);

function scriptLoad (src) {
const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);
}
scriptLoad("js/test.js");
scriptLoad("js/hello.js");
