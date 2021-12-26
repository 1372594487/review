// 隐式类型推断
// ts 中 如果没有明确通过类型注解去标记类型,ts会根据使用情况去推断类型
let age = 18 //number
// age = 'string'  //Type 'string' is not assignable to type 'number'.
let foo  //any
foo =100
foo = 'string'
export {}