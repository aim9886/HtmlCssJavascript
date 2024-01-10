// Using Filter

// Remove odd and even number

const numbers = [1, 2, 3, 4, 5];

// Remove even numbers from the array
const filteredNumbers = numbers.filter(number => number % 2 !== 0);

// Remove odd numbers from the array
// const filteredNumbers = numbers.filter(number => number % 2 === 0);

console.log(filteredNumbers); // Output: [1, 3, 5] // for even
                              // Output: [2, 4] // for odd
