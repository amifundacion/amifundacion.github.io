const sonidos = document.getElementById('sonidos');

document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 32) {
        sonidos.innerHTML += '<audio src="../sonido/tres.mp3" autoplay></audio>';
    }
})