'use strict';
var globalvar=5;
function iLoveThis(){
    console.log('Awesome Programming');
    globalvar--;
}
console.log();
setTimeout(iLoveThis,500);
setTimeout(iLoveThis,5000);
setTimeout(iLoveThis,0);
console.log();