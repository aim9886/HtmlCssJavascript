// Child Script

// Listen for messages from the parent
self.addEventListener('message', (event) => {
    console.log(`Received message from parent: ${event.data}`);

    // Send a message back to the parent
    self.postMessage('Hello from child');
  });


//   In this example, parent.js creates a new Web Worker by specifying the worker script (child.js).
//    The parent and child communicate using the postMessage method and handle messages
//     using event listeners.
