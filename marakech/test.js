var example = document.getElementById("canvas"),
    ctx     = example.getContext('2d');

// window.addEventListener('resize', resizeCanvas, false);

var gField = new GameField();
var figure = new Img();

window.storage.rightPressed = false;
window.storage.leftPressed = false;
window.storage.upPressed = false;
window.storage.downPressed = false;
window.storage.pressedKey = 40;

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

var diceNumb = [1, 2, 2, 3, 3, 4];
new Vue({
    el: '#arrows',
    methods: {
        arrows: function (keyCode) {
            if (keyCode === 38) {
                window.storage.upPressed = true
            } else if (keyCode === 40) {
                window.storage.downPressed = true
            } else if (keyCode === 37) {
                window.storage.leftPressed = true
            } else if (keyCode === 39) {
                window.storage.rightPressed = true
            }
        },
        dice: function () {
            var i = diceNumb[Math.floor(Math.random()*(diceNumb.length))];
        }
    }
})

function keyDownHandler(e) {
    if(e.keyCode === 39) {
        window.storage.rightPressed = true;
        window.storage.pressedKey = 39;
    } else if(e.keyCode === 37) {
        window.storage.leftPressed = true;
        window.storage.pressedKey = 37;
    } else if(e.keyCode === 38) {
        window.storage.upPressed = true;
        window.storage.pressedKey = 38;
    } else if(e.keyCode === 40) {
        window.storage.downPressed = true;
        window.storage.pressedKey = 40;
    }
}

setInterval(resizeCanvas, 10);