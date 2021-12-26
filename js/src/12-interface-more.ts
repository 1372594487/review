export { }
interface Post {
    title: string
    content: string
    // 可选成员
    subtitle?: string
    // 只读成员
    readonly summary: string
}
const hello: Post = {
    title: 'a',
    content: 'b',
    summary:'c'
}
// hello.summary = 'd' //Cannot assign to 'summary' because it is a read-only property

// 具有动态成员对象的接口
interface Cache {
    // prop代表属性的名称
    [prop:string]:string
}
const cache:Cache = {}
// 成员必须是string类型
cache.foo = 'a'
cache.bar = 'b'
