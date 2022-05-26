const mainContainer = document.getElementById("main-container");
const signUpBox = document.createElement("div")
const signUpContent = document.createElement("div")
const catPic = document.createElement("div");
const h1 = document.createElement("h1")
const circleCat = document.createElement("img")
const userSignUp = document.createElement("div")

const inputUserName = document.createElement("input")
inputUserName.classList.add("userInputs")
inputUserName.setAttribute("id", "username")
inputUserName.type = "text"
inputUserName.required = "true"
const labelUsername = document.createElement("label")
labelUsername.setAttribute("id", "labelId")
labelUsername.setAttribute("for", "username")
const userName = document.createElement("span")
userName.setAttribute("id", "infoOne")
userName.innerText = "Username"
const userNameError = document.createElement("span")
userNameError.classList.add("requiredFields")
userNameError.classList.add("hide")
userNameError.setAttribute("id", "userNameError")
const userNameErrorTwo = document.createElement("span")
userNameErrorTwo.classList.add("requiredAmount")
userNameErrorTwo.classList.add("hide")
userNameErrorTwo.setAttribute("id", "userNameErrorTwo")

h1.innerText = "Cat Picture Generator"
circleCat.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"
circleCat.setAttribute("id", "circleCat")

signUpBox.classList.add("signUpBox")
signUpContent.classList.add("signUpContent")
catPic.classList.add("catPic");
mainContainer.insertBefore(catPic, mainContainer.firstChild);
mainContainer.appendChild(signUpBox)
signUpBox.appendChild(signUpContent)
signUpContent.appendChild(h1)
signUpContent.appendChild(circleCat)
signUpContent.appendChild(userSignUp)
userSignUp.classList.add("userSignUp")
userSignUp.appendChild(inputUserName)
userSignUp.appendChild(labelUsername)
labelUsername.appendChild(userName)

// const userName = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// const userNameError = document.getElementById("userNameError");
// const userNameErrorTwo = document.getElementById("userNameErrorTwo");
// const emailError = document.getElementById("emailError");
// const emailErrorTwo = document.getElementById("emailErrorTwo");
// const passwordError = document.getElementById("passwordError");
// const passwordErrorTwo = document.getElementById("passwordErrorTwo");

// const button = document.getElementById("button");

// const hover = document.querySelector(":hover");

// const href = document.querySelector("a");
// let userNameErrors = true;
// let emailErrors = true;
// let passwordErrors = true;

// function checkFirstName(value) {
//   if (value === "") {
//     userNameError.style.display = "flex";
//     userNameErrorTwo.style.display = "none";
//     button.setAttribute("disabled", "true");
//     hover;
//   } else if (value.length <= 3) {
//     userNameErrorTwo.style.display = "flex";
//     userNameError.style.display = "none";
//     button.setAttribute("disabled", "true");
//     console.log("Insufficient Character Amount");
//   } else {
//     userNameErrorTwo.style.display = "none";
//     userNameError.style.display = "none";
//     button.removeAttribute("disabled");
//     userNameErrors = false;
//     console.log(value);
//   }
// }
// function checkEmail(value) {
//   if (value === "") {
//     emailError.style.display = "flex";
//     emailErrorTwo.style.display = "none";
//     button.setAttribute("disabled", "true");
//   } else if (value.length <= 3) {
//     emailErrorTwo.style.display = "flex";
//     emailError.style.display = "none";
//     console.log("Insufficient Character Amount");
//     button.setAttribute("disabled", "true");
//   } else {
//     emailErrorTwo.style.display = "none";
//     emailError.style.display = "none";
//     console.log(value);
//     button.removeAttribute("disabled");
//     emailErrors = false;
//   }
// }
// function checkPassword(valueOfPassword) {
//   if (valueOfPassword === "") {
//     passwordError.style.display = "flex";
//     passwordErrorTwo.style.display = "none";
//     button.setAttribute("disabled", "true");
//   } else if (valueOfPassword.length <= 7) {
//     passwordErrorTwo.style.display = "flex";
//     passwordError.style.display = "none";
//     console.log("Insufficient Character Amount");
//     button.setAttribute("disabled", "true");
//   } else {
//     passwordError.style.display = "none";
//     passwordErrorTwo.style.display = "none";
//     console.log(valueOfPassword);
//     button.removeAttribute("disabled");
//     passwordErrors = false;
//   }
// }

// userName.onkeyup = function () {
//   checkFirstName(userName.value);
// };
// email.onkeyup = function () {
//   checkEmail(email.value);
// };
// password.onkeyup = function () {
//   checkPassword(password.value);
// };

// button.addEventListener("click", function () {
//   checkFirstName(userName.value);
//   checkEmail(email.value);
//   checkPassword(password.value);
//   console.log("clickedButton");
//   if (!userNameErrors && !emailErrors && !passwordErrors === true) {
//     href.setAttribute("href", "http://127.0.0.1:5500/loginPage/login.html#");
//     console.log(button);
//   } else {
//     console.log("Error");
//   }
// });
