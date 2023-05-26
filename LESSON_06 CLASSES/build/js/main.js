"use strict";
class Coder {
    //   name: string;
    //   music: string;
    //   age: number;
    //   lang: string;
    //    secondLang! : string 
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    /**
     * getAge
     */
    getAge() {
        return `Hello , I am ${this.age}`;
    }
}
const Ronak = new Coder("Ronak", "LALALA", 24);
console.log(Ronak.getAge());
// console.log(Ronak.lang)
console.log(Ronak.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev('Mac', 'Sara', 'Lofi', 29);
console.log(sara.getLang());
console.log(sara.name);
// console.log(sara.lang)
console.log(sara.music);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(aciton) {
        return `${this.name} ${aciton} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; //++ strted from one ID
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
///////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Ronak', 'Gupta'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Manju"];
console.log(MyBands.data);
MyBands.data = ['Ronak',];
