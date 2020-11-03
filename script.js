var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

// console.log(randomBtn);
// console.log(css);
// console.log(color1);
// console.log(color2);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
    // body.style.background = "linear-gradient(to right, " 
    // + getRandomColor() + ", " + getRandomColor() + ")";
    // setText();
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();

}

function setText() {
    css.textContent = body.style.background + ";";
}
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";
    setText();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomColor);