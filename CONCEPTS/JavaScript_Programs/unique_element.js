// function countUniqueElements(arr) {
//     // Create an empty object to keep track of unique elements
//     const uniqueElements = {};

//     // Loop through the array
//     for (const num of arr) {
//       // Use the element as a key in the object
//       uniqueElements[num] = true;
//     }

//     // Count the number of keys (unique elements) in the object
//     const count = Object.keys(uniqueElements).length;

//     return count;
//   }

//   const inputArray = [1, 2, 2, 1, 1];
//   const result = countUniqueElements(inputArray);
//   console.log(result); // Output should be 2


//////////////////////////////////////////////////////////////


// function countUniqueElements(arr) {
//     // Create a Set to store unique elements
//     const uniqueElements = new Set(arr);

//     // Return the size (number of unique elements) of the Set
//     return uniqueElements.size;
//   }

//   const inputArray = [1, 2, 1, 2, 3, 2, 1];
//   const result = countUniqueElements(inputArray);
//   console.log(result); // Output should be 3


//////////////////////////////////////////////////////////////////


function countUniqueElements(arr) {
    // Create a Set to store unique elements
    const uniqueElements = new Set(arr);

    // Return the size (number of unique elements) of the Set
    return uniqueElements.size;
  }

  const inputArray = [1, 2, 1, 2];
  const result = countUniqueElements(inputArray);
  console.log(result); // Output should be 2 // This is the correct output

