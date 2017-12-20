var example = document.getElementById("canvas"),
    ctx     = example.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    example.height = window.innerHeight;
    example.width  = window.innerWidth/2;

    ctx.beginPath();
    drawStuff();
    drawImg();
    ctx.closePath();
}

var gameField = {
    externalStartingPoint: {x: 15, y: 15},
    internalStartingPoint: {x: 18, y: 18},
    outerSideLength: 580,
    innerSideLength: 574,
    innerLines: {point1: 18, point2: 100, step: 82}
};

var cellY = [];

//зачем this перед переменными? почему потом без него мы не можем к нему обратится?
function Img() {
    this.x = cellY[2];
    this.y = cellY[2];
    this.width = 82;
    this.height = 82;
    this.pic = new Image();
    this.draw = function () {
        this.pic.src = '2++.png';
        ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
    }
}

var figure;

function drawImg() {
    figure.draw();
}

function drawStuff() {
    ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
    ctx.strokeRect(gameField.externalStartingPoint.x, gameField.externalStartingPoint.y, gameField.outerSideLength, gameField.outerSideLength);
    ctx.strokeRect(gameField.internalStartingPoint.x, gameField.internalStartingPoint.y, gameField.innerSideLength, gameField.innerSideLength);
    ctx.beginPath();
    var count = 0;
    for (var y = gameField.innerLines.point2; y < gameField.innerSideLength; y += gameField.innerLines.step) {
        ctx.moveTo(gameField.innerLines.point1, y);
        ctx.lineTo(592, y);
        cellY[count] = y;
        count++;
    }
    alert( cellY );
    for (var x = gameField.innerLines.point2; x < gameField.innerSideLength; x += gameField.innerLines.step) {
        ctx.moveTo(x, gameField.innerLines.point1);
        ctx.lineTo(x, 592);
    }
    // drawImg();
    ctx.stroke();
    figure = new Img();
}

resizeCanvas();