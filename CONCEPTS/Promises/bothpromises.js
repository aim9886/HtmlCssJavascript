// Fulfilled Promise
const fulfilledPromise = new Promise((resolve, reject) => {
    // Simulating a successful asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Assuming the operation was successful
      resolve("fulfilled");
    }, 2000); // Resolve after 2 seconds
  });

  // Rejected Promise
  const rejectedPromise = new Promise((resolve, reject) => {
    // Simulating an error condition
    setTimeout(() => {
      // Simulating an error
      reject("rejected");
    }, 1000); // Reject after 1 second
  });

  // Using the Fulfilled Promise
  fulfilledPromise.then((result) => {
    console.log("Fulfilled Promise:", result); // Output: Fulfilled Promise: fulfilled
  }).catch((error) => {
    console.error("Fulfilled Promise Error:", error);
  });

  // Using the Rejected Promise
  rejectedPromise.then((result) => {
    console.log("Rejected Promise:", result);
  }).catch((error) => {
    console.error("Rejected Promise Error:", error); // Output: Rejected Promise Error: rejected
  });

  // O/P:

//   Rejected Promise Error: rejected
//   Fulfilled Promise: fulfilled



// In this code:

// We create two Promises, fulfilledPromise and rejectedPromise.
// fulfilledPromise simulates a successful operation, and rejectedPromise simulates an error condition.
// We use .then() and .catch() to handle the results and errors for each Promise separately.
// When you run this code, you will see both the "fulfilled" and "rejected" outputs printed to the
//  console at different times. The "fulfilled" output comes after 2 seconds,
//   and the "rejected" output comes after 1 second.