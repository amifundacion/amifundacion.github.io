let sonidos = new Audio('../sonido/dos.mp3');
let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});
