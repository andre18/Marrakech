var example = document.getElementById("canvas"),
    ctx     = example.getContext('2d');

// window.addEventListener('resize', resizeCanvas, false);

var gField = new GameField();
var figure = new Img();

window.storage.rightPressed = false;
window.storage.leftPressed = false;
window.storage.upPressed = false;
window.storage.downPressed = false;

function resizeCanvas() {
    example.height = window.innerHeight;
    example.width  = window.innerWidth/2;

    ctx.beginPath();
    draw();
    // drawImg();
    ctx.closePath();
}



function draw() {
    gField.draw();
    figure.drawImg();
}

document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keydown", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        window.storage.rightPressed = true;
    } else if(e.keyCode == 37) {
        window.storage.leftPressed = true;
    } else if(e.keyCode == 38) {
        window.storage.upPressed = true;
    } else if(e.keyCode == 40) {
        window.storage.downPressed = true;
    }
}

setInterval(resizeCanvas, 10);