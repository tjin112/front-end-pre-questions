Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i], i, this.length);
    output.push(callback(this[i], i, this));
  }
  return output;
};

let a = [1, 2, 3, 4, 5];
b = a.myMap((item, i, array) => {
  if (item === 1) {
    item = 2;
  }
  return item
});
console.log(b)