let sonidos = new Audio('../sonido/cinco.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});