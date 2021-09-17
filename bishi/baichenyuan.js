var length = 10
function fn() {
    console.log(this);
    alert(this.length)
}
var obj = {
    length:5,
    callApi:function(fn){
        console.log(this,arguments[0]);
        fn();
        arguments[0]();
    }
}
obj.callApi(fn,2)

var x = 21;
var girl = function(){
    console.log(x)
    var x = 20;
}
girl()

function foo(sth){
    this.a = sth
}

var obj1 = {
    foo:foo
}
var obj2 = {}

obj1.foo(2)

console.log(obj1.a);

obj1.foo.call(obj2,3)
console.log(obj2.a);

var bar = new obj1.foo(4)
console.log(obj1.a);
console.log(bar.a);