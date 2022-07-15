// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[midIndex] > target) {
      //   searching on the left side
      endIndex = midIndex - 1;
    } else if (nums[midIndex] < target) {
      startIndex = midIndex + 1;
    } else if (nums[midIndex] === target) {
      return midIndex;
    }
  }
  //   return -1;
  return endIndex + 1;
};
const result = searchInsert([1, 3, 5, 6], 2);
console.log(result);
