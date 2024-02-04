const passwordInput = document.getElementById("password-input");
const showPasswordIcon = document.getElementById("show-password-icon");
const hidePasswordIcon = document.getElementById("hide-password-icon");

hidePasswordIcon.style.display = "none";
showPasswordIcon.addEventListener("click", function () {
  passwordInput.type = "text";
  showPasswordIcon.style.display = "none";
  hidePasswordIcon.style.display = "block";
});

hidePasswordIcon.addEventListener("click", function () {
  passwordInput.type = "password";
  hidePasswordIcon.style.display = "none";
  showPasswordIcon.style.display = "block";
});

function goBack() {
  window.history.back();
}