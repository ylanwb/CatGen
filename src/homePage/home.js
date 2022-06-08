console.log("it is working");
const randomCatPic = document.getElementById("randomCatPic");
const generateButton = document.getElementById("catGeneratorBtn");
const api_key = "ad008c5d-682d-4ae4-a30e-3455d75b4ff9";
const href = document.getElementById("signInHref");
const randomCatContainer =
  document.getElementsByClassName("randomCatContainer");
const catContainer = document.getElementById("catContainer");
const loadCircle = document.getElementById("loadCircle");
const signInImg = document.getElementById("signInImg");

function load() {
  catContainer.classList.remove("randomCatContainer");
  catContainer.classList.add("loadingCatContainer");
  loadCircle.style.display = "flex";
  randomCatPic.style.display = "none";

  setTimeout(function () {
    catContainer.classList.remove("loadingCatContainer");
    catContainer.classList.add("randomCatContainer");
    randomCatPic.style.display = null;
    loadCircle.style.display = "none";
  }, 500);
}

async function getApi(apiKey) {
  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    mode: "cors",
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const url = response[0].url;
  randomCatPic.setAttribute("src", url);
}

window.onload = () => load(),getApi(api_key);

generateButton.addEventListener("click", () => {
  load()
  getApi(api_key);
});
const userLoggedIn = localStorage.getItem("user");

const signInButton = document.getElementById("signInBtn");
if (userLoggedIn === "true") {
  console.log("loggedin");

  signInImg.src = "https://cdn-icons-png.flaticon.com/512/126/126467.png"
  const newText = document.createElement("span")
  newText.innerText = "Sign Out"
  signInButton.innerText = ""
  signInButton.appendChild(signInImg)
  signInButton.appendChild(newText)
  
  href.href = "home.html";
} else {
  console.log("logout");
  // signInButton.textContent = "Login";
}

signInButton.addEventListener("click", () => {
  localStorage.removeItem("user");
});

// console.log("no timeout")
// setTimeout(function(){
//   console.log("I am the third log after 5 seconds");
// },5000);
// console.log("i am the 2nd log")

