function firstFunction() {
    // Simulate a code delay
    setTimeout(function () {
      console.log("First function called");
    }, 1000);
  }
  function secondFunction() {
    console.log("Second function called");
  }
  firstFunction();
  secondFunction();

  // Output;
  // Second function called
  // First function called

// How do you parse JSON stringify :

// var userJSON = { name: "John", age: 31 };
// var userString = JSON.stringify(userJSON);
// console.log(userString); //"{"name":"John","age":31}"

// How do you parse JSON string :

// var userString = '{"name":"John","age":31}';
// var userJSON = JSON.parse(userString);
// console.log(userJSON); // {name: "John", age: 31}