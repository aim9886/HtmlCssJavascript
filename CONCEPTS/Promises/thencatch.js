// then() method.

// The then() and catch() methods are used to handle asynchronous operations when
// working with Promises in JavaScript. Here's when and how to use them:

// 1. then() method:

// Use then() when you want to specify what should happen when a Promise is successfully resolved.
// You can chain multiple then() methods to create a sequence of actions to be
// performed after each step of the Promise chain.
// Example:

// Suppose you have a Promise that simulates fetching data from a server:

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully" };
        resolve(data);
      }, 2000);
    });
  }

  // You can use then() to specify what happens after the Promise resolves:

  fetchData()
  .then((result) => {
    console.log(result); // Handle the resolved data
    // You can chain more actions here
    return processResult(result);
  })
  .then((processedResult) => {
    console.log(processedResult); // Handle the result of the second step
  })
  .catch((error) => {
    console.error(error); // Handle errors if they occur in any step
  });

//   In this example, the first then() handles the resolved data,
//   and the second then() handles the result of processResult().
//   If any errors occur at any step of the chain, they will be caught by the catch() method.

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // catch() method.

//   2. catch() method:

// Use catch() when you want to specify what should happen
// if a Promise is rejected (an error occurs).
// You typically place catch() at the end of your Promise chain to handle
// any errors that may occur at any step in the chain.
// Example:

// Suppose you have a Promise that simulates an error scenario:

  function fetchError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = new Error("Failed to fetch data");
        reject(error);
      }, 2000);
    });
  }

  // You can use catch() to handle any errors that occur during the Promise chain:

  fetchError()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Handle the error
  });

//   In this example, since the Promise is rejected in fetchError(),
//   the catch() method is called to handle the error.



// In summary:

// Use then() to handle successful resolution of a Promise and chain multiple then() methods
// for sequential actions.
// Use catch() to handle errors that occur at any step in the Promise chain.
// By combining then() and catch() appropriately, you can effectively manage both successful
// and error scenarios when working with Promises in JavaScript




