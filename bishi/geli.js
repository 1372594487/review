let [a, b, c, d, e] = 'hello'
// console.log([a,b,c,d,e]);


// var Foo = function () {
//     getName = function () {
//         console.log(1);
//     }
//     console.log(this);
//     return this;
// }

// Foo.getName = function () {
//     console.log(2);
// }

// Foo.prototype.getName = function () {
//     console.log(3);
// }

var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}

getName()
// Foo.getName()
// Foo().getName();
// getName();
// new Foo().getName()


