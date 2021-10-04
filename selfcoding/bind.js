Function.prototype.myBind = function (_this, ...args) {
    const fn = this
    return function F(...args2) {
        return this instanceof F ? new fn(...args, ...args2)
            : fn.apply(_this, args.concat(args2))
    }
}

//使用
function Sum(a, b) {
    this.v = (this.v || 0) + a + b
    return this
}
const NewSum = Sum.myBind({v:1},2)
NewSum(3) //调用：{v:6}
new NewSum(3) //构造函数：{v:5} 忽略myBind 绑定this

// 第一个参数接收this对象
// 返回函数，根据使用方式


// 直接调用
// 改变this指向，拼接参数，调用函数
// 构造函数
// 不改变this指向，忽略第一参数，拼接函数，new参数
function myBindII (_this,args){
    const fn = this
    return function F(args2){
        this instanceof F ? fn.apply(_this,args,args2):
        new fn(args.concat(args2))
    }
}