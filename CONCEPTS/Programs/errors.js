// Array methods

// Let arr = [a,b,c,1,3,6,e]
// (1)Display only the string values of array arr.
// (2)Display sum of the numbers in the array arr.
// (Note they on purpose declare let arr =
// [a,b,c,1,3,6,e], when we try to run the code it throws
// reference error…! Because strings should always be
// declared withing the quotes (‘ ’) or else JS engine
// consider them as variables…!
// let arr = = [‘a’,‘b’,’c’,1,3,6,’e’] is correct way to declare).

let arr = ['a', 'b', 'c', 1, 3, 6, 'e'];

// (1) Display only the string values of array arr
const stringsInArray = arr.filter(item => typeof item === 'string');
console.log('String values in the array:', stringsInArray);

// (2) Display sum of the numbers in the array arr
const sumOfNumbers = arr.reduce((sum, item) => (typeof item === 'number' ? sum + item : sum), 0);
console.log('Sum of numbers in the array:', sumOfNumbers);


// O/P:

// String values in the array: [ 'a', 'b', 'c', 'e' ]
// Sum of numbers in the array: 10