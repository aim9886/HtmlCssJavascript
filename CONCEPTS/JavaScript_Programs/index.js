document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation
    if (username === "hemanth" && password === "hemanth@123") {
      alert("Login successful!");
      // Redirect to another page or perform other actions
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
