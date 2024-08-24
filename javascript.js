function show() {
  console.log(a); //undefined
  var a = 10;
}
show();

// var a = 20;
// function show1() {
//   console.log(a); //undefined
//   var a = 10;
// }
// show1();

const x = { name: "Vivek" };
// x = {address: "India"}; //Error if uncommented
x.name = "Nikhil";
console.log(x.name); //Nikhil

function show3() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  console.log(4);
}

//show3(); //1, 4, 2

function show4() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  Promise.resolve(function () {
    console.log(3);
  }).then((res) => res());
  console.log(4);
}

show4(); //1, 4, 3, 2

//Sequence of below program: A, C, D, E, B
console.log("A");

setTimeout(() => {
  console.log("B");
});

["c", "D"].forEach((x) => console.log(x));

console.log("E");

//Get Output for below program
var obj = {
  helloWorld: function () {
    return "hello world" + this.name;
  },
  name: "Hello",
};

var obj2 = {
  helloWorld: obj.helloWorld,
  name: "bye",
};

console.log(obj2.helloWorld()); //hello worldbye
console.log(obj2.helloWorld.call(obj)); //To get hello as output //hello worldHello

console.log(108 == ["108"]); //true

console.log("" == []); //true

class person1 {}

console.log(typeof person1); //function

console.log((true + "")[3]); //e

const name1 = "Hello";
age = 21;

console.log(delete name1); //false
console.log(delete age); //true

var a = 5;
var b = a;
a = 7;
console.log(a, b); //7, 5

var arr = [1];
var arr2 = arr;
arr.push(4);
console.log(arr, arr2); //[ 1, 4 ] [ 1, 4 ]

const obj = {
  name: this,
  foo: function () {
    return this;
  },
};
function bar() {
  return this;
}

//what will be the outputs
console.log("name", obj.name); //{}
console.log(obj.foo()); //{ name: {}, foo: [Function: foo] }
console.log(bar()); //this global object

const obj1 = {
  a: this,
  b: function () {
    return this;
  },
  c: () => {
    return this;
  },
  d() {
    return this;
  },
  e: function () {
    return this.a;
  },
};

// {
//    a: {},
//    b: [Function: b],
//    c: [Function: c],
//    d: [Function: d],
//    e: [Function: e]
//  }
console.log(obj1);

//Output will be 1, 5, 3, 2, 4
// console.log(1);
// setTimeout(()=>console.log(2), 0);
// Promise.resolve().then(()=>console.log(3));
// setTimeout(()=>console.log(4), 1);
// console.log(5);

//Output will be 1, 5, 3, 4, 2
console.log(1);
setTimeout(() => console.log(2), 100);
Promise.resolve().then(() => console.log(3));
setTimeout(() => console.log(4), 50);
console.log(5);

// Output will be This will be printed first, Next Tick, Immediate
// setImmediate(() => {
//   console.log("Immediate");
// });
// process.nextTick(() => {
//   console.log("Next Tick");
// });
// console.log("This will be printed first");

// Output will be Next Tick, Timeout, Immediate
// setImmediate(() => {
//   console.log("Immediate");
// });
// setTimeout(() => {
//   console.log("Timeout");
// },);
// process.nextTick(() => {
//   console.log("Next Tick");
// });

// Output will be Next Tick, Immediate, Timeout
setImmediate(() => {
  console.log("Immediate");
});
process.nextTick(() => {
  console.log("Next Tick");
});
setTimeout(() => {
  console.log("Timeout");
}, 10);

let key = "0";
let botMsg;
switch (key) {
  case 0:
    botMsg = "off";
    break;
  case 1:
    botMsg = "On";
    break;
  default:
    botMsg = "No ";
}

console.log(botMsg); //No

//Get Output for below program
var greeting = "hi";
function hacker() {
  console.log(greeting); // undefined
  var greeting = "hello";
}

hacker();

const person = {
  name: "Tiger",
};
let animal = {
  name: "Lion",
};
// person = animal;
console.log(person); //Error assignment to constant variable

const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Moon!";
    return this.message;
  },
};

console.log(object.getMessage()); //Hello, Moon!

//Get Output for below program
// let empId = 486654;
// let nextId = (empId + 1).toString();
// let score = 832.324
// let expScore = score.toExponential(2)

// console.log(empId) //486654
// console.log(nextId) //486655
// console.log(score) //832.324
// console.log(expScore) //8.32e+2

//Get Output for below program
const empId = new Set();

empId.add("32156");
empId.add("45613");
empId.add("712233");
empId.add("32156");
empId.add("45612");
empId.add("45613");
empId.add("712233");

let allIds = "";

empId.forEach(function (value) {
  allIds += value + " , ";
});

console.log(allIds); //32156 , 45613 , 712233 , 45612

//Get Output for below program
function f1(arr) {
  let len = arr.length;
  let a = -Infinity;
  while (len--) {
    if (arr[len] > a) {
      a = arr[len];
    }
  }
  return a;
}

function f2(arr) {
  let len = arr.length;
  let b = Infinity;
  while (len--) {
    if (arr[len] < b) {
      b = arr[len];
    }
  }
  return b;
}

let ids = [1324214124, 4112412412, 142541242, 214312124, 13453523532];
console.log(ids); //[ 1324214124, 4112412412, 142541242, 214312124, 13453523532 ]

let ids1 = Math.max.apply(null, ids);
console.log(ids1); //13453523532

let ids2 = Math.min.apply(null, ids);
console.log(ids2); //142541242

console.log(f1(ids1)); //-Infinity
console.log(f2(ids2)); //Infinity

console.log(isNaN(34)); //false

const person2 = {
  name: "Megha",
  age: 26,
};

//console.log(Object.entries(person))

//Without object.entries
const getObjectEntries = (obj) => {
  const objKeys = Object.keys(obj);

  const result = objKeys.map((key) => {
    const value = obj[key];
    return [key, value];
  });

  return result;
};

const result = getObjectEntries(person2);
console.log(result);
//Output
// [
//   [
//       "name",
//       "Megha"
//   ],
//   [
//       "age",
//       26
//   ]
// ]

// function playerFactory(name){
//     function getName(){
//         return name;
//     }

//     return {getName}
// }

// const test = playerFactory("megha");
// console.log(test); //{ getName: [Function: getName] }
// console.log(test.name); //undefined
// console.log(test.getName()); //megha

// function outer() {

//   const b = 50;

//   function inner() {
//     const a = 100;
//     console.log(`a is ${a} and b is ${b}, the sum is ${a+b}`);
//   }
//   return inner;
// }

// // first invocation of outer
// const fnFirst = outer();
// // second invocation of outer
// // const fnSecond = outer();

// console.log(fnFirst());
// // console.log(fnSecond);

// Output of follwing:
// console.log(3 + "1") //"31"
// console.log("1" - 3) //-2
// console.log(3 + 1) //4
// console.log("1" + [3]) //13
// console.log("1" + [3, 4]) //13, 4
// var a = {name: "Megha"}
// var b = a;
// console.log(a == b); // true
// console.log(a === b); // true

// var c = {name: "Megha"}
// var d = {name: "Megha"}
// console.log(c == d); //true
// console.log(c === d); //false, as it is pointing to different location
