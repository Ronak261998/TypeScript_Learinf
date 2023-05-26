"use strict";
//convert to more specific and less specific
let a = "hello";
let b = a; //less specific
let c = a; //More specific
let d = "world";
let e = "World";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat') //this line give error
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS Sees no problem but a string a returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10; //two assertion 
//THE DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src; //we need to use HTMLImageElement
myImg.src;
