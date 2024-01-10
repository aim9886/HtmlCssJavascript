// Here's an example of using Promises to simulate a delayed task (like fetching data from a server):


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate a successful response after 2 seconds
//         const data = { message: "Data fetched successfully" };
//         resolve(data);
//       }, 2000);
//     });
//   }

//   // Using the promise
//   fetchData()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

    // In this example, fetchData() returns a Promise.
    // We use .then() to specify what should happen when the Promise resolves
    // (i.e., when the data is fetched successfully),
    // and .catch() to handle errors if the Promise is rejected.

    ////////////////////////////////////////////////////////////////////////////////////////

    // Here's the same example using async/await:


    // async function fetchData() {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         const data = { message: "Data fetched successfully" };
    //         resolve(data);
    //       }, 2000);
    //     });
    //   }

    //   async function getData() {
    //     try {
    //       const result = await fetchData(); // Wait for the Promise to resolve
    //       console.log(result);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    //   // Using async/await
    //   getData();

    //   In this example, the getData() function is marked as async,
    //   and it uses await to pause execution until the fetchData() Promise resolves or rejects.
    //   This makes the code more linear and easier to follow.



//     In summary:

// Use Promises when you need to work with asynchronous operations in a callback-based manner.

// Use async/await when you want to write asynchronous code that resembles synchronous code,
// making it more readable and maintainable.


/////////////////////////////////////////////////////////////////////////////////////////////

// When you need to run multiple asynchronous operations concurrently:
// Promises can be used with Promise.all() or Promise.race()
// to manage multiple asynchronous tasks concurrently.

// const promise1 = fetchData1();
// const promise2 = fetchData2();

// Promise.all([promise1, promise2])
//   .then(([result1, result2]) => {
//     console.log(result1, result2);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//////////////////////////////////////////////////////////////////////////////////////////////

// When you want to write more readable and
// synchronous-looking code: Async/await is a more concise and readable way to work
// with asynchronous operations, making your code easier to understand.

// async function getData() {
//     try {
//       const result = await fetchData();
//       console.log(result);
//       const processedResult = await processResult(result);
//       console.log(processedResult);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getData();

///////////////////////////////////////////////////////////////////////////////////////////

// When handling one asynchronous operation after
// another: If you need to perform a series of asynchronous tasks one after another,
// async/await can make your code look sequential and maintainable.


//   async function fetchAndProcessData() {
//     try {
//       const data = await fetchData();
//       const processedData = await process(data);
//       const finalResult = await saveData(processedData);
//       console.log(finalResult);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   fetchAndProcessData();




