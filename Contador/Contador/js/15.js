let sonidos = new Audio('../sonido/15Audio.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
