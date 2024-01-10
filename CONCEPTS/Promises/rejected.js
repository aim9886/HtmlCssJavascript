// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Simulating an error condition
      reject("rejected");
    }, 2000); // Reject after 2 seconds
  });

  // Using the Promise
  myPromise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error); // Output: rejected
  });



//   In this example:

// We create a Promise called myPromise that simulates an asynchronous operation using setTimeout.
// Inside the Promise executor function, after a delay of 2 seconds, we reject the Promise
//  with the value "rejected" to simulate an error condition.
// We use .then() to specify a callback function that will be called when the Promise is fulfilled.
//  However, in this case, the Promise is rejected, so this callback won't execute.
// Instead, the error is caught by the .catch() block, and we log "rejected" to the console.
// When you run this code, you will see "rejected" printed to the console after a 2-second delay,
//  indicating that the Promise has been rejected.




