Function.prototype.myCall = function(_this,...args){
    if(!_this) _this = Object.create(null)
    _this.fn = this
    const res = _this.fn(...args)
    delete _this.fn
    console.log(res);
    return res
}
//使用
function sum (a,b){
    return this.v + a + b
}
function sumII(a,b){
    return a + b
}
sum.myCall({v:1},2,3) // 6
sumII.myCall(null,2,3)