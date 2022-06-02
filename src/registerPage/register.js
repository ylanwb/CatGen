const mainContainer = document.getElementById("main-container");
const signUpContainer = document.createElement("div");

const catPic = document.createElement("div");
const h1 = document.createElement("h1");
const circleCat = document.createElement("img");
const userSignUp = document.createElement("div");

const inputUserName = document.createElement("input");
inputUserName.classList.add("userInputs");
inputUserName.setAttribute("id", "username");
inputUserName.type = "text";
inputUserName.required = "true";
const labelUsername = document.createElement("label");
labelUsername.setAttribute("id", "labelId");
labelUsername.setAttribute("for", "username");
const userName = document.createElement("span");
userName.setAttribute("id", "infoOne");
userName.innerText = "Username";
const userNameError = document.createElement("span");
userNameError.classList.add("requiredFields");
userNameError.classList.add("hide");
userNameError.setAttribute("id", "userNameError");
const userNameErrorTwo = document.createElement("span");
userNameErrorTwo.classList.add("requiredAmount");
userNameErrorTwo.classList.add("hide");
userNameErrorTwo.setAttribute("id", "userNameErrorTwo");

const inputEmail = document.createElement("input");
inputEmail.classList.add("userInputs");
inputEmail.setAttribute("id", "email");
inputEmail.type = "text";
inputEmail.required = "true";
const labelEmail = document.createElement("label");
labelEmail.setAttribute("id", "labelId");
labelEmail.setAttribute("for", "email");
const email = document.createElement("span");
email.setAttribute("id", "infoTwo");
email.innerText = "Email Address";
const emailError = document.createElement("span");
emailError.classList.add("requiredFields");
emailError.classList.add("hide");
emailError.setAttribute("id", "emailError");
const emailErrorTwo = document.createElement("span");
emailErrorTwo.classList.add("requiredAmount");
emailErrorTwo.classList.add("hide");
emailErrorTwo.setAttribute("id", "emailErrorTwo");

const inputPassword = document.createElement("input");
inputPassword.classList.add("userInputs");
inputPassword.setAttribute("id", "password");
inputPassword.type = "password";
inputPassword.required = "true";
const labelPassword = document.createElement("label");
labelPassword.setAttribute("id", "labelId");
labelPassword.setAttribute("for", "password");
const password = document.createElement("span");
password.setAttribute("id", "infoThree");
password.innerText = "Password";
const passwordError = document.createElement("span");
passwordError.classList.add("requiredFields");
passwordError.classList.add("hide");
passwordError.setAttribute("id", "passwordError");
const passwordErrorTwo = document.createElement("span");
passwordErrorTwo.classList.add("requiredAmount");
passwordErrorTwo.classList.add("hide");
passwordErrorTwo.setAttribute("id", "passwordErrorTwo");

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const href = document.createElement("a");
href.setAttribute("href", "#");
const button = document.createElement("button");
button.setAttribute("id", "registerButton");
button.innerText = "Sign Up!";
const createAccount = document.createElement("span");
createAccount.innerText = "Have an Account?";
const signInHref = document.createElement("a");
signInHref.id = "signInButton";
signInHref.setAttribute("href", "../index.html");
signInHref.textContent = " Sign in!";

const br = document.createElement("br");

userNameError.innerText = "Please enter your Username";
userNameErrorTwo.innerText = "Username needs to be more than three characters";

emailError.innerText = "Please enter your Email Address";
emailErrorTwo.innerText = "Email Adress is invalid";

passwordError.innerText = "Please enter your Password";
passwordErrorTwo.innerText = "Password needs to be more than seven characters";

h1.innerText = "Cat Picture Generator";
circleCat.src =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*";
circleCat.setAttribute("id", "circleCat");

signUpContainer.classList.add("signUpContainer");

catPic.classList.add("catPic");
mainContainer.insertBefore(catPic, mainContainer.firstChild);
mainContainer.appendChild(signUpContainer);
signUpContainer.appendChild(h1);
signUpContainer.appendChild(circleCat);
signUpContainer.appendChild(userSignUp);
userSignUp.classList.add("userSignUp");

userSignUp.appendChild(inputUserName);
userSignUp.appendChild(labelUsername);
labelUsername.appendChild(userName);
userSignUp.appendChild(userNameError);
userSignUp.appendChild(userNameErrorTwo);

userSignUp.appendChild(inputEmail);
userSignUp.appendChild(labelEmail);
labelEmail.appendChild(email);
userSignUp.appendChild(emailError);
userSignUp.appendChild(emailErrorTwo);

userSignUp.appendChild(inputPassword);
userSignUp.appendChild(labelPassword);
labelPassword.appendChild(password);
userSignUp.appendChild(passwordError);
userSignUp.appendChild(passwordErrorTwo);

signUpContainer.appendChild(buttonContainer);
buttonContainer.appendChild(href);
buttonContainer.appendChild(br);
href.appendChild(button);
buttonContainer.appendChild(createAccount);
createAccount.appendChild(signInHref);

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
  } else {
    userNameErrorTwo.style.display = "none";
    userNameError.style.display = "none";
    button.removeAttribute("disabled");
    userNameErrors = false;
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
    button.setAttribute("disabled", "true");
  } else {
    emailErrorTwo.style.display = "none";
    emailError.style.display = "none";

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
    button.setAttribute("disabled", "true");
  } else {
    passwordError.style.display = "none";
    passwordErrorTwo.style.display = "none";

    button.removeAttribute("disabled");
    passwordErrors = false;
  }
}

inputUserName.onkeyup = function () {
  checkFirstName(inputUserName.value);
};
inputEmail.onkeyup = function () {
  checkEmail(inputEmail.value);
};
inputPassword.onkeyup = function () {
  checkPassword(inputPassword.value);
};

// button.addEventListener("click", function () {
//   checkFirstName(inputUserName.value);
//   checkEmail(inputEmail.value);
//   checkPassword(inputPassword.value);
//   console.log("clickedButton");
//   if (!userNameErrors && !emailErrors && !passwordErrors === true) {
//     href.setAttribute("href", "http://127.0.0.1:5500/loginPage/login.html#");
//     console.log(button);
//   } else {
//     console.log("Error");
//   }
// });
