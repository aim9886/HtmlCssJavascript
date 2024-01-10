let arr = [1, 2, 3, 4];
let targetValue = 4;
let found = false; // Variable to keep track of whether a pair has been found

for (let i = 0; i < arr.length && !found; i++) {
  for (let j = i + 1; j < arr.length && !found; j++) {
    if (arr[i] + arr[j] === targetValue) {
      console.log(`The first element at index ${i} can be combined with element at index ${j} to result in the value 4.`);
      found = true; // Set found to true to stop further searching
    }
  }
}


// let arr = [1, 2, 3, 4];
// let targetValue = 2; // Change the target value to 2
// let found = false; // Variable to keep track of whether a pair has been found

// for (let i = 0; i < arr.length && !found; i++) {
//   for (let j = i + 1; j < arr.length && !found; j++) {
//     if (arr[i] + arr[j] === targetValue) {
//       console.log(`The first pair of elements at index ${i} and ${j} results in the value 2.`);
//       found = true; // Set found to true to stop further searching
//     }
//   }
// }


// If you are looking for a program to find a pair of elements that sum to 2,
//  you would need to provide an array that contains such a pair,
//   as there is no pair in the provided array that meets that criteria.

