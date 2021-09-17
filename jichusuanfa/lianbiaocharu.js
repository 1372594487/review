/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

 var insertionSortList = function (head) {
    let tempArr = []
    let listNode = new ListNode()
    getNode(head, tempArr)
    tempArr.sort((a, b) => { a - b })
    console.log(tempArr);
    for (let i = 0; i < tempArr.length; i++) {
        if (!listNode.val) {
            listNode.val = tempArr[i]
        }
        else {
            console.log(listNode)
            addNode(listNode.next, tempArr[i])
        }
    }
};
var getNode = function (node, arr) {
    arr.push(node.val)
    if (node.next) {
        getNode(node.next, arr)
    }
}

var addNode = function (node, val) {
    if (!node.val) {
        node.val = val
    }
    else {
        addNode(node.next, tempArr[i])
    }
}

insertionSortList([4,2,1,3])