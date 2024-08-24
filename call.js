const person1 = {
  firstName: "John",
  lastName: "Sharma",
  fullName: function (age) {
    return this.firstName + " " + this.lastName + "age is" + " " + age;
  },
};

const person2 = {
  firstName: "Nick",
  lastName: "John",
};

console.log(person1.fullName.call(person2, 25)); //Nick John is 25
console.log(person1.fullName.apply(person2, [26])); //Nick John is 25
const result = person1.fullName.bind(person2, 27);
console.log(result); //[Function: bound fullName]
console.log(result()); //Nick Johnage is 27

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const result1 = person1.fullName.myBind(person2, 27);
console.log(result1);
