function LinkedList() {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    let root = null
    function insertNode(node, newNode) {
        if (!node.next) {
            node.next = newNode
        } else {
            insertNode(node.next, newNode)
        }
    }
    this.insert = function (key) {
        let newNode = new ListNode(key)
        if (!root) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    function bianli(node, arr) {
        arr.push(node.val)
        if (node.next) bianli(node.next, arr)
    }
    this.bianli = function () {
        let arr = []
        bianli(root, arr)
        return arr
    }
}