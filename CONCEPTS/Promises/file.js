// Simulated asynchronous function to load a file
function loadFile(filePath) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fileContent = `Content of ${filePath}`;
        const randomError = Math.random() < 0.2; // Simulate a 20% chance of error

        if (!randomError) {
          resolve(fileContent);
        } else {
          reject(new Error(`Error loading ${filePath}`));
        }
      }, 1500); // Simulate a delay of 1.5 seconds
    });
  }

  // Using then() and catch() callbacks
  loadFile("example.txt")
    .then((content) => {
      console.log("File loaded successfully!");
      console.log("File content: " + content);
    })
    .catch((error) => {
      console.error("Error while loading the file:");
      console.error(error.message);
    });


    //O/P: File loaded successfully!
//         File content: Content of example.txt