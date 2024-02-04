// Array methods

// Create an array of objects (say 5 objects), it should
// have a name and age key. Now do the following tasks
// (1)Display the names whose age is more than 30.
// (2)Re-initialize the names to null whose age is more
// than 30.

// Array of objects with 'name' and 'age' keys
const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 28 },
    { name: 'Eve', age: 35 },
    { name: 'Charlie', age: 29 }
];

// (1) Display the names whose age is more than 30
const namesAbove30 = people.filter(person => person.age > 30);
console.log('Names whose age is more than 30:', namesAbove30.map(person => person.name));

// (2) Reinitialize the names to null whose age is more than 30
people.forEach(person => {
    if (person.age > 30) {
        person.name = null;
    }
});

// Display the updated array
console.log('\nUpdated array after reinitializing names to null for age more than 30:', people);


// O/P:

// Names whose age is more than 30: [ 'Alice', 'Eve' ]

// Updated array after reinitializing names to null for age more than 30: [
//   { name: 'John', age: 25 },
//   { name: null, age: 32 },
//   { name: 'Bob', age: 28 },
//   { name: null, age: 35 },
//   { name: 'Charlie', age: 29 }
// ]