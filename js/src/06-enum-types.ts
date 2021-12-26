enum PostStatus {
    Draft = 0,
    Unpublished =1,
    Published,
    // 无初始值则从0累加
}
// 常量枚举 不会影响编译后结果 上面会编译为双向键值对对象
// const enum PostStatus{
//     Draft = 0,
//     Unpublished =1,
//     Published,
// }

const post = {
    title:'ts 1',
    content:'ts tststststs',
    status:PostStatus.Draft //3 //1 //0
}