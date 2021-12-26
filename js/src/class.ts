// ts中的类
(() => {
    // 接口
    interface IPerson {
        firstName: string //姓
        lastName: string //名
    }
    class Person {
        // 公共字段属性
        firstName: string //姓
        lastName: string //名
        fullName: string //姓名

        // 定义一个构造器函数
        constructor(firstName: string, lastName: string) {
            // 更新数据
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = `${this.firstName}_${this.lastName}`
        }
    }

    // 
    function showFullName(this: any, person:IPerson){
        return `${this.firstName}_${this.lastName}`
    }
    // 实例化对象
    const person = new Person('隔壁','小王')
    console.log(showFullName(person));
    
})()