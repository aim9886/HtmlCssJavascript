// Simulated asynchronous function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve(`Data: ${randomNumber}`);
        } else {
          reject(new Error(`Error: ${randomNumber}`));
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }

  // Using then() and catch() callbacks
  fetchData()
    .then((data) => {
      console.log(`Success! ${data}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
