const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userNameError = document.getElementById("userNameError");
const userNameErrorTwo = document.getElementById("userNameErrorTwo");
const emailError = document.getElementById("emailError");
const emailErrorTwo = document.getElementById("emailErrorTwo");
const passwordError = document.getElementById("passwordError");
const passwordErrorTwo = document.getElementById("passwordErrorTwo");

const button = document.getElementById("button");

let userNameErrors = true;
let emailErrors = true;
let passwordErrors = true;


function checkFirstName(value) {
  if (value === "") {
    userNameError.style.display = "flex";
    userNameErrorTwo.style.display = "none";
    button.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    userNameErrorTwo.style.display = "flex";
    userNameError.style.display = "none";
    button.setAttribute("disabled", "true");
    console.log("Insufficient Character Amount");
  } else {
    userNameErrorTwo.style.display = "none";
    userNameError.style.display = "none";
    button.removeAttribute("disabled");
    firstNameErrors = false;
    console.log(value)
  }
}
function checkEmail(value) {
  if (value === "") {
    emailError.style.display = "flex";
    emailErrorTwo.style.display = "none";
    button.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    emailErrorTwo.style.display = "flex";
    emailError.style.display = "none";
    console.log("Insufficient Character Amount");
    button.setAttribute("disabled", "true");
  } else {
    emailErrorTwo.style.display = "none";
    emailError.style.display = "none";
    console.log(value);
    button.removeAttribute("disabled");
    emailErrors = false;
  }
}
function checkPassword(valueOfPassword) {
  if (valueOfPassword === "") {
    passwordError.style.display = "flex";
    passwordErrorTwo.style.display = "none";
    button.setAttribute("disabled", "true");
  } else if (valueOfPassword.length <= 7) {
    passwordErrorTwo.style.display = "flex";
    passwordError.style.display = "none";
    console.log("Insufficient Character Amount");
    button.setAttribute("disabled", "true");
  } else {
      passwordError.style.display = "none";
      passwordErrorTwo.style.display = "none"
    console.log(valueOfPassword);
    button.removeAttribute("disabled");
    passwordErrors = false;
  }
}

userName.onkeyup = function () {
  checkFirstName(userName.value);
};
email.onkeyup = function () {
  checkEmail(email.value);
};
password.onkeyup = function () {
  checkPassword(password.value);
};

button.addEventListener("click", function () {
  checkFirstName(userName.value);
  checkEmail(email.value);
  checkPassword(password.value);
  console.log("clickedButton")
  if (!userNameErrors && !emailErrors && !passwordErrors === true) {
    navigateToSignIn.setAttribute("href", "./login.html");
  } else {
    console.log("Error")
  }
});