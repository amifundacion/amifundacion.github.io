let sonidos = new Audio('../sonido/catorce.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});