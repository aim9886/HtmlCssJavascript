// using slice and concat

const animals = ['cat', 'dog', 'elephant', 'giraffe'];

// Remove 'elephant' from the array
const indexToRemove = animals.indexOf('elephant');// if we take dog also it will delete that one also.
const newAnimals = animals.slice(0, indexToRemove).concat(animals.slice(indexToRemove + 1));

console.log(newAnimals); // Output: ['cat', 'dog', 'giraffe']


// In these examples, we removed specific elements from arrays based on different criteria.
// Adjust the code according to your specific requirements for deleting elements from an array.





