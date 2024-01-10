// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Assuming the operation was successful
      resolve("fulfilled");
    }, 2000); // Resolve after 2 seconds
  });

  // Using the Promise
  myPromise.then((result) => {
    console.log(result); // Output: fulfilled
  }).catch((error) => {
    console.error(error);
  });


//   In this example:

// We create a Promise called myPromise that simulates an asynchronous operation using setTimeout.
// Inside the Promise executor function, after a delay of 2 seconds, we resolve the Promise
//  with the value "fulfilled."
// We use .then() to specify a callback function that will be called when the Promise is fulfilled.
//  In this callback, we log "fulfilled" to the console.
// If an error occurs during the Promise execution, it will be caught by the .catch() block,
//  but in this case, we don't have any errors.
// When you run this code, you will see "fulfilled" printed to the console after a 2-second delay,
//  indicating that the Promise has been fulfilled successfully.
