let sonidos = new Audio('../sonido/doce.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});