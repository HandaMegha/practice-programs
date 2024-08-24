// values
// A-Z -> 65-90
// a-z -> 97-122
// 0-9 -> 48-57

//delete works with object not with other variable

//<------------------------Add new item in same obj------------------------>

let obj = { item: 1, new: 2 };
//First Method
obj["salary"] = 100;
//Second Method
obj.salary = 100;
//Third Method
Object.assign(obj, { salary: 100 });
//Creating a new object with old object
const newObj = { ...obj, salary: 100 };

//<------------------------Swap two numbers with a third variable & without a third variable------------------------>

let a = 5;
let b = 10;
//Using third variable
const c = a;
a = b;
b = c;
//Using destructing assignment
[a, b] = [b, a];
//Using Arithmetic operators
a = a + b;
b = a - b;
a = a - b;
//Using a function
function swap(num1, num2) {
  return num2, num1;
}
const { num1, num2 } = swap(5, 10);

//<------------------------Count of same alphabets and return it------------------------>

// let a = 'Meghamegha'
// const arr=a.toLowerCase().split('');
// const counts = {}

//First Way
// for(const num of arr){
//     counts[num] = counts[num] ? counts[num] + 1 : 1
// }
// console.log("counts", counts);

//If it is already an array
// const arr=['m', 'e', 'g', 'h', 'a', 'm', 'e']
// const counts = {}

//First Way
// for(const num of arr){
//     counts[num] = counts[num] ? counts[num] + 1 : 1
// }
// console.log("counts", counts);

//<------------------------Count the same no and print it ------------------------>

const arr = [1, 2, 3, 4, 1, 2, 3];
const counts = {};

//First Way
for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log("counts", counts); // {1: 2, 2: 2, 3: 2, 4: 1}

//Second Way
const arr1 = [1, 2, 3, 4, 1, 2, 3];

function foo(array) {
  let a = [],
    b = [],
    arr = [...array], // clone array so we don't change the original when using .sort()
    prev;

  arr.sort();
  for (let element of arr) {
    if (element !== prev) {
      a.push(element);
      b.push(1);
    } else ++b[b.length - 1];
    prev = element;
  }

  return [a, b];
}

const result = foo(arr1);
console.log("[" + result[0] + "]", "[" + result[1] + "]"); //[1,2,3,4] [2,2,2,1]

//<------------------------Reverse whole string------------------------>

let str = "Welcome to the Airbus!";

function reverseStringResult(str) {
  const newStr = str.split(" ");
  const reverseString = newStr.reverse();
  const joinString = reverseString.join(" ");
  return joinString;
}

OR;

function reverseStringResult(str) {
  return str.split(" ").reverse().join(" ");
}

const result1 = reverseStringResult(str);
console.log("result1", result1); //Airbus! the to Welcome

//Another Way
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
const result2 = reverseString("hello");
console.log("result2", result2);

//<------------------------Reverse string letters------------------------>
let str1 = "Welcome to the Airbus!";

var reverseEntireSentence = reverseBySeparator(str1, ""); //!subriA eht ot emocleW
console.log("reverseEntireSentence", reverseEntireSentence);

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " "); //emocleW ot eht !subriA

function reverseBySeparator(str1, separator) {
  return str1.split(separator).reverse().join(separator);
}

//<------------------------sum(1)(2)(6)------------------------>

let sum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log("sum", sum(1)(2)(6)); //9

//<------------------------sum(1)(2)(3)(4) n numbers------------------------>
let sum1 = function (a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum1(1)(2)(3)(4)());

//<------------------------Remove duplicates from array------------------------>

const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

//Using set function
console.log([...new Set(nums)]); //[ 1, 2, 3, 4, 5, 6 ]

//Using one loop
function removeRepeated(arr) {
  var newArr = [];
  for (let elem of arr) {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(removeRepeated([1, 2, 3, 2, 3, 4, 2])); //[1,2,3,4]

//Without using set function
function removeDuplicate(newArr) {
  var obj = {};
  var out = [];

  for (var x = 0; x < newArr.length; x++) {
    obj[newArr[x]] = 0;
  }

  for (var x in obj) {
    out.push(x);
  }

  return out;
}

var finalArr = removeDuplicate(newArr);
console.log("final Arr", finalArr); //['1', '2', '3','4', '5', '6','8']

//<------------------------Find duplicates values from array------------------------>

const num = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

function removeDuplicates(arr) {
  var object = {};
  var result = [];

  arr.map((item) => {
    if (!object[item]) {
      object[item] = 0;
    }
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  return result;
}

var myNum = removeDuplicates(num);
console.log(myNum); //[ '1', '2', '4' ]

//<------------------------Remove duplicates from array of objects------------------------>
let arr5 = [{ b: 1 }, { a: 2 }, { c: 1 }, { a: 2 }, { z: 5 }, { a: 1 }];

const jsonObject = arr5.map(JSON.stringify);
// console.log(jsonObject);

const uniqueSet = new Set(jsonObject);
const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
// console.log(uniqueArray);

//<------------------------Find minimum & maximum element in an array------------------------>

let arr6 = [3, 1, 9, 10, 55, 2];

function getMinAndMaxElement(arr) {
  let min = arr[0],
    max = arr[0];

  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max];
}

const minmaxvalue = getMinAndMaxElement(arr6);
console.log("minmaxvalue", minmaxvalue); //[ 1, 55 ]

//<------------------------Reverse an array------------------------>

let arr7 = [3, 1, 9, 10, 55, 2];

function revereseArray(arr) {
  let newArray = [];
  //Using reverse method
  //   arr.reverse();

  //Using for loop
  //   for (var i = arr.length - 1; i >= 0; i--) {
  //     newArray.push(arr[i]);
  //   }

  //Using unshift method
  //   arr.map(item => {
  //     newArray.unshift(item)
  //   });

  //Using reduce method
  newArray = arr.reduce((acc, item) => [item].concat(acc), []);

  return newArray;
}

const reverseArr = revereseArray(arr7);
console.log("reverseArr", reverseArr); //[ 2, 55, 10, 9, 1, 3 ]

//<------------------------Sort a number array------------------------>

let arr8 = [3, 1, 9, 10, 55, 2];

function sortArray(arr) {
  //Using sort method
  const newArray = arr.sort(function (a, b) {
    return a - b;
  });

  //Using One for loop
  //   for (var i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       const temp = arr[i];
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = temp;

  //       //updating the value of i = -1 so after getting updated for i++
  //       //in the loop it becomes 0 and the loop begins from the start
  //       i = -1;
  //     }
  //   }

  return newArray;
}

const sortArr = sortArray(arr8);
console.log("sortArr", sortArr); //[ 1, 2, 3, 9, 10, 55 ]

//<------------------------Number is positive, negative or zero------------------------>
function checkNumber(no) {
  if (no < 0) {
    return "No is negative";
  } else if (no > 0) {
    return "No is positive";
  } else {
    return "No is zero";
  }
}

const numberResult = checkNumber(-2);
console.log("numberResult", numberResult); //No is negative

//<------------------------Number is even or odd------------------------>
function checkEvenOrOdd(no) {
  if (no % 2 == 0) {
    return "No is even";
  } else {
    return "No is odd";
  }
}

const evenOddResult = checkEvenOrOdd(8);
console.log("evenOddResult", evenOddResult); //No is even

//<------------------------Year is leap year or not------------------------>
//The year which is divisble by 4 & not divisible by 100 or divisible by 400 is leap year (1992, 1996, 1988)
function checkLeapYear(no) {
  if ((no % 4 == 0 && no % 100 !== 0) || no % 400 == 0) {
    return "No is leap year";
  } else {
    return "No is not a leap year";
  }
}

const leapYearResult = checkLeapYear(1991);
console.log("leapYearResult", leapYearResult); //No is not a leap year

//<------------------------Number is perfect square or not------------------------>
function checkPerfectSquare(no) {
  const b = Math.sqrt(no);
  if (no == b * b) {
    return "No is Perfect square";
  } else {
    return "No is not a Perfect square";
  }
}

const PerfectSquareResult = checkPerfectSquare(629);
console.log("PerfectSquareResult", PerfectSquareResult); //No is not a Perfect square

//<------------------------Find greatest among 3 numbers------------------------>
function checkGreatestamong3Numbers(a, b, c) {
  if (a > b && a > c) {
    return `a is greatest ${a}`;
  } else if (b > c) {
    return `b is greatest ${b}`;
  } else {
    return `c is greatest ${c}`;
  }
}

const GreatestNumberResult = checkGreatestamong3Numbers(200, 1000, 50);
console.log("GreatestNumberResult", GreatestNumberResult); //b is greatest 1000

//<------------------------Check whether character is alphabet, digit or special character------------------------>
function checkAlphabet(val) {
  if (val >= "a" && val <= "z") {
    return "Character is alphabet";
  } else if (val >= "0" && val <= "9") {
    return "Character is digit";
  } else {
    return "Character is special character";
  }
}

const alphaResult = checkAlphabet("$");
console.log("alphaResult", alphaResult); //Character is special character

//<------------------------Find greatest among 4 numbers------------------------>
function checkGreatestamong4Numbers(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return `a is greatest ${a}`;
  } else if (b > c && b > d) {
    return `b is greatest ${b}`;
  } else if (c > d) {
    return `c is greatest ${c}`;
  } else {
    return `d is greatest ${d}`;
  }
}

const GreatestNumbersResult = checkGreatestamong4Numbers(200, 1000, 8000, 5555);
console.log("GreatestNumbersResult", GreatestNumbersResult); //c is greatest 8000

//<------------------------Print the weak day name when user enter any day no------------------------>
function checkWeakDay(val) {
  let day = val;
  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Wrong day number";
      break;
  }
  return day;
}

const weakDayResult = checkWeakDay(8);
console.log("weakDayResult", weakDayResult); //Wrong day number

//<------------------------Get the number of days in a month when the user enter any month number------------------------>
function checkDaysinMonth(val) {
  let days = val;
  switch (days) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = "31 days in month";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = "30 days in month";
      break;
    case 2:
      days = "28 or 29 days in month";
      break;
    default:
      days = "Wrong month number";
      break;
  }
  return days;
}

const daysInMonthResult = checkDaysinMonth(8);
console.log("daysInMonthResult", daysInMonthResult); //31 days in month

//<------------------------Print table of 2------------------------>
function tableOf2() {
  let arr = [];
  for (var i = 1; i <= 10; i++) {
    arr.push(i * 2);
  }
  return arr;
}

const tableResult = tableOf2();
console.log("tableResult", tableResult); //[2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

//<------------------------Factorial of number------------------------>
function numberFactorial(no) {
  if (no < 0) {
    return "No is negative";
  } else if (no === 0) {
    return "Factorial of zero is 1";
  } else {
    let fact = 1;
    for (var i = 1; i <= no; i++) {
      fact = fact * i;
    }
    return fact;
  }
}

const factorialResult = numberFactorial(4);
console.log("factorialResult", factorialResult); //24

//<------------------------Find sum of digit of a number------------------------>
function sumOfDigit(no) {
  let val = no.toString().split("");
  let sum = 0;
  if (val.length === 1) {
    return Number(val);
  } else {
    for (var i = 0; i < val.length; i++) {
      sum = sum + Number(val[i]);
    }
    return sum;
  }

  //Another Way
  // let r,
  //   sum = 0;
  // while (no != 0) {
  //   r = no % 10;
  //   sum = sum + r;
  //   no = no / 10;
  // }
  // return parseInt(sum);
}

const sumResult = sumOfDigit(425);
console.log("sumResult", sumResult); //11

//<------------------------Check whether no is armstrong or not------------------------>
//When we do cube of all digit of a no & after addition we get same no as original one is Armstrong No
function armstrong(no) {
  let sum = 0;
  let temp = no;
  while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }
  // check the condition
  if (sum == no) {
    return `${no} is an Armstrong number`;
  } else {
    return `${no} is not an Armstrong number.`;
  }
}

const armstrongResult = armstrong(153);
console.log("armstrongResult", armstrongResult); //153 is an Armstrong number

//<------------------------Reverse a number------------------------>

function reverseNumber(no) {
  let r,
    sum = 0;
  while (no != 0) {
    r = no % 10;
    sum = sum * 10 + r;
    no = parseInt(no / 10);
  }
  return sum;
}

//<------------------------Move zeros at the end------------------------>
const zerosarr = [0, 1, 0, 5, 0, 2, 0, 0];

function moveZeroToEnd(zerosarr) {
  // let zeros = 0;

  // for (var i = 0; i < zerosarr.length; i++) {
  //   let isZero = zerosarr[i];
  //   if (isZero === 0) {
  //     zeros++;
  //     zerosarr.splice(i, 1);
  //     i--;
  //   }
  // }
  // for (var j = 0; j < zeros; j++) {
  //   zerosarr.push(0);
  // }
  // return zerosarr;

  //OR
  let count = 0;
  for (let i = 0; i < zerosarr.length; i++) {
    if (zerosarr[i] !== 0) {
      zerosarr[count++] = zerosarr[i];
    }
  }
  while (count < zerosarr.length) {
    zerosarr[count++] = 0;
  }
  return zerosarr;
}

console.log(moveZeroToEnd(zerosarr)); //[1, 5, 2, 0, 0, 0, 0, 0]

const reverseNumberResult = reverseNumber(153);
console.log("reverseNumberResult", reverseNumberResult); //351

//<------------------------Check string is anagrams or not------------------------>
function check(obj1, obj2) {
  // Iterate the obj2 using for..in
  for (key in obj1) {
    // Check if both objects do
    // not have the equal values
    // of same key
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function anagrams(a, b) {
  const string1 = a.split("");
  const string2 = b.split("");
  const obj1 = {},
    obj2 = {};

  for (const num1 of string1) {
    obj1[num1] = obj1[num1] ? obj1[num1] + 1 : 1;
  }

  for (const num2 of string2) {
    obj2[num2] = obj2[num2] ? obj2[num2] + 1 : 1;
  }

  // const test = JSON.stringify(obj1) === JSON.stringify(obj2); //It only check if both strings are in same order
  const result = check(obj1, obj2);
  return result;
}

const anagramsResult = anagrams("geeksforgeeks", "forgeeksgeeks");
console.log("anagramsResult", anagramsResult); //true

//<------------------------Get this output: [10, "abc", 20, 0, false, true]------------------------>
var arrr = [10, "abc", 20, 10, "abc", 0, false, true];

function uniqElements(arr) {
  if (arr.length === 0) return "Empty Array";
  else {
    const uniqArr = arr.filter((value, index, arr1) => {
      return arr1.indexOf(value) === index;
    });
    // for(var i = 0; i < arr.length; i++){
    //     obj[arr[i]] = arr[i]
    // }

    // for(var x in obj){
    //     console.log(typeof x)
    //     uniqArr.push(x)
    // }
    return uniqArr;
  }
}

const resultt = uniqElements(arrr);
console.log(resultt); //[ 10, 'abc', 20, 0, false, true ]

//<------------------------Get this below Output------------------------>
// g
//  f
//   e
//    d
//     c
//      b
//       a
const charArr = ["a", "b", "c", "d", "e", "f", "g"];

function reverseArr(charArr) {
  let space = "";
  for (var i = charArr.length - 1; i >= 0; i--) {
    space = space + " ";
    console.log(space + charArr[i]);
  }
}

reverseArr(charArr);

//<------------------------Find greatest No------------------------>
const num5 = 678493;

const findGreatestNumber = (num5) => {
  let bigNo = 0;
  const str = num5.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[i] > bigNo) {
      bigNo = str[i];
    }
  }
  return Number(bigNo);
};

console.log(findGreatestNumber(num5)); //9

//<------------------------Have below input, write program to get output------------------------>
// const output = {
//     "Sample1": [
//         {
//             key: 'Sample 1',
//             data: 'Data 1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data 1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data 1'
//         },
//     ],
//     "Sample2": [
//         {
//             key: 'Sample 2',
//             data: 'Data 2'
//         },
//         {
//             key: 'Sample 2',
//             data: 'Data 2'
//         },
//     ]
// }

const input = [
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 2",
    data: "Data 2",
  },
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 2",
    data: "Data 2",
  },
];

const output = {};

input.forEach((item) => {
  if (output[item.key]) {
    //key is available
    output[item.key].push(item);
  } else {
    //Key is not available
    output[item.key] = [item];
  }
});

console.log(output);

//<------------------------Output should be [1, 2, 3, 4, 5, 6, 7, 8]------------------------>
// const a = [1, 2, 3, [4, [5, 6]], 7, 8];
// const flattenArr = [];
// //Followed recursion way
// function flattenArray(a){
//     for(var i = 0; i < a.length; i ++){
//         if(typeof a[i] === 'number'){
//             flattenArr.push(a[i]);
//         }
//         else{
//             flattenArray(a[i]);
//         }
//     }
//     return flattenArr;
// }

// console.log(flattenArray(a)); //[1, 2, 3, 4, 5, 6, 7, 8]

//<------------------------Output should be [ 1, 2, 3, { test: 'key' }, 4, 5, 6, 7, 8 ]------------------------>
const a1 = [1, 2, 3, { test: "key" }, [4, [5, 6]], 7, 8];
const flattenArr = [];
//Followed recursion way
function flattenArray(a1) {
  for (var i = 0; i < a1.length; i++) {
    if (Array.isArray(a1[i])) {
      flattenArray(a1[i]);
    } else {
      flattenArr.push(a1[i]);
    }
  }
  return flattenArr;
}

console.log(flattenArray(a1)); //[ 1, 2, 3, { test: 'key' }, 4, 5, 6, 7, 8 ]

//<------------------------Get highest length word from paragraph------------------------>
var paragraph = "test abcdefg";

function getHighestWord(paragraph) {
  var words = paragraph.split(" ");
  var longestWord = "";
  var maxLength = 0;
  words.forEach(function (word) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  });
  return longestWord;
}

console.log(getHighestWord(paragraph)); //abcdefg

//<------------------------Get unique element from array------------------------>
function findUniqElement(arr) {
  var uniqueElements = [];

  arr.forEach(function (element) {
    if (uniqueElements.indexOf(element) === -1) {
      uniqueElements.push(element);
    } else {
      uniqueElements.splice(uniqueElements.indexOf(element), 1);
    }
  });

  return uniqueElements[0];
}

const uniqElements = findUniqElement([2, 2, 2, 2, 5]);
console.log("uniqElements", uniqElements); //5

//<------------------------Find three largest numbers------------------------>
function get3LargestElements() {
  const arr = [10, 4, 3, 50, 23, 90];

  let first = 0,
    second = 0,
    third = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }

  return [first, second, third];
}

console.log(get3LargestElements()); //[ 90, 50, 23 ]

//<------------------------Find 2nd largest number------------------------>

function find2ndLargestElement() {
  const arr = [12, 35, 1, 10, 34, 1, 70, 90];

  //First Way
  // const sortedArr = arr.sort(function(a,b){
  //     return b - a;
  // })
  // return sortedArr[1];

  //Second Way
  let second = 0,
    largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(find2ndLargestElement()); //70

//<------------------------Find vowels from text and get thos output { i: 5, a: 4, e: 5, o: 3 }------------------------>

const sampleTxt = "This is a sample content for JavaScript coding exercise";

function getVowels(sampleTxt) {
  const arr = [],
    obj = {};
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < sampleTxt.length; i++) {
    if (vowels.includes(sampleTxt[i])) {
      arr.push(sampleTxt[i]);
    }
  }
  for (var x in arr) {
    obj[arr[x]] = obj[arr[x]] ? obj[arr[x]] + 1 : 1;
  }
  return obj;
}

console.log(getVowels(sampleTxt)); //{ i: 5, a: 4, e: 5, o: 3 }

//<------------------------Find subarray within the array and return its sum------------------------>

function subArrayWithSum() {
  const arr = [1, 2, 3, 7, 5],
    n = 5,
    s = 12;
  //   const arr = [1,2,3,4,5,6,7,8,9,10], n = 10, s = 15;

  let flag = 0,
    start = 0,
    sum = 0;
  for (var i = 0; i < n; i++) {
    sum = sum + arr[i];

    while (sum > s) {
      sum = sum - arr[start];
      start++;
    }

    if (sum === s) {
      flag = 1;
      return `${start + 1}, ${i + 1}`;
    }
  }
  if (flag === 0) {
    return -1;
  }
}

console.log("subArrayWithSum", subArrayWithSum()); // 2, 4

//<------------------------Find Missing number from the array------------------------>

function findMissingNumber() {
  const arr = [1, 2, 3, 5],
    N = 5;
  //   const arr = [6,1,2,8,3,4,7,10,9], N = 10;

  const total = (N * (N + 1)) / 2; //find sum of first n numbers, summision formula
  let sum = 0;

  for (var i = 0; i < N - 1; i++) {
    sum = sum + arr[i];
  }

  return total - sum;
}

console.log(findMissingNumber()); // 4

//<------------------------Check x value and accordingly return output------------------------>

var x = "198266"; // high

try {
  if (x == "") {
    throw "empty";
  }
  if (isNaN(x)) {
    throw "not a no";
  }
  x = Number(x);
  if (x < 5) {
    throw "low";
  }
  if (x > 10) {
    throw "high";
  }
} catch (error) {
  console.log(error);
}

//<------------------------Write generator functions & return its output------------------------>

function* charchterrange(a, b) {
  for (let i = a; i <= b; i++) {
    yield i;
  }
}

function generatorRange(a, b) {
  if (typeof a === "string") {
    let res = [...charchterrange(a.charCodeAt(), b.charCodeAt())].map((n) =>
      String.fromCharCode(n)
    );
    console.log(res);
  } else {
    let res = [...charchterrange(a, b)];
    console.log(res);
  }
}

generatorRange(1, 5); //[ 1, 2, 3, 4, 5 ]
generatorRange("A", "G"); //['A', 'B', 'C', 'D', 'E', 'F', 'G']

//<------------------------Find Frequency of the words------------------------>
let arrr = ["hello", "world", "java", "hello", "java"];

function findFrequency() {
  //Using an object
  // let count = {}

  // arrr.map(item => {
  //     if(!count[item]){
  //         count[item] = 0
  //     }
  //     count[item] = count[item] + 1
  // })

  // return count;

  //Using reduce method
  let result = arrr.reduce((allName, name) => {
    if (name in allName) {
      allName[name]++;
    } else {
      allName[name] = 1;
    }
    return allName;
  }, {});
  return result;
}

console.log(findFrequency()); //{ hello: 2, world: 1, java: 2 }

//<------------------------Group items on the basis of age of given array------------------------>
let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function ageGroup() {
  return people.reduce((result, currentValue) => {
    (result[currentValue["age"]] = result[currentValue["age"]] || []).push(
      currentValue
    );
    console.log("result", result);
    return result;
  });
}

console.log(ageGroup());

//<------------------------Get Center Value from list of elements after sorting, If Array size is odd then return center else return average of 2 Middle elements------------------------>

let array = [4, 3, 2, 1, 6];

function sortElements() {
  const newArr = array;
  for (var i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      const temp = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = temp;

      //updating the value of i = -1 so after getting updated for i++
      //in the loop it becomes 0 and the loop begins from the start
      i = -1;
    }
  }
  return newArr;
}

function getCenterElement() {
  const length = array.length;
  const sortedElements = sortElements();
  if (length % 2 === 0) {
    return (
      parseInt(
        sortedElements[parseInt(length / 2)] +
          sortedElements[parseInt(length / 2)] -
          1
      ) / 2
    );
  } else {
    return sortedElements[parseInt(length / 2)];
  }
}

const result3 = getCenterElement();
console.log(result3); // For even [ 1, 2, 3, 4, 5, 6 ], output is , For odd [ 1, 2, 3, 4, 6 ], output is 3

//<------------------------Get encoded string from input given------------------------>

function encodeString(input) {
  let output = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      output += input[i] + count;
      count = 1;
    }
  }

  return output;
}

const input1 = "abcabcd";
const encodedString = encodeString(input1);
console.log(encodedString); //a1b1c1a1b1c1d1

//<------------------------Count the no length without using string or split------------------------>

const no = 1213;

const countNumbers = () => {
  let temp = no;
  let count = 0;
  while (temp > 0) {
    let r = temp % 10;
    count += 1;
    temp = parseInt(temp / 10);
  }
  return count;
};

console.log(countNumbers()); //4

//<------------------------based on a token number, output should be lucky draw winner or not a lucky draw winner
//Condition: If sum of last 2 digits is 3 or 8 then it is lucky draw winner else not------------------------>

const number = 1021;

function getWinner() {
  let sum = 0;
  let temp = number;
  for (var i = 0; i < 2; i++) {
    let remainder = temp % 10;
    sum += remainder;
    temp = parseInt(temp / 10);
  }
  if (sum == 3 || sum == 8) {
    return "lucky draw winner";
  } else {
    return "Not a lucky draw winner";
  }
}

const winner = getWinner();
console.log(winner); //lucky draw winner

//<------------------------Program statement given below------------------------>
//Student receive grade from 0 to 100. Any grade less than 40 is a failing grade.
//If difference between grade and next multiple of 5 is less than 3 , round grade to next multiple of 5.
//If value of grade is less than 38, no rounding occurs as result will be failing grade.
//Ex:
// grade = 84 round to 85 (85 - 84 is less than 3)
// grade = 29 do not round (less than 40)
// grade = 57 do not round (60 - 57 is higher than 3)
// const arrr = [4, 73, 67, 38, 33]; // 75, 67, 40, 33
const arrr = [37, 38, 39, 40, 41, 100, 102, 99, 96, 97, -1];

function multiple(item) {
  const y = parseInt(item / 5);
  console.log(y, item);
  const z = y * 5 + 5;
  console.log(z);
  return z;
}

function grade(arrr) {
  const newarrr = [];
  for (var i = 0; i < arrr.length; i++) {
    if (arrr[i] >= 38 && arrr[i] <= 100) {
      const x = multiple(arrr[i]);
      const y = x - arrr[i];
      console.log("yy", y);
      if (y >= 3) {
        newarrr.push(arrr[i]);
      } else {
        newarrr.push(x);
      }
    }
    if (arrr[i] < 38 && arrr[i] >= 0) {
      newarrr.push(arrr[i]);
    }
    if (arrr[i] > 100 || arrr[i] <= 0) {
      newarrr.push(-1);
    }
  }
  return newarrr;
}

const resulttt = grade(arrr);
console.log("resultt", resulttt); //[37, 40,  40, 40, 41, 100, -1, 100, 96, 97, -1]

//<------------------------Different Patterns------------------------>
let string = "";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);
//*****
// *****
// *****
// *****
// *****

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);
// *
// **
// ***
// ****
// *****

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);
// *****
// ****
// ***
// **
// *

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    string = string + j;
  }
  string = string + "\n";
}
console.log(string);
// 1
// 12
// 123
// 1234
// 12345

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    string = string + i;
  }
  string = string + "\n";
}
console.log(string);
// 1
// 22
// 333
// 4444
// 55555
