// Registration form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('reg-username').value;
    var email = document.getElementById('reg-email').value;
    var password = document.getElementById('reg-password').value;
  
    // Perform any necessary client-side validations
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Perform registration logic (server-side processing not included)
  
    alert('Registration successful!');
    document.getElementById('registration-form').reset();
  });
  
  // Login form submission
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
  
    // Perform any necessary client-side validations
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter a username and password.');
      return;
    }
  
    // Perform login logic (server-side processing not included)
  
    alert('Login successful!');
    document.getElementById('login-form').reset();
  });
  