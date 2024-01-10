// Example : Using Promise.all() for Parallel Execution
// Suppose you need to fetch data from multiple APIs simultaneously
// and process the results together:


// Functions to fetch data from different APIs
function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());
  }

  function fetchPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
  }

  // Usage: Parallel execution using Promise.all()
  Promise.all([fetchUserData(), fetchPostData()])
    .then(results => {
      const userData = results[0];
      const postData = results[1];

      // Process and use userData and postData together
      console.log('User Data:', userData);
      console.log('Post Data:', postData);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // In this example, we use Promise.all() to fetch data from two APIs in parallel
    // and process the results together when both promises are resolved.
