const sonidos = new Audio('../sonido/20.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});