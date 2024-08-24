// ----> ForEach array method executes a given function on every elements from an array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

function consoleItem(item, index, arr) {
  // callback func, index, whole arr
  console.log(item); //1, 2, 3, 4, 5
}

const letters = ["a", "b", "c", "a", "b", "c", "d"];

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count); //{ a: 2, b: 2, c: 2, d: 1 }

// ----> Map method executes a give function on every element from an array and returns a new array

const number = [1, 2, 3, 4, 5];

const numbersDouble = number.map(double);

function double(value) {
  return value * 2;
}

console.log(numbersDouble); //[ 2, 4, 6, 8, 10 ]

// ----> Filter method creates a new array by removing all the elements for which the callback function returns the falsy value

const num = [1, 2, 3, 4, 5, 6];

const even = num.filter((item) => item % 2 === 0);

console.log(even); //[ 2, 4, 6 ]

const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Ivan",
    age: 18,
  },
  {
    name: "Jai",
    age: 15,
  },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults); //[ { name: 'Florin', age: 26 }, { name: 'Ivan', age: 18 } ]

const nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6];

const num1 = nums.filter((value, index, arr) => {
  return arr.indexOf(value) === index; //Check index of value when it sees 1 again it find that is already there at some other
  //index and due to which this is condition is false and duplicates get removed
});

console.log(num1); //[ 1, 2, 3, 4, 5, 6 ]

// ----> Reduce method executes a callback function on every elements of an array & return one single output value

const total = [1, 2, 3, 4, 5];

const result = total.reduce(callback, 0); //0 is initial value of accumulator

function callback(accumulator, value, index, arr) {
  return accumulator + value; //acumulator acts as a result
}

console.log(result); // 15

// ----> Slice method returns a shallow copy of a portion of an array means it won't modify the original array.
//It takes start position & end poistion. Start position, Default is 0. End position, Default is last element.
//Negative numbers select from the end of the array.

const numbers1 = [1, 2, 3, 4, 5];

const numbers2 = numbers1.slice(1, 4);
const numbers3 = numbers1.slice(-1);

console.log(numbers2); //[ 2, 3, 4 ]
console.log(numbers1); //[ 1, 2, 3, 4, 5 ] Original array is not modified
console.log(numbers3); //[ 5 ]

const participants = ["Florin", "Ivan", "Liam", "Jai", "Patrik"];

const winners = participants.slice(0, 3);

console.log(winners); //[ 'Florin', 'Ivan', 'Liam' ]

// ----> Splice method changes an array by removing or replacing an existing element from it. It overwrites an original array.
//It takes index, count, new elements to be added. The index (position) to add or remove items. count is Number of items to
//be removed. Item is The new elements(s) to be added.
//Index if A negative value counts from the end of the array.

const numbers4 = [1, 2, 3, 4, 5];

// const numbers5 = numbers4.splice(2, 3, 6);
const numbers6 = numbers4.splice(2, 0, 6, 7);

// console.log(numbers5); //[ 3, 4, 5 ]
console.log(numbers4); //[ 1, 2, 6 ] Original array is modified In case of numbers 6 it will be [ 1, 2, 6, 7, 3, 4, 5 ]
console.log(numbers6); //[]

// ----> Sort method
