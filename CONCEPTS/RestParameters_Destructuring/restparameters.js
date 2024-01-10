// RestParameters

// Rest Parameters: Rest parameters are used in function declarations to collect all
// the remaining arguments into a single array parameter.
// This is indicated by an ellipsis (...) followed by the parameter name.
// Here's an example:


function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log(sum(1, 2, 3, 4)); // Output: 10

  // In this example, the numbers parameter collects all the arguments passed
  // to the sum function into an array.