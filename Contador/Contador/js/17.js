let sonidos = new Audio("../sonido/diecisiete.mp3");

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
