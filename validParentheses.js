/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s = "([}}])") {
  if (s.length % 2) return false;
  let r1 = ["(", ")"];
  let r3 = ["[", "]"];
  let r2 = ["{", "}"];
  let result = [];
  let tempSarray = s.split("");
  for (let i = 0; i < tempSarray.length; i++) {
    if (
      tempSarray[i] === r1[0] ||
      tempSarray[i] === r2[0] ||
      tempSarray[i] === r3[0]
    ) {

      result.push(tempSarray[i]);
    } else if (tempSarray[i] === r1[1]) {
 
      if (result[result.length - 1] === r1[0]) {
        result.pop();
      } else {
        return false;
      }
    } else if (tempSarray[i] === r2[1]) {

      if (result[result.length - 1] === r2[0]) {
        result.pop();
      } else {
        return false;
      }
    } else if (tempSarray[i] === r3[1]) {

      if (result[result.length - 1] === r3[0]) {
        result.pop();
      } else {
        return false;
      }
    }
  }
  if (result.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid());
