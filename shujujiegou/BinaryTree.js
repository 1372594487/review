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
    const zhongxuNode = function (node, callback) {
        if (node !== null) {
            zhongxuNode(node.left, callback)
            callback(node.key)
            zhongxuNode(node.right, callback)
        }
    }

    const qianxuNode = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            qianxuNode(node.left, callback)
            qianxuNode(node.right, callback)
        }
    }

    const qianxuNodeII = function (node, arr) {
        if (node !== null) {
            arr.push(node.key)
            qianxuNodeII(node.left, arr)
            qianxuNodeII(node.right, arr)
        }
    }

    const houxuNode = function (node, arr) {
        if (node !== null) {
            houxuNode(node.left, arr)
            houxuNode(node.right, arr)
            arr.push(node.key)
        }
    }

    const chengxuNode = function (node) {
        const ret = [];
        if (!node) {
            return ret;
        }
        const q = [];
        q.push(node);
        while (q.length !== 0) {
            const currentLevelSize = q.length;
            ret.push([]);
            for (let i = 1; i <= currentLevelSize; ++i) {
                const node = q.shift();
                ret[ret.length - 1].push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }

        return ret;
    }

    const maxDepth = function (node) {
        if (!node) {
            return 0
        } else {
            const left = maxDepth(node.left)
            const right = maxDepth(node.right)
            return Math.max(left, right) + 1
        }

    }

    const maxDepthII = function (node) {
        if (!node) {
            return 0
        }
        let count = 0
        const q = []
        q.push(node)
        while (q.length !== 0) {
            const size = q.length
            for (let i = 1; i <= size; i++) {
                const node = q.shift()
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
            count++
        }
        return count
    }

    const minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
    }
    const maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
        }
        return node.key
    }


    this.zhongxu = function (callback) {
        zhongxuNode(root, callback)
    }
    this.qianxu = function (callback) {
        qianxuNode(root, callback)
    }
    this.qianxuII = function () {
        let qianxuArr = []
        qianxuNodeII(root, qianxuArr)
        return qianxuArr
    }
    this.houxu = function () {
        let houxuArr = []
        houxuNode(root, houxuArr)
        return houxuArr
    }

    this.chengxu = function () {
        chengxuNode(root)
    }

    this.maxDepth = function () {
        return maxDepth(root)
    }

    this.maxDepthII = function () {
        return maxDepthII(root)
    }

    this.min = function () {
        return minNode(root)
    }
    this.max = function () {
        return maxNode(root)

    }


}