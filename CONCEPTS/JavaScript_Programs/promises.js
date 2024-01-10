// A function that returns a promise to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const data = { name: "John", age: 25 };
        if (data) {
          resolve(data); // Fulfill the promise with the data
        } else {
          reject("Failed to fetch data."); // Reject the promise with an error message
        }
      }, 2000); // Simulating a 2-second delay
    });
  }

  // Using the fetchData function that returns a promise
  fetchData()
    .then(result => {
      console.log("Data:", result);
      // Handle the fulfillment of the promise (data retrieval)
    })
    .catch(error => {
      console.error("Error:", error);
      // Handle the rejection of the promise (error handling)
    });
