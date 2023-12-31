// Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const { todo } = require("node:test");

// Todo: Destructing Arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [numberOne, numberTwo] = arr;
console.log(numberOne, numberTwo);

//TODO: If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const namesFootballer = ["Messi", "CR7", "Ribery"];
let [firstName, , secondName, thirdName] = namesFootballer;
console.log(firstName, thirdName);

const fullStack = [
  ["HTML", "CSS", "JS"],
  ["Java", "Python", "SQL"],
];

let [frontend, backend] = fullStack;
console.log(frontend, backend);

//TODO: We can use default value in case the value of array for that index is undefined:
const scoreStudent = [undefined, 60, 80];

let [firstScore = 110, secondScore] = scoreStudent;
console.log(firstScore, secondScore);

const oneToHundred = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

let [firstName1, secondName2, ...remaining] = oneToHundred;
console.log(remaining);
console.log(firstName1, secondName2);

// TODO: destructuing during for ... in loop
const continent = [
  ["Nigeria", "Niger", "Chad", "Cameroon"],
  ["China", "Malaysia", "Chile"],
];

for (let [Africa, Asia] of continent) {
  console.log(Africa, Asia);
}

// TODO: destructuring Objects

const objFootballers = {
  leo: "Messi",
  Cristiano: "Ronaldo",
  Sergio: "Busquit",
};

let { leo, Cristiano, Sergio } = objFootballers;
console.log(leo, Cristiano, Sergio);


console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.warn(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
);