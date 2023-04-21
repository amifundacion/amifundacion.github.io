let sonidos = new Audio('../sonido/tres.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
