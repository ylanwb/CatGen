console.log("it is working");
const randomCatPic = document.getElementById("randomCatPic");
const generateButton = document.getElementById("catGeneratorBtn");
const api_key = "https://aws.random.cat/meow";


async function getApi(url) {
  const response = await fetch(url);

  const data = await response.json();
  const imageSource = data?.file;

  randomCatPic.setAttribute("src", imageSource);
}

window.onload = () => getApi(api_key);

generateButton.addEventListener("click", () => {
    getApi(api_key);
});
