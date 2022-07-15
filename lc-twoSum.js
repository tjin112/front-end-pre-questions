// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let array = {};
  for (let i = 0; i < nums.length; i++) {
    if (array[target - nums[i]] !== undefined) {
      return [array[target - nums[i]], i];
    }
    array[nums[i]] = i;
  }
  //   let resultIndex = [];
  //   nums.map((item, index) => {
  //     for (let i = 1; i < nums.length; i++) {
  //       if (item + nums[index + i] === target) {
  //         resultIndex.push(index);
  //         resultIndex.push(index + i);
  //       }
  //     }
  //   });
  //   return resultIndex;
};

let result = twoSum([3, 2, 4], 6);
console.log(result);
