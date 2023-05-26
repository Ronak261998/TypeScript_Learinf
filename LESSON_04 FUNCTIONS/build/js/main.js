"use strict";
//TYPE ALIAS
//Literal types
let myName;
// myName = "Gupta" gives error
let userName;
userName = "Ronak";
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("HELLO!");
logMsg(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a:number , b:number) : number
// } 
let multuply = function (c, d) {
    return c * d;
};
logMsg(multuply(2, 3));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 2, 2));
logMsg(addAll(2, 2));
logMsg(sumAll(2, 2, 2));
logMsg(sumAll(undefined, 3));
//REST PARAMETERS
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg((total(10, 1, 2)));
//NEVER TYPE
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("Error");
};
