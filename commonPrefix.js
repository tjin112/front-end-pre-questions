// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  let pre = strs[0];
  console.log(pre);
  let i = 0;
  while (i < strs.length) {
    console.log('1',strs[i],pre)
    while (strs[i].indexOf(pre) !== 0) {
      console.log('2',strs[i],pre);
      pre = pre.substring(0, pre.length - 1);
    }
    i++;
  }
  return pre;
};
let result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log("result", result);
