// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// slide window
var strStr = function (haystack, needle) {
  var l = needle.length;
  var n = haystack.length;
  for (var i = 0; i <= n - l; i++) {
    console.log(haystack.substring(i, i + l));
    if (haystack.substring(i, i + l) === needle) {
      //substring()用于提取字符串中介于两个指定下标之间的字符
      return i;
    }
  }
  return -1;
};
let result = strStr("mississippi", "issip");
console.log(result);
