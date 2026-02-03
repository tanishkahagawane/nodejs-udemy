//---------- 1. Let , var , const ----------------------------------------

// // var name = "Max";
// // var age = 22;
// // var hasHobbies = true;

// let name = "Max";
// const age = 22;
// let hasHobbies = true;

// //age = 23;

// // function summarizeUser(userName, userAge, userHasHobbies) {
// //   return (
// //     "Name is " +
// //     userName +
// //     ", age is " +
// //     userAge +
// //     " and the user has hobbies: " +
// //     userHasHobbies
// //   );
// // }

// //console.log(summarizeUser(name, age, hasHobbies));

// //---------- 2.Arrow function ----------------------------------------

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobbies
//   );
// };

// console.log(summarizeUser(name, age, hasHobbies));

// //diff - Arrow function has this

// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const addOne = (a) => a + 1;
// console.log(addOne(1));

// const addRandom = () => 1 + 2;
// console.log(addRandom());

//----------3.Objects, Properties and Methods----------------------------------------

// const person = {
//   name: "Max",
//   age: 29,
//   //   greet: () => {
//   //     console.log("Hi, I am " + this.name); //undefined.why? ->
//   //     // This now here refres to the global scope to the global node runtime scope and not this object
//   //     // to refer that use normal function or
//   //   },
//   //   greet: function () {
//   //     console.log("Hi, I am " + this.name); //Max
//   //   },

//   //OR
//   greet() {
//     console.log("Hi, I am " + this.name); //Max
//   },
// };

// console.log(person);
// person.greet();

//----------4.Arrays and Array Methods----------------------------------------
// const hobbies = ["sports", "Cooking"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(
//   hobbies.map((hobby) => {
//     return "hobby :" + hobby;
//   }),
// );
// console.log(hobbies); // original is not edited

//----------5.Arrays, Objects and Reference types---------------------------------------

// hobbies.push("programming");
// console.log(hobbies);

// Objects and Arrays are so called refernce types
// reference types only stores an address pointing at the place in memory where that array is stored
// and that address has not changed by adding a new element
// therefore constant value has not changed
// pointing has changed

//copy Array
// const copiedArray = hobbies.slice();
// console.log(copiedArray); // [ 'sports', 'Cooking' ]

//----------6.Spread and rest operator ----------------------------------------

// const copiedArray1 = [hobbies];
// console.log(copiedArray1);

// const copiedArray2 = [...hobbies]; //spread // pulls all the elements of array or all properties of an object
// // and put it to whatever is around
// console.log(copiedArray2);

// //obj
// const person = {
//   name: "max",
//   age: 20,
// };

// const copiedPerson = { ...person };
// console.log(copiedPerson);

// //rest
// // const toArray = (arg1, arg2, arg3) => {
// //   return [arg1, arg2, arg3];
// // };

// const toArray = (...args) => {
//   //rest
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

//----------7.Destructuring ----------------------------------------

// const person = {
//   name: "max",
//   age: 20,
// };

// const printName = (personData) => {
//   console.log(personData.name);
// };

//obj Destructuring
// const printName = ({ name, age }) => {
//   console.log(name);
// };

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// //array Destructuring

// const hobbies = ["Sports", "Cooking"];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

//----------8.Async Code and Promises ----------------------------------------
// setTimeout(() => {
//   console.log("Timer is done!"); // call back functions
// }, 1);

// console.log("Hello!");
// console.log("Hi!");

// Hello!
// Hi!
// Timer is done!

//Nodejs and javascript in general does not block your code execution until that is done

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 1500);
// };
// setTimeout(() => {
//   console.log("Timer is done!"); // call back functions
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// console.log("Hello!");
// console.log("Hi!");

// Hello!
// Hi!
// Timer is done!
// Done!

// if we have a couple of nested async calls , we go deeper and deeper from a callback persepective

//Promises

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1500);
//   });
//   return promise;
// };
// setTimeout(() => {
//   console.log("Timer is done!"); // call back functions
//   fetchData()
//     .then((text) => {
//       console.log(text);
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);

// console.log("Hello!");
// console.log("Hi!");

// Hello!
// Hi!
// Timer is done!
// Done!

//----------9.Template Literals- ----------------------------------------
// Instead of using double or single quotation marks:

// 'A String'

// or

// "Another string"

// you can use backticks (`)

// `Another way of writing strings`

// Now why would we use that way of creating strings?

// With that syntax, you can dynamically add data into a string like this:

// const name = "Max";
// const age = 29;
// console.log(`My name is ${name} and I am ${age} years old.`);
// This is of course shorter and easier to read than the "old" way of concatenating strings:

// const name = "Max";
// const age = 29;
// console.log("My name is " + name + " and I am " + age + " years old.");
