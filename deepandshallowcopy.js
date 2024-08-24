let x = "test1";
let y = x;
y = "test2";
console.log(x); //test1
console.log(y); //test2

//When we copy variable it copies the value and it passed by copy but when object is copied it takes up the reference due to
//which it is passed by reference

//This happens as when we copy a object, data is not copied, reference is copied instead (memory location is copied & both will
//contain same) Copy by reference
let obj = {
  name: "test",
};

let user = obj;
user["name"] = "john";

console.log(obj); //{ name: 'john' }
console.log(user); //{ name: 'john' }

//To find solution for copy of object we have different ways:
//Deep Copy & Shallow Copy

// ---> Shallow Copy
//(Solution for above program):
let obj1 = {
  name: "test",
};

//First way:
//let user1 = Object.assign({}, obj1);
//Second way:
let user1 = { ...obj1 };

user1["name"] = "john";

console.log(user1); //{ name: 'john' }
console.log(obj1); //{ name: 'test' }

//One more problem:
let obj2 = {
  name: "peter",
  address: {
    city: "faridabad",
    state: "haryana",
  },
};

let user2 = { ...obj2 };
user2.address.city = "gurgaon";

console.log(user2); //{ name: 'peter', address: { city: 'gurgaon', state: 'haryana' } }
console.log(obj2); //{ name: 'peter', address: { city: 'gurgaon', state: 'haryana' } }

//In above example if nested objects are there then shallow copy doesn't work as orginal object also got modified. so we will
//go with deep copy

// ---> Deep Copy

let obj3 = {
  name: "peter",
  address: {
    city: "faridabad",
    state: "haryana",
  },
};

let user3 = JSON.parse(JSON.stringify(obj3));
user3.address.city = "gurgaon";

console.log(user3); //{ name: 'peter', address: { city: 'gurgaon', state: 'haryana' } }
console.log(obj3); //{ name: 'peter', address: { city: 'faridabad', state: 'haryana' } }

//This is only the way to use for deep copy but it also has one limitation:

let obj4 = {
  name: "peter",
  address: {
    city: "faridabad",
    state: "haryana",
  },
  getData: function () {
    return "all data is here";
  },
};

let user4 = JSON.parse(JSON.stringify(obj4)); //using Javascript
//let user4 = _.cloneDeep(obj4);  //Using lodash which solves problem of function and date
user4.address.city = "gurgaon";

console.log(user4); //{ name: 'peter', address: { city: 'gurgaon', state: 'haryana' } }
console.log(obj4); //{
//     name: 'peter',
//     address: { city: 'faridabad', state: 'haryana' },
//     getData: [Function: getData]
//   }

//As we can see user object doesnot contain any function. Deep copy does not work with functions and date. If date is there
//then user will have date but it work as same way & function will not be there in user object. It does not have any solution
//in javascript so we can use lodash library instead.

//Summary:

// Shallow Copy:

// Shallow copy creates a new object and copies the references of the original object’s elements into the new object.
// The new object references the same memory locations as the original object for its elements.
// If any changes are made to the shared elements in the new or original object, the changes will be reflected in both.
// Shallow copy is a relatively faster operation and requires less memory.
// Shallow copy is suitable when you want to create a new object, but you don’t need independent copies of the elements.

// Deep Copy:

// Deep copy creates a new object and recursively copies the elements of the original object, including any objects referenced within it.
// The new object has its own memory locations for all the elements, including the referenced objects.
// Changes made to the elements in the deep copy do not affect the original object or any other copied objects.
// Deep copy is a relatively slower operation and requires more memory, especially for complex data structures.
// Deep copy is suitable when you want to create a completely independent copy of an object, including all its nested objects.
// To summarize, shallow copy creates a new object that references the same elements as the original object, while deep copy creates a new object with its own copies of all elements, including any referenced objects.

// Use shallow copy when:

// You want to create a new object or collection quickly.
// You don’t want to duplicate the entire structure but only need a new reference to the existing elements.
// Modifying the copied elements simultaneously modifies the original ones as well.

// Use deep copy when:

// You need a completely independent copy of the original object.
// You want to modify the copied elements without affecting the original ones.
// The structure you’re copying contains nested objects or collections that also need to be copied.
