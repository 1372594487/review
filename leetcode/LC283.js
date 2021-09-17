/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
     let slow = 0
     for(let fast = 0;fast < nums.length;fast++){
         if(nums[fast] !== 0){
             nums[slow++] = nums[fast]
         }
     }
     console.log(nums);
     for(;slow<nums.length;slow++) nums[slow] = 0
     return nums
};
//0,1,0,3,12
//1,1,0,3,12
//1,3,0,3,12
// 1,3,12,3,12
//1,3,12,0,0

var moveZeroesII = function(nums) {
    nums.sort((a,b) => b? 0: -1)
};

console.log(moveZeroes([0,1,0,3,12]));