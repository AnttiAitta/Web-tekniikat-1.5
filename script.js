//Events

let image = document.getElementById("homeimg");

image.addEventListener("mouseenter", reverseColor);
image.addEventListener("mouseleave", reverseColor);
image.addEventListener("click", changeImage);

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

