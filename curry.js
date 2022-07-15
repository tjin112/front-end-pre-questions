function curry(callback) {
  const curriedCallback = (...args) => {
    console.log(args)
    if (args.length === 0) {
      return callback();
    }
    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      console.log(otherArgs)
      return curriedCallback(...args, ...otherArgs);
    };
  };
  
  return curriedCallback;
}

const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);
let a = curriedSum(1,2)(2)();
console.log(a);
// var curry = function (fn, args) {
//   var length = fn.length, // 获取形参个数
//     args = args || [];
//   return function () {
//     var newArgs = args.slice(0).concat([].slice.call(arguments));
//     // 判断实参参数个数是否大于或等于形参个数
//     if (newArgs.length >= length) {
//       return fn.apply(this, newArgs);
//     } else {
//       return curry.call(this, fn, newArgs);
//     }
//   };
// };

// function addFn(a, b, c, d) {
//   return a + b + c + d;
// }

// var add = curry(addFn);

// let result = add(2)(3)(4, 5);
// console.log(result);
