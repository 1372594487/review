export {}

class Persion{
    name:string  // = 'init name'
    age:number //Property 'age' has no initializer and is not definitely assigned in the constructor
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(msg:string): void{
        console.log(`say ${this.name},${msg}`);

    }
}