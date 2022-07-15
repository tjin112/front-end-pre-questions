// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 * 回文
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    let tempX = x.toString().split("").reverse().join("");
    if (tempX === x.toString()) {
      return true;
    }else{
        return false
    }
  }
};
let a = isPalindrome(121121);
console.log(a);
