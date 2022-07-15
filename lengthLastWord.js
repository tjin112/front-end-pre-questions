// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let singleWord = s.split(" ");
  let r = singleWord.filter((item, index) => {
    return item !== "";
  });
  let result = r[r.length - 1].length;
  return result;
};

let r = lengthOfLastWord("   fly me   to   the moon  ");
console.log("r==>", r);
