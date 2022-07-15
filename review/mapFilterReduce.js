Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }

  return output;
};

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  // Write your code here.
};

const array = [1, 2, 3, 4];
const mappedArray = array.myFilter((item, index, array) => {
  return item > 2;
});
console.log(mappedArray)
