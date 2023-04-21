let sonidos = new Audio('../sonido/nueve.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});

