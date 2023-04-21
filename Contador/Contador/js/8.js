let sonidos = new Audio('../sonido/ocho.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});

