// using splice

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 'banana' and 'cherry' from the array
fruits.splice(1, 2);// if we take (1,3) it will splice 1 to 3 elements in the input o/p is ['apple']

console.log(fruits); // Output: ['apple', 'date']
