export { }
// 假设nums 来自一个明确的接口
const nums = [110, 113, 115, 120]
const res = nums.find(i => i > 0)
// ts无法
// const square = res + res //Object is possibly 'undefined'
// 断言 (断言不是转换,断言在编译阶段进行,转换是运行时进行)
const num1 = res as number
// 可能会与jsx格式冲突
const num2  = <number>res