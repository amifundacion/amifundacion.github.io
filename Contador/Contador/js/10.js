let sonidos = new Audio('../sonido/dies.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});

