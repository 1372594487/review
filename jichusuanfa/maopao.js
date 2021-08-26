function maopao(arr) {
    let swapped = true;
    // 最后一个没有经过排序的元素的下标
    let indexOfLastUnsortedElement = arr.length - 1
    // 上次发生交换的位置
    let swappedIndex = -1
    while (swapped) {
        swapped = false
        for (let i = 0; i < indexOfLastUnsortedElement; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
                swapped = true
                swappedIndex = i;
            }
        }
        indexOfLastUnsortedElement = swappedIndex
    }
    return arr
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(maopao([1,2,3,0,4,15,6,7,345,12,44,1]));

