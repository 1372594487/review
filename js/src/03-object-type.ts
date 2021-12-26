export {}
// object 对象类型并不单指普通对象
const foo: object = function(){} //{} []
// 定义普通对象需要使用字面量方式定义
// 赋值的对象结构必须与定义的类型一致（不能多也不能少）
const obj:{foo:number,bar:string} = {foo:123,bar:'sting'}
// ts中对象类型的限制 可以使用字面量的方式，更专业的方式是使用接口