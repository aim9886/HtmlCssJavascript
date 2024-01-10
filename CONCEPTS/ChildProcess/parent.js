// Creating a Child Process in the Browser (Using Web Workers)

// In a browser environment, you can create child processes using Web Workers.
//  Web Workers allow you to run JavaScript code in a separate thread,
//   enabling concurrent execution without blocking the main UI thread

// ParentScript

// Create a new Web Worker
const worker = new Worker('child.js');

// Listen for messages from the worker
worker.addEventListener('message', (event) => {
  console.log(`Received message from worker: ${event.data}`);
});

// Send a message to the worker
worker.postMessage('Hello from parent');
