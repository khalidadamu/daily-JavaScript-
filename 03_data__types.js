// String Methods

// Length Methods
let js = "Javascript";
console.log(js);

//Accessing characters in a string
console.log(js[3]);

let jsLastIndex = js.length - 1;
console.log(jsLastIndex);

// substr(): It takes two arguments, the starting index and number of characters to slice.

let lol = "String";
console.log(lol.substr(2, 3));

// charAt():
// Takes index and it returns the value at that index

let string = "30 days of javascript";

console.log(string.charAt(5));
console.log(string.charAt(string.length - 1));

// indexOf():
//  Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns - 1

let indexOfff = "30 days of javascript";

console.log(indexOfff.indexOf("p"));

// ----------------------------------------------------------------
// Challenge;
// ----------------------------------------------------------------

let challenge = "30 days of javascript";
console.log("----------------------------");
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substr(0, 1));
