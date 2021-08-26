/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    const tempArr = [...nums].map(v => {
        return v * 10
    })
    console.log(tempArr)
};
minNumber([10, 1, 2312])
let sum1 = "11" + 1
let sum2 = sum1 - '1'
console.log(sum1, sum2);

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] === 0 && nums[j] !== 0) {
                nums[i] = nums[i] + nums[j]
                nums[j] = nums[i] - nums[j]
                nums[i] = nums[i] - nums[j]
                break
            }
        }
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));