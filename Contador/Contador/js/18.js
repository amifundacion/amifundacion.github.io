let sonidos = new Audio("../sonido/dieciocho.mp3");

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
