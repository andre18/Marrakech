var example = document.getElementById("canvas"),
    ctx     = example.getContext('2d');

// window.addEventListener('resize', resizeCanvas, false);

var countX = 0, countY = 0, countX1 = 0, countY1 = 0;
var carpets = [];

var gField = new GameField();
var figure = new Assan();

window.storage.rightPressed = false;
window.storage.leftPressed = false;
window.storage.upPressed = false;
window.storage.downPressed = false;
window.storage.stepCount = 0;



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
    // carpets.drawCarpet(countX, countY, countX1, countY1);
    for (var i = 0; i < carpets.length; i++)
        carpets[i].drawCarpet();
}

document.addEventListener("keydown", keyDownHandler, false);
example.addEventListener("mousedown", clickHandler, false);
example.addEventListener("mousemove", clickHandler, false);
example.addEventListener("mouseup", clickHandler, false);
// document.addEventListener("keydown", keyUpHandler, false);

var diceRoll = document.getElementsByClassName('dice-roll')[0];
new Vue({
    el: '#arrows',
    methods: {
        arrows: function (keyCode) {
            if (37 <= keyCode && keyCode <= 40) {
                diceRoll.disabled = false;
            }
            if (keyCode === 38) {
                window.storage.upPressed = true;
                window.storage.rightPressed = false;
                window.storage.leftPressed = false;
                window.storage.downPressed = false;
            } else if (keyCode === 40) {
                window.storage.downPressed = true;
                window.storage.rightPressed = false;
                window.storage.leftPressed = false;
                window.storage.upPressed = false;
            } else if (keyCode === 37) {
                window.storage.leftPressed = true;
                window.storage.rightPressed = false;
                window.storage.upPressed = false;
                window.storage.downPressed = false;
            } else if (keyCode === 39) {
                window.storage.rightPressed = true;
                window.storage.leftPressed = false;
                window.storage.upPressed = false;
                window.storage.downPressed = false;
            }
        }
    }
});

var diceNumb = [1, 2, 2, 3, 3, 4];
new Vue({
    el: '.dice-roll',
    methods: {
        dice: function () {
            if(window.storage.upPressed === true || window.storage.downPressed === true ||
                window.storage.leftPressed === true || window.storage.rightPressed === true) {

                var diceSide1 = document.getElementById('dice-side-1');
                var i = diceNumb[Math.floor(Math.random()*(diceNumb.length))];

                diceSide1.innerHTML = i;
                window.storage.stepCount = i;
                diceRoll.disabled = true;
            }
        }
    }
});

function keyDownHandler(e) {
    if(e.keyCode === 39) {
        window.storage.rightPressed = true;
        window.storage.leftPressed = false;
        window.storage.upPressed = false;
        window.storage.downPressed = false;
    } else if(e.keyCode === 37) {
        window.storage.leftPressed = true;
        window.storage.rightPressed = false;
        window.storage.upPressed = false;
        window.storage.downPressed = false;
    } else if(e.keyCode === 38) {
        window.storage.upPressed = true;
        window.storage.rightPressed = false;
        window.storage.leftPressed = false;
        window.storage.downPressed = false;
    } else if(e.keyCode === 40) {
        window.storage.downPressed = true;
        window.storage.rightPressed = false;
        window.storage.leftPressed = false;
        window.storage.upPressed = false;
    }
}
//
// example.addEventListener("mousedown", clickHandler, false);
// example.addEventListener("mousemove", clickHandler, false);
// example.addEventListener("mouseup", clickHandler, false);

var x = 0, y = 0, x1 = 0, y1 = 0;
var carpetsCount = 0;
function clickHandler(e) {
    var rect = example.getBoundingClientRect();

    var colorFill = '#401AB7';
    var colorStroke = '#140a44';

    var t = Math.floor((window.storage.fieldDimension.field - window.storage.fieldDimension.tile.width*7)/2);

    if (e.type === "mousedown") {
        x = (e.clientX - rect.left) / (rect.right - rect.left) * example.width;//e.screenX - rect.left;
        y = (e.clientY - rect.top) / (rect.bottom - rect.top) * example.height;

        if (x >= gField.externalStartingPoint.x && x <= window.storage.fieldDimension.tile.width*7+gField.externalStartingPoint.x) {
            countX = Math.floor((x - window.storage.assan.x) / window.storage.fieldDimension.tile.width);
            countY = Math.floor((y - window.storage.assan.y) / window.storage.fieldDimension.tile.width);

        }
    }
    if (e.type === "mouseup") {
        x1 = (e.clientX - rect.left) / (rect.right - rect.left) * example.width;//e.screenX - rect.left;
        y1 = (e.clientY - rect.top) / (rect.bottom - rect.top) * example.height;

        if (x >= gField.externalStartingPoint.y && y <= window.storage.fieldDimension.tile.width*7+gField.externalStartingPoint.y) {
            countX1 = Math.floor((x1 - window.storage.assan.x) / window.storage.fieldDimension.tile.width);
            countY1 = Math.floor((y1 - window.storage.assan.y) / window.storage.fieldDimension.tile.width);

            var carpet = new Carpet(countX, countY, countX1, countY1, colorFill, colorStroke);
            carpets.push(carpet);
            // alert("x = " + x + "; y = " + y + "\n" + "x1 = " + x1 + "; y1 = " + y1);
            // alert("countX = " + countX + "; countY = " + countY + "\n" + "countX1 = " + countX1 + "; countY1 = " + countY1);
        }


        // alert("x = " + x + "; y = " + y + "\n" + "x1 = " + x1 + "; y1 = " + y1);
        // alert("countX = " + countX + "; countY = " + countY + "\n" + "countX1 = " + countX1 + "; countY1 = " + countY1);
    }
}

function moveHandler (e) {
    var directionX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    var directionY = e.movementY || e.mozMovementY || event.webkitMovementY || 0;



    alert("directionX = " + directionX + "; directionY = " + directionY);
}

setInterval(resizeCanvas, 10);