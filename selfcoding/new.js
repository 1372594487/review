function myNew(...args) {
    const Constructor = args[0]
    const o = Object.create(Constructor.prototype)
    const res = Constructor.apply(o, args.slice(1))
    return res instanceof Object ? res : o
}

function myNewII(...args) {
    let obj = {};
    const Constructor = args[0]
    obj.__proto__ = Constructor.prototype;
    let res = Constructor.apply(obj, ...args)
    return Object.prototype.toString.call(res) === '[Object object]' ? res : obj
}

// 使用
function P(v) {
    this.v = v
}
const p = myNew(P, 1) //P{v:1}

// 第一个参数作为构造函数，其余参数作为构造函数参数
// 继承构造函数原型创建新对象
// 执行构造函数
// 结果为对象，返回结果，反之，返回新对象

// 创建一个空的简单JavaScript对象（即{}）；
// 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。