export{}
abstract class Animal{
    eat(food:string):void{
        console.log(`吃${food}`);
    }
    abstract run(distance:number):void
}
class Dog extends Animal{
    run(distance:number):void{
        console.log(`跑${distance}`);
    }
}
const d = new Dog()
d.eat("屁")
d.run(100)