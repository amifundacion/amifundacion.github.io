let sonidos = new Audio('../sonido/trece.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});