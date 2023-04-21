const sonidos = new Audio('../sonido/19.mp3')

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});