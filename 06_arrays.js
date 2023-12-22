// create an empty arra

const emptyArr = [];
const anotherArr = new Array();

console.log(emptyArr, anotherArr);

// Creating an array using split
// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.

let myName = "K h a l i d";
console.log(myName.split(" "));

// Accessing array items using index
// We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.

// console.log(myName.

// Write a function that calculates the sum of prime numbers within a given range (between start and end). Use a for loop to iterate through the numbers in the specified range and identify prime numbers.
function primeNumber(startNum, endNum) {}
primeNumber();
const range = primeNumber(1, 9);
console.log(range);

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(start, end) {
  let sum = 0;
  for (let numb = start; numb <= end; numb++) {
    if (isPrime(numb)) {
      sum += numb;
    }
  }
  return sum;
}

const result = sumOfPrimes(10, 50);
console.log(result); // Expected output: 328
