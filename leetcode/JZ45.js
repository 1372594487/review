/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => ('' + a + b) - ('' + b + a)).join('');
};

var maxNumber = function (nums) {
    return nums.sort((a, b) => ('' + b + a) - ('' + a + b)).join('')
}
console.log(minNumber([3,30,34,5,9]));
console.log(maxNumber([3,30,34,5,9]));