var example = document.getElementById("canvas"),
    ctx     = example.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    example.height = window.innerHeight;
    example.width  = window.innerWidth/2;

    // ctx.beginPath();
    draw();
    // drawImg();
    // ctx.closePath();
}

// var cellY = [];
// function GameField() {
//     this.externalStartingPoint = {x: 15, y: 15};
//     this.internalStartingPoint = {x: 18, y: 18};
//     this.outerSideLength = 580;
//     this.innerSideLength = 574;
//     this.innerLines = {point1: 18, point2: 100, step: 82};
//     this.drawField = function () {
//         ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
//         ctx.strokeRect(this.externalStartingPoint.x, this.externalStartingPoint.y, this.outerSideLength, this.outerSideLength);
//         ctx.strokeRect(this.internalStartingPoint.x, this.internalStartingPoint.y, this.innerSideLength, this.innerSideLength);
//         ctx.beginPath();
//         var count = 0;
//         for (var y = this.innerLines.point2; y < this.innerSideLength; y += this.innerLines.step) {
//             ctx.moveTo(this.innerLines.point1, y);
//             ctx.lineTo(592, y);
//             cellY[count] = y;
//             count++;
//         }
//         alert( cellY );
//         for (var x = this.innerLines.point2; x < this.innerSideLength; x += this.innerLines.step) {
//             ctx.moveTo(x, this.innerLines.point1);
//             ctx.lineTo(x, 592);
//         }
//         ctx.stroke();
//     }
// }

//зачем this перед переменными? почему потом без него мы не можем к нему обратится?
// function Img() {
//     this.x = cellY[2];
//     this.y = cellY[2];
//     this.width = 82;
//     this.height = 82;
//     this.pic = new Image();
//     this.draw = function () {
//         this.pic.src = '2++.png';
//         ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
//         alert( this.x );
//     }
// }

var figure, gField;

function draw() {
    gField = new GameField();
    gField.drawField();
    figure = new Img();
    figure.draw();
}

resizeCanvas();