export { }

class Person {
    public name: string // 默认的修饰符
    private age: number //*只允许内部访问
    protected readonly gender: boolean //只读属性

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    say(msg: string): void {
        console.log(`say ${this.name},${msg}`);
    }
}


const tom = new Person('tom', 18)
