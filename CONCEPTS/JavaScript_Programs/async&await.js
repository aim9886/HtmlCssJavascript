// An asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 25 };
        if (data) {
          resolve(data);
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000);
    });
  }

  // Using async/await to simplify asynchronous code
  async function getData() {
    try {
      const result = await fetchData(); // Pause execution until the promise is fulfilled
      console.log("Data:", result);
      // Continue with the next steps after getting the data

    //   const processedData = processData(result);
    //   console.log("Processed Data:", processedData);

    } catch (error) {
      console.error("Error:", error);
      // Handle the error if the promise is rejected
    }
  }

  // Calling the async function
  getData();
