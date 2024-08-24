//Closures Example
function getCount() {
  let count = 0;
  return function y() {
    return count++;
  };
}

const result = getCount();
console.log(result()); //0
console.log(result()); //1
console.log(result()); //2

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

const result1 = counter();
const result2 = counter();
result1(); //1
result2(); //1

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args.join(",");
    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const expensiveFunction = memoize(function (n) {
  console.log(`Computing ${n}`);
  return n * 2;
});

console.log(expensiveFunction(5)); // Computes 5... Outputs 10
console.log(expensiveFunction(5)); // Outputs 10 (from cache)

// You need to maintain state or data encapsulation.
// You want to create private variables and methods.
// You need to pass additional data to event handlers.
// You want to implement memoization for performance optimization.

function seq() {
  let i = 0;
  return function () {
    return i++;
  };
}

let seq1 = seq();
let seq2 = seq();

console.log(seq1()); //0
console.log(seq1()); //1
console.log(seq2()); //0
