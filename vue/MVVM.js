// ViewModel通过实现一套数据响应式机制自动响应Model中数据变化
// 同时ViewModel会实现一套更新策略自动将数据变化转换为视图更新
// 通过事件监听响应View中用户交互修改Model数据。
// 这样在ViewModel中就减少了大量DOM操作代码。
// MVVM在保持View和Model松耦合的同时，还减少了维护他们关系的代码，使用户专注于业务逻辑，兼顾开发效率和可维护性