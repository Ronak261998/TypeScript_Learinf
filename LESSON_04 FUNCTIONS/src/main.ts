//TYPE ALIAS

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]


type Mixed = {
    name?: string,
    active:boolean,
    age:stringOrNumberArray
}

type userId = stringOrNumber;


//Literal types

let myName : "ronak"
// myName = "Gupta" gives error

let userName : 'Ronak' | 'Gupta' | 'Somu';
userName = "Ronak"



//Functions

const add = (a: number,b: number): number =>{
    return a+b
}

const logMsg = (message:any):void =>{
    console.log(message);
}

logMsg("HELLO!")
logMsg(add(2,3));

let substract = function(c:number , d:number) : number{
    return c -d 
}

type mathFunction = (a:number , b:number) => number
// interface mathFunction {
//     (a:number , b:number) : number
// } 

let multuply : mathFunction = function(c , d){
    return c * d;
}


logMsg(multuply(2,3));

//optional parameters

const addAll = (a:number , b:number , c?:number):number =>{
    if(typeof c !== "undefined"){
        return a+b+c;

    }
    return a+b;

}

//default param value
const sumAll = (a:number = 10 , b:number , c:number = 2):number =>{
   
    return a+b+c;

}

logMsg(addAll(2,2,2))
logMsg(addAll(2,2))
logMsg(sumAll(2,2,2))
logMsg(sumAll(undefined , 3))

//REST PARAMETERS

const total = (a:number , ...nums:number[]) : number=>{
    return  nums.reduce((prev, curr)=> prev+ curr)
}

logMsg((total(10,1,2)))

//NEVER TYPE
const createError = (errMsg:string):never=>{
    throw new Error(errMsg)
}


//custom type guard
const isNumber = (value:any)=>{
    return typeof value === 'number' ? true : false
}


//use of the never type
const numberOrString = (value: number | string): string=>{
        if(typeof value === 'string') return 'string'
        if(isNumber(value)) return 'number'
        return createError("Error")
}