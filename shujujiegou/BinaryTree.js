function BinaryTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root = null
    const insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                insertNode(node.right, newNode)
            }
        }
    }
    
    this.insert = function (key) {
        var newNode = new Node(key)
        if (root == null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    const zhongxuNode = function(node,callback){
        if(node !== null){
        zhongxuNode(node.left,callback)
        callback(node.key)
        zhongxuNode(node.right,callback)
        }
    }

    const qianxuNode  = function(node,callback){
        if(node !== null){
            callback(node.key)
            qianxuNode(node.left,callback)
            qianxuNode(node.right,callback)
            }
    }

    const qianxuNodeII = function(node,arr){
        if(node !== null){
            arr.push(node.key)
            qianxuNodeII(node.left,arr)
            qianxuNodeII(node.right,arr)
        }
    }

    const houxuNode = function(node,arr){
        if(node !== null){
            houxuNode(node.left,arr)
            houxuNode(node.right,arr)
            arr.push(node.key)
        }
    }

    this.zhongxu = function(callback){
        zhongxuNode(root,callback)
    }
    this.qianxu = function(callback){
        qianxuNode(root,callback)
    }
    this.qianxuII = function(){
        let qianxuArr = []
        qianxuNodeII(root,qianxuArr)
        return qianxuArr
    }
    this.houxu = function(){
        let houxuArr = []
        houxuNode(root,houxuArr)
        return houxuArr
    }

    
}