function cicrle() {
    let amount = 100;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let element = document.createElement('i');
        let posX = Math.floor(Math.random() * window.
            innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 10;

        let size = Math.random() * 250;
        element.style.width = 20 + size + 'px';
        element.style.height = 20 + size + 'px';
        element.style.left = posX + 'px';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration = 5 + duration + 's';
        element.style.webkitBoxShadow = " 0 30px 50px #0002"

        body.appendChild(element);
        i++
    }
}
cicrle() 