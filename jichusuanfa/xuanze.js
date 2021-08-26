function xuanze(arr) {
    let minIndex
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                //记录最小值的下标
                minIndex = j
            }
        }
        //将最小元素交换至首位
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

function xuanzeII(arr) {
    let minIndex, maxIndex
    for (let i = 0; i < arr.length / 2; i++) {
        minIndex = i
        maxIndex = i
        for (let j = i + 1; j < arr.length - i; j++) {
            if (arr[minIndex] > arr[j]) {
                //记录最小值的下标
                minIndex = j;
            }
            if (arr[maxIndex] < arr[j]) {
                //记录最大值的下标
                maxIndex = j;
            }
        }
        // 如果 minIndex 和 maxIndex 都相等，那么他们必定都等于 i，且后面的所有数字都与 arr[i] 相等，此时已经排序完成
        if (minIndex == maxIndex) break;
        // 将最小元素交换至首位
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        // 如果最大值的下标刚好是 i，由于 arr[i] 和 arr[minIndex] 已经交换了，所以这里要更新 maxIndex 的值。
        if (maxIndex == i) maxIndex = minIndex;
        // 将最大元素交换至末尾
        let lastIndex = arr.length - 1 - i;
        temp = arr[lastIndex];
        arr[lastIndex] = arr[maxIndex];
        arr[maxIndex] = temp;


    }
}