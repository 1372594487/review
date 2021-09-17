// keep-alive
// 如果在切换组件时，保存一些组件的状态防止多次渲染，我们就可以使用keep-alive组件包裹需要保存的组件
// keep-alive拥有两个独有的生命周期钩子函数，分别为activated 和 deactivated。用keep-alive包裹的组件切换时不会进行销毁，而是缓存起来并执行deactivated 钩子函数，命中缓存渲染后会执行activated钩子函数。