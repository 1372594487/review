Function.prototype.myApply = function (_this, args = []) {
    if (!_this) _this = new Object(null)
    _this.fn = this
    const res = _this.fn(...args)
    delete _this.fn
    console.log(res);
    return res
}

function sum(a, b) {
    return a * b
}
sum.myApply(null, [2, 5])