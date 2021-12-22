// ts中的类
(function () {
    var Person = /** @class */ (function () {
        // 定义一个构造器函数
        function Person(firstName, lastName) {
            // 更新数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    // 
    function showFullName(person) {
        return this.firstName + "_" + this.lastName;
    }
    // 实例化对象
    var person = new Person('隔壁', '小王');
    console.log(showFullName(person));
})();
