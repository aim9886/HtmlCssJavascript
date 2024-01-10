// Simulated asynchronous function to load a file that always rejects
function loadFile(filePath) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Error loading ${filePath}`));
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

    //O/P: Error while loading the file:
//         Error loading example.txt
