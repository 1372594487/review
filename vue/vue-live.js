// 生命周期函数：就是vue在某个时间段会自动执行的函数
// 1.beforeCreate(){}在执行的时候，data还有methods都没有被初始化

// 2.created(){} data还有methods都被初始化好了，如果要调用methods方法或者操作data里面的数据，最早只能在created里面进行操作。

// 3.beforeMount(){} 表示模板已经在内存中编辑完成了，但是尚未渲染到模板页面中。即页面中的元素，没有被真正的替换过来，只是之前写的一些模板字符串。

// 4.mounted(){} 表示内存中模板已经真实的挂载到页面中去了，用户可以看到渲染好的界面了

//    注意这是一个生命周期函数的最后一个函数了，执行完这个函数表示 整个vue实例已经初始化完成了，组件脱离了创建阶段，进入运行阶段。

// 下面是运行期间的两个生命周期函数的钩子：

// 5.beforeUpdate(){}  表示我们的界面还没更新 但是data里面的数据是最新的。即页面尚未和最新的data里面的数据包吃同步。

// 6.updated(){} 表示页面和data里面的数据已经包吃同步了 都是最新的。

// 7.beforeDestory(){}  当执行这个生命周期钩子的时候 vue的实例从运行阶段进入销毁阶段 此时实例身上的data 还有 methods处于可用的状态。

// 8.Destoryed(){} 表示组件已经完全被销毁了 组件中所有的实例方法都是不能用了