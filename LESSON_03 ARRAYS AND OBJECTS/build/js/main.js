"use strict";
//ARRAYS
let names = ["ronak", "gupta", "somya"];
let nameAge = ["Ronak", 24, "Gupta"];
let mixed = ["ronak", 24, true];
// names[0] = 23; can't assign number to string type object
names[0] = 'manju';
nameAge[0] = 23; //can assign number or string in an array as it has both data types 
nameAge[1] = "Ronak"; //can assign number or string in an array as it has both data types 
// nameAge[0] = true //ccan't assign boolean to this array 
//names consist only string type , SO it can be equal to aray that consist any other data types except string
// names = nameAge;  //WRONG
nameAge = names; //RIGHT
let test = []; //can push any daya type
test[0] = 1;
test[1] = "Ronak";
let life = ["Ronak", 1, true];
let life1 = ["Ronak", 1, true];
// life = life1; WRONG
life1 = life;
//OBJECTS
let myObj = [];
let myobj1 = {
    name: "Ronak",
    age: 27,
    life: true,
};
let myobj2 = {
    // name : "Somya",
    age: 23,
    life: false,
};
// myobj1 = myobj2;
const greet = (mixed) => {
    if (mixed.name) {
        return `Hello ${mixed.name.toUpperCase()}`;
    }
    return "HELLO";
};
console.log(greet(myobj2));
//ENUMS
var days;
(function (days) {
    // mon=1, tue , wed , thrus , fri , sat
    days["mon"] = "mon";
    days["tue"] = "tue";
})(days || (days = {}));
let whichDay;
console.log(days.mon);
