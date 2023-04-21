let sonidos = new Audio('../sonido/once.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});