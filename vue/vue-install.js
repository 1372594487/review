/**
 *@date 2021/10/11
 *@description:
 *install 函数的实现
 *在使用vuex(3.5.1)的时候是vue.use(vuex)，如何实现？
  vue的插件系统提供了use函数，方便我们引入插件
  use函数规定，每个插件都需要编写install函数，vuex在vuex.common.js中提供了install函数
 * @param {*} _Vue
 */
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called inly once.'
      )
    }
    return
  }
  // 如果没有全局引入，走下边的逻辑
  Vue = _Vue
  // applyMixin(Vue) 函数同位于vuex.common.js下
  applyMixin(Vue)
}

/**
 *
 * @param {*} Vue
 * @return
 */
function applyMixin(Vue) {
  // 拿到vue版本号
  var version = Number(Vue.version.split('.')[0])
  // 如果版本为及以上，在beforeCreate钩子函数中调用vuexInit()？
  if (version >= 2) {
    Vue.minxin({ beforeCreate: vuexInit })
  } else {
    /* 
     重写初始化函数init()并注入的过程
     针对1.x版本的实现
     原话：
     override init and inject vuex init procedure
     for 1.x backwards compatibility.
      */
    var _init = Vue.prototype._init
    Vue.prototype._init = function (options) {
      if (options === void 0) opitons = {}
      opitons.init = options.init ? [vuexInit].concat(options.init) : vuexInit
      _init.call(this, options)
    }
  }
}

/* 
vuex init hook，注入到每个实例init hooks列表中
原话:
Vuex init hook,injected into each instances init hooks list
-------------------------------------------------------------
在vuexInit中，将new Vue()是传入的store设置到this对象的$store属性上，注意！因为每个组件都会被渲染，在上面使用mixin进行了混入，所以vuexInit在组建被创建之前都会被调用。
new Vue()时传入的store，这个时候，store已经挂在最上面的根组件上。
子组件则从其父组件上引用其$store属性进行层层嵌套设置，保证每一个组件中都可以通过this.$store对象。
通过在跟实例中注册store选项，该store实例会注入到跟组件下的所有子组件中，注入方法是子从父拿，root从options拿。
--这段摘自掘金《vue中的install函数》 ————樱舞
-------------------------------------------------------------
*/
function vuexInit() {
  var options = this.$options
  // 注入store
  // 如果options有store属性哈哈哈哈，如果本身就是父组件

  if (options.store) {
    // 将$store挂载到vue上
    this.$store =
      typeof options.store === 'function' ? options.store() : options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}
