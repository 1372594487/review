export{}
// function createNumberArray (length:number,value:number):number[]{
//     const arr = Array<number>(length).fill(value)
//     return arr
// }
// function createStringArray (length:number,value:string):number[]{
//     const arr = Array<number>(length).fill(value)
//     return arr
// }
// 泛型
// 将定义时不能明确的类型变成一个参数，使用时再去传递该类型参数
// <T> 一般以T作为名称
function createArray<T>(length:number,value:T):T[]{
    const arr = Array<T>(length).fill(value)
    return arr
}
// const res = createNumberArray(3,100)
// console.log(res); // [100,100,100]
const res = createArray<string>(3,'')

