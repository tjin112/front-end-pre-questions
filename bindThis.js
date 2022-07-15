Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  let result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Function.prototype.myApply = function (thisContext, args = []) {
    console.log(this)
    return this.myCall(thisContext,...args)
};

Function.prototype.myBind = function (thisContext, ...args) {
    return (...newArgs) => this.myApply(thisContext,[...newArgs,...args])
};

const obj = { num: 1 };
const bound = function logNum(obj, b) {
  console.log(this.num, a, b);
}
logNum.myBind(obj, 1,2);
