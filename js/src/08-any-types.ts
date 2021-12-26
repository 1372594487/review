function stringify(value:any){
    return JSON.stringify(value)
}

stringify('string')
stringify(100)
stringify(false)
let foo:any = 'string'
foo = 100
foo.bar()
// ts 语法上不会对any 进行类型检查 
// ts 不安全
export{}