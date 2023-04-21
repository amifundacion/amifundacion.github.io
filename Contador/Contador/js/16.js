let sonidos = new Audio('../sonido/16Audio.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});