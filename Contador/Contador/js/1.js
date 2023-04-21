let sonidos = new Audio('../sonido/uno.mp3');

let body = document.getElementById("body");

body.addEventListener("click", () => {
  sonidos.play();
});

