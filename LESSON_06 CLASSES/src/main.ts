class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//    secondLang! : string 


  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string = "TypeScript"
    ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  /**
   * getAge
   */
  public getAge() {
    return `Hello , I am ${this.age}`
  }
}


const Ronak = new Coder("Ronak" , "LALALA" , 24)
console.log(Ronak.getAge())
// console.log(Ronak.lang)
console.log(Ronak.name)


class WebDev extends Coder {
    constructor(public computer: string ,
        name: string , 
        music: string , 
        age: number,
        ){
            super(name , music , age )
             this.computer = computer
        }

        public getLang() {
            return `I write ${this.lang}`
        }
        
}

const sara = new WebDev('Mac' , 'Sara' , 'Lofi' , 29);
console.log(sara.getLang());
console.log(sara.name)
// console.log(sara.lang)
console.log(sara.music)

////////////////////////////////////

interface Musician {
    name:string,
    instrument : string,
    play(aciton: string) : string

}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name : string , instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(aciton: string): string {
        return `${this.name} ${aciton} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy' , 'guitar')
console.log(Page.play('strums'));


class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name :string){
        this.name = name
        this.id = ++Peeps.count //++ strted from one ID
        }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(John.id)
console.log(Steve.id)
console.log(Amy.id)
console.log(Peeps.count)

///////////////////

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data (value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        }else throw new Error('param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Ronak' , 'Gupta']
console.log(MyBands.data);
MyBands.data = [...MyBands.data , "Manju"]
console.log(MyBands.data);
MyBands.data = ['Ronak', 23] 






