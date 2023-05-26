type One = string;
type Two  = string | number;
type Three = 'hello'

//convert to more specific and less specific

let a : One = "hello";
let b = a as Two //less specific
let c = a as Three //More specific

let d = <One>"world"
let e = <string | number>"World"


const addOrConcat = (a:number , b:number  , c:'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a +b 
}

// let myVal: string = addOrConcat(2,2,'concat') //this line give error

let myVal: string = addOrConcat(2,2,'concat') as string

//Be careful! TS Sees no problem but a string a returned
let nextVal: number = addOrConcat(2,2,'concat') as number



// 10 as string
(10 as unknown) as string //two assertion 

//THE DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img') ;

img.src //we need to use HTMLImageElement
myImg.src
