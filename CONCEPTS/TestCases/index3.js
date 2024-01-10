function filterStrings(...args) {
    const filteredStrings = args.filter((item) => typeof item === 'string');
    return filteredStrings;
  }

  // Example usage:
  const mixedData = [1, 'apple', true, 'banana', 'cherry'];
  const extraStrings = ['date', 'elderberry'];

  const filteredArray = filterStrings(...mixedData, ...extraStrings);

  console.log(filteredArray);


  // O/P:

  // ['apple', 'banana', 'cherry', 'date', 'elderberry']


//   Question - 3

// You are working on a task to filter and process strings from an array of mixed data types. Your goal is to 
// filter out all the strings from the array and store them in a separate array, while ignoring other data 
// types.
// Write a JavaScript function called filterStrings that takes an array of mixed data types as input and 
// returns an array containing only the strings found in the input array. 
// Additionally, modify the function to accept any number of arguments (using the rest parameter) and 
// include those extra arguments as strings in the filtered array. 
// For example, given the input array [1, 'apple', true, 'banana', 'cherry'] and additional strings 'date' and 
// 'elderberry', the function should return ['apple', 'banana', 'cherry', 'date', 'elderberry']. 
// Provide code for the filterStrings function and an example of how to use it with different sets of 
// arguments