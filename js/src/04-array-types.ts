// 数组
const arr1: Array<number> = [1, 2, 3]
const arr2: number[] = [1, 2, 3]

// 强类型优势
function sum(...args: number[]) {
    // 判断每个成员的数据类型 是否都是数字
    return args.reduce(reducer, 0)
}
function reducer(prev: number, current: number) { return prev + current }

// 传入含有非数字的数组会报错
// sum(1,2,3,'s') // Argument of type 'string' is not assignable to parameter of type 'number'

/* 
Array.prototype.reduce()
语法：arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])9f
Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
*/