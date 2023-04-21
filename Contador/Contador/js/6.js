let sonidos = new Audio('../sonido/seis.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
