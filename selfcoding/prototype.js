// 原型链继承
// function SuperType(){
//     this.color = ['red','yellow','blue','green']
// }
// function SubType(){
// }
// 继承
// SubType.prototype = new SuperType();

// let instance1 = new SubType();
// instance1.color.push('black')
// console.log(instance1.color);
// ['red', 'yellow', 'blue', 'green', 'black']
// let instance2 = new SubType();
// console.log(instance2.color);
// ['red', 'yellow', 'blue', 'green', 'black']

/* 
缺点1：原型中包含的引用值会在所有实例中共享。
在使用原型实现继承时，原型实际上变成了另一个类型的实例。这意味着原先的原型实例属性成为了原型属性。
缺点2：子类型在实例化时不能给父类型的构造函数传参。
*/



// 盗用构造函数
// 目的；解决原型包含引用值导致的问题
// 思路：在子类构造函数中调用父类构造函数。因为毕竟函数就是在特定上下文中执行代码的简单对象，可使用apply()和call()方法以新创建的对象为上下文执行构造函数。

// function SuperType(){
//     this.color = ['red','yellow','blue','green']
// }

// function SubType(){
//     // 继承
//     SuperType.call(this);
// }

// let instance1 = new SubType();
// instance1.color.push('black')
// console.log(instance1.color);
// // ['red', 'yellow', 'blue', 'green', 'black']
// let instance2 = new SubType();
// console.log(instance2.color);
// // ['red', 'yellow', 'blue', 'green']

/*
相比使用原型链，盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参。 
 */

// function SuperType(name){
//     this.name = name
// }

// function SubType(){
//     //继承
//     SuperType.call(this,"Nicholas");
//     //实例属性
//     this.age = 29
// }

// let instance1 = new SubType();
// console.log(instance1.name);
// console.log(instance1.age);
/* 
缺点1：使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用。
缺点2：子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式
 */



//组合继承（伪经典继承）
function SuperType(name){
    this.color = ['red','yellow','blue','green']
    this.name = name
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    // 继承属性
    SuperType.call(this,name)
    this.age = age
}

// 继承方法
SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function(){
    console.log(this.age);
}

let instance1 = new SubType("A",29)
instance1.color.push('white')
console.log(instance1.color);
console.log(instance1);
instance1.sayName()
instance1.sayAge()
let instance2 = new SubType('B',20)
instance2.sayName()
instance2.sayAge()

// 这两个实例都有自己的属性，同时还共享相同的方法。而且组合继承也保留了instanceof操作符合isPrototypeOf()方法识别合成对象的能力