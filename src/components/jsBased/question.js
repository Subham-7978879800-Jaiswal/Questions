// Q1. Implement a functionality just like array.map(), but it should be your function arr.yourNewFn()

Array.prototype.yourNewFn = function (cb) {
  const oldArray = this;
  const newArray = [];
  for (let i = 0; i < oldArray.length; ++i) {
    newArray.push(cb(oldArray[i]));
  }

  return newArray;
};
const arr = [1, 2, 4, 5];
const res = arr.yourNewFn((x) => {
  return x * x;
});

console.log(res);

// Q2. Implement Debouncing
