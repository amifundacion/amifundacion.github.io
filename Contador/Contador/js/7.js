let sonidos = new Audio('../sonido/siete.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});

