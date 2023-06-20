let loginToggle = document.getElementById('loginToggle');
let signupToggle = document.getElementById('signupToggle');
let loginForm = document.getElementById('loginForm');
let signupForm = document.getElementById('signupForm');

function toggleForm(showLogin) {
  if (showLogin) {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    loginToggle.classList.remove('active');
    signupToggle.classList.add('active');
  }
}

toggleForm(true);