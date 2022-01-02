export {}
// class Person {
//     eat(food:string):void{
//         console.log(`人吃:${food}`);
//     }
//     run(distance:number){
//         console.log(`人跑:${distance}`);
        
//     }
// }
// class Animal {
//     eat(food:string):void{
//         console.log(`动物吃:${food}`);
//     }
//     run(distance:number){
//         console.log(`动物跑:${distance}`);
        
//     }
// }
interface Eat{
    eat(food:string):void
}
interface Run{
    eat(food:string):void
}
class Person implements Eat,Run{
    eat(food:string):void{
        console.log(`人吃:${food}`);
    }
    run(distance:number){
        console.log(`人跑:${distance}`);
        
    }
}
class Animal implements Eat,Run {
    eat(food:string):void{
        console.log(`动物吃:${food}`);
    }
    run(distance:number){
        console.log(`动物跑:${distance}`);
        
    }
}