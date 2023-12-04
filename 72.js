// 'use strict'

// var name = "window name";

// function log() {
//   console.log(this.name); // 'this' is always an object.
// }

// var obj = {
//   name: "Ken",
//   logName: log,
// };

// log();
// obj.logName();

// function foo() {
//   console.log(this);
// }

// foo();

// var age = 100;

// function foo() {
//   var age = 99;
//   bar();
// }

// function bar() {
//   console.log(this.age);
// }

// foo();

// var age = 100;

// var ken = {
//   age: 35,
//   foo: function foo() {
//     console.log(this.age);
//   },
// };

// ken.foo();

// var age = 100;

// var ken = {
//   age: 35,
//   foo: function bar() {
//     console.log(this.age);
//   },
// };

// var wan = {
//   age: 31,
//   foo: ken.foo,
// };

// var foo = ken.foo;

// foo();

// foo.call(wan)
// foo.apply(ken)

// function foo() {
//   console.log(this);
// }
// new foo();

// function foo () {
//     this.name = '바닐라코딩';
// }

// var vanillaCoding = new foo();

// console.log(vanillaCoding);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var ken = new Person("ken huh", 34);
var wan = new Person("wan huh", 30);

console.log(ken);
console.log(wan);
