// 链式存储
function LinkedStack() {
    let Node = function (val) {
        this.val = val;
        this.next = null;
    }
    let length = 0,
        top;//栈顶指针
    // 压栈
    this.push = function (val) {
        let node = new Node(val);
        top ? node.next = top : top = node;
        top = node;
        length++
        return true;
    }
    // 退栈
    this.push = function () {
        let current = top;
        if (top) {
            top = current.next;
            current.next = null;
            length--;
            return current
        } else {
            return 'null stack'
        }
    }

    this.top = function () {
        return top;
    }
    this.size = function () {
        return length;
    }
    // toString 从栈顶到栈底
    this.toString = function () {
        let str = '';
        current = top;
        while (current) {
            str += current.val + ' ';
            current = current.next
        }
        return str;
    }
    this.clear = function () {
        top = null;
        length = 0;
        return true;
    }
}

// 顺序存储
function ArrayStack() {
    var arr = [];
    // 压栈操作
    this.push = function (element) {
        arr.push(element)
    }
    // 退栈
    this.pop = function () {
        arr.pop()
    }
    // 获取栈顶元素
    this.top = function(){
        return arr[arr.length-1]
    }
    // 获取栈长
    this.size = function(){
        return arr.length
    }
    // 清空栈
    this.clear = function(){
        arr = [];
        return true;
    }
    
    this.toString = function(){
        return arr.toString()
    }
}