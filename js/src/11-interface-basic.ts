export{}
// 接口 去约束对象的结构,一个对象去实现一个接口，它必须拥有这个接口的所有成员
interface Post{
    title:'a'
    content:'b'
}
function printPost(post:Post){
    // 如果没有定义接口 Parameter 'post' implicitly has an 'any' type.
    console.log(post.title);
    console.log(post.content);
}
