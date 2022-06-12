const userLoggedIn = localStorage.getItem("user");
const signInButton = document.getElementById("signInBtn");
const signInImg = document.getElementById("signInImg");
const href = document.getElementById("signInHref");
if (userLoggedIn === "true") {
  console.log("loggedin");

  signInImg.src = "https://cdn-icons-png.flaticon.com/512/126/126467.png"
  const newText = document.createElement("span")
  newText.innerText = "Sign Out"
  signInButton.innerText = ""
  signInButton.appendChild(signInImg)
  signInButton.appendChild(newText)
  
  href.href = "about.html";
} else {
  console.log("logout");
  // signInButton.textContent = "Login";
}
signInButton.addEventListener("click", () => {
    localStorage.removeItem("user");
  });