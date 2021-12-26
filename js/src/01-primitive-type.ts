(() => {
    // 基本语法
    // let变量名：数据类型 = 值
    let flag: boolean = true
    console.log(flag);
    // 数字类型
    let t1: number = 10 //10进制
    let t2: number = 0b1010 //2进制
    let t3: number = 0o12 //8进制
    let t4: number = 0xa //16进制
    console.log(t1,t2,t3,t4);

    /* 原始数据类型 */
    // 非严格模式下 string number boolean 都能为空
    const a: string = 'foobar'
    const b: number = 100
    const c: boolean = true
    // const d: boolean = null
    const e: void = undefined
    const f:null = null
    const g:undefined = undefined
    // es6新增的内置对象 Symbol,
    // 修改 tsconfig target 为es2015;
    // 使用 lib指定标准库（内置对象使用的声明文件）：['es2015','DOM'];没'DOM'设置es2015后console报错,"DOM"已经将BOM、DOM集合起来
    const h:symbol =Symbol()
    // setting 中设置提示 typescript local 为中文


})