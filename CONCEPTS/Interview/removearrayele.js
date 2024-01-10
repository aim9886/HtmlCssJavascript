// when we have to remove only 1 elements in an array

// To remove the element "3" from the array [1, 2, 3, 4, 5] in JavaScript,
// you can use the filter method. Here's the code:



const inputArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const outputArray = inputArray.filter(number => number !== elementToRemove);

console.log(outputArray); // Output: [1, 2, 4, 5]


// In this code, the filter method is used to create a new array called outputArray
// that contains only the elements from inputArray which are not equal to the elementToRemove
//  (in this case, 3). This will result in [1, 2, 4, 5].



/////////////////////////////////////////////////////////////////////////////////

// when we have to remove more than 2 elements in an array

// To remove the elements "3" and "5" from the array [1, 2, 3, 4, 5] in JavaScript,
//  you can use the filter method with a condition to exclude these values. Here's the code:

const input = [1, 2, 3, 4, 5];
const elementsToRemove = [3, 5]; // Elements to be removed

const output = input.filter(number => !elementsToRemove.includes(number));

console.log(output); // Output: [1, 2, 4]


// In this code, we define an array called elementsToRemove containing
//  the values you want to remove (3 and 5). We then use the filter method to create a
//   new array called outputArray, which contains only the elements from inputArray
//    that are not included in the elementsToRemove array. This results in [1, 2, 4].








