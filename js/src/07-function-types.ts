export {}

//a:number,b:number,返回值类型:string
function func1(a:number,b:number):string{
    return 'func1'
}
// 可选参数 c?:number 可传可不传 默认参数b:number = 10
// 任意个数参数 es6 rest 操作符 ...rest:number[] 
function func2(a:number,b:number = 10,c?:number,...rest:number[]):string{
    return 'func1'
}
// 函数表达式
const func3 = function(a:number,b:number):string{
    return 'func2'
}
// 如果是回调函数使用箭头函数的方式
const func4:(a:number,b:number)=>string = function (a:number,b:number) :string {return'func4'}
