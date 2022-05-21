//Events

let image = document.getElementById("homeimg");
if(image != null) {
    image.addEventListener("mouseenter", reverseColor);
    image.addEventListener("mouseleave", reverseColor);
    image.addEventListener("click", changeImage);
}

function reverseColor() {
    image.classList.toggle("imagecolor");

}
function changeImage() {
    console.log("painettu!");
}

//Muokkaa otsikon
let h1 = document.querySelector("h1");
h1.classList.add("special");
h1.style.width = "80%";

//JSON-REST
fetch("https://yesno.wtf/api")
  .then(response => response.json())
  .then(
      data => {
          document.getElementById("print-here").innerHTML =
      "<h2>" + data.answer + "</h2>";
      }
  );