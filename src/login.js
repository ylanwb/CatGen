console.log("test");

const mainContainer = document.getElementById("mainContainer");
const loginBox = document.createElement("div");
const loginContent = document.createElement("div");
const h1 = document.createElement("h1");
const welcomeMsg = document.createElement("p");
const sleepyCat = document.createElement("img");
const userLogin = document.createElement("div");

const inputEmailAddress = document.createElement("input");
inputEmailAddress.classList.add("userInputs");
inputEmailAddress.setAttribute("id", "email");
inputEmailAddress.type = "text";
inputEmailAddress.required = "true";
const labelEmailAddress = document.createElement("label");
labelEmailAddress.setAttribute("id", "labelId");
labelEmailAddress.setAttribute("for", "email");
const emailAddress = document.createElement("span");
emailAddress.setAttribute("id", "infoOne");
emailAddress.innerText = "Email Address";

const inputPassword = document.createElement("input");
inputPassword.classList.add("userInputs");
inputPassword.setAttribute("id", "password");
inputPassword.type = "password";
inputPassword.required = "true";
const labelPassword = document.createElement("label");
labelPassword.setAttribute("id", "labelId");
labelPassword.setAttribute("for", "password");
const password = document.createElement("span");
password.setAttribute("id", "infoTwo");
password.innerText = "Password";

const loginError = document.createElement("span");
loginError.classList.add("requiredFields");
loginError.classList.add("hide");
loginError.setAttribute("id", "loginError");
loginError.innerText = "Invalid Username or Password";

const href = document.createElement("a");
href.setAttribute("href", "#");
const button = document.createElement("button");
button.setAttribute("id", "loginButton");
button.innerText = "Sign in!";

const createAccountContainer = document.createElement("div");
createAccountContainer.classList.add("createAccount");
const newHere = document.createElement("span");
newHere.innerText = "New Here?";
const createAccount = document.createElement("a");
createAccount.setAttribute("href", "./registerPage/register.html");
createAccount.innerText = " Create an Account";

const catPicBox = document.createElement("div");
catPicBox.classList.add("catPicBox");
const catOne = document.createElement("img");
catOne.setAttribute(
  "src",
  "https://storables.com/wp-content/uploads/2020/07/18-inch-Cat-Shelf-1024x521.jpg"
);
catOne.setAttribute("id", "catOne");
const catTwo = document.createElement("img");
catTwo.setAttribute(
  "src",
  "https://media.istockphoto.com/photos/ginger-cat-picture-id1073474110?k=20&m=1073474110&s=612x612&w=0&h=Yxf5oJ9FK7Al3VsMmsQUEm3eRgzeYdenBWfk3zxip1c="
);
catTwo.setAttribute("id", "catTwo");

loginBox.classList.add("loginBox");
loginContent.classList.add("loginContent");
h1.innerText = "Cat Image Generator";
welcomeMsg.innerText = "Welcome Back!";
sleepyCat.setAttribute("id", "sleepyCat");
sleepyCat.setAttribute(
  "src",
  "https://media.istockphoto.com/photos/sleepy-kitten-picture-id146869137?k=20&m=146869137&s=612x612&w=0&h=6A32QaIlhVX1YxGEtcapbc2mI82gCsNmh4D3OhKuz6Y="
);
userLogin.classList.add("userLogin");

mainContainer.appendChild(loginBox);
loginBox.appendChild(loginContent);
loginContent.appendChild(h1);
loginContent.appendChild(welcomeMsg);
loginContent.appendChild(sleepyCat);
loginContent.appendChild(userLogin);

userLogin.appendChild(inputEmailAddress);
userLogin.appendChild(labelEmailAddress);
labelEmailAddress.appendChild(emailAddress);

userLogin.appendChild(inputPassword);
userLogin.appendChild(labelPassword);
labelPassword.appendChild(password);

userLogin.appendChild(loginError);

userLogin.appendChild(href);
href.appendChild(button);

loginContent.appendChild(createAccountContainer);
createAccountContainer.appendChild(newHere);
createAccountContainer.appendChild(createAccount);

mainContainer.appendChild(catPicBox);
catPicBox.appendChild(catOne);
catPicBox.appendChild(catTwo);
