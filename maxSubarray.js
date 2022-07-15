// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
// slide window
var maxSubArray = function (nums) {
  //   let a = nums[0];
  let b = nums[0];

  for (i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    // console.log("a==>", nums[i]);
    b = Math.max(b, nums[i]);
    // console.log(nums);
  }

  return b;
};
let result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(result);
