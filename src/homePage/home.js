console.log("it is working");
const randomCatPic = document.getElementById("randomCatPic");
const generateButton = document.getElementById("catGeneratorBtn");
const api_key = "ad008c5d-682d-4ae4-a30e-3455d75b4ff9";
const href = document.getElementById("signInHref");
// const signInImg = document.getElementById("signInImg")

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

window.onload = () => getApi(api_key);

generateButton.addEventListener("click", () => {
  getApi(api_key);
});
const userLoggedIn = localStorage.getItem("user");

const signInButton = document.getElementById("signInBtn");
if (userLoggedIn === "true") {
  console.log("loggedin");
  // signInImg.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/126/126467.png")
  const newImg = document.createElement("img")
  newImg.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/126/126467.png")
  newImg.setAttribute("id", "signInImg")
  const newText = document.createElement("span")
  newText.innerText = "Log-Out"
  signInButton.appendChild(newImg)
  href.href = "home.html"
} else {
  console.log("logout");
  // signInButton.textContent = "Login";
}

signInButton.addEventListener("click", () => {
  localStorage.removeItem("user");
});
