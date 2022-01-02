export {}

class Person{
    public name:string // 默认的修饰符
    private age:number //*只允许内部访问
    protected gender:boolean //*只允许子类访问的成员

    constructor(name:string,age:number){
        this.name = name
        this.age = age
        this.gender = true
    }

    say(msg:string):void{
        console.log(`say ${this.name},${msg}`);
    }
}

class Student extends Person{
    // 换成protected 同样不能被外部访问，但与private不同，允许继承
   private constructor(name:string,age:number){
        super(name,age)
        console.log(this.gender);
    }
static create(name:string,age:number){
    return new Student(name,age)
}
}

const tom = new Person('tom',18)
// console.log(tom.age); //Property 'age' is private and only accessible within class 'Person'
// console.log(tom.gender); //Property 'gender' is protected and only accessible within class 'Person' and its subclasses
