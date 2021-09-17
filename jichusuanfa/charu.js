function charu(arr) {
    //从第二个数开始，往前插入数字
    for (let i = 1; i < arr.length; i++) {
        // j 记录当前数字下标
        let j = i;
        while (j >= 1 && arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            //更新当前数字下标
            j--
        }
    }
}

function charuII(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }
}

// 类数组对象
// 字符串、$返回的jq对象、arguments、NodeList、HTML Collections
//类数组对象转数组
//新建数组，遍历类数组对象，将每个元素放入新数组
// Array.prototype.slice.call(ArrayLike)
// [].slice.call(ArrayLike)
// Array.from(ArrayLike)
// Array.prototype.push.apply(null,ArrayLike)

