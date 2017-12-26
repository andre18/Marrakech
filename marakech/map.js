window.storage = {};
window.storage.cellX = [];
window.storage.cellY = [];
function GameField() {
    this.externalStartingPoint = {x: 15, y: 15};
    this.internalStartingPoint = {x: 18, y: 18};
    this.outerSideLength = 580;
    this.innerSideLength = 574;
    this.innerLines = {point1: 18, point2: 100, step: 82};
    this.draw = function () {
        ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
        ctx.strokeRect(this.externalStartingPoint.x, this.externalStartingPoint.y, this.outerSideLength, this.outerSideLength);
        ctx.strokeRect(this.internalStartingPoint.x, this.internalStartingPoint.y, this.innerSideLength, this.innerSideLength);
        ctx.beginPath();
        var count = 0;
        for (var y = this.innerLines.point2; y < this.innerSideLength; y += this.innerLines.step) {
            ctx.moveTo(this.innerLines.point1, y);
            ctx.lineTo(592, y);
            window.storage.cellX[count] = y;
            window.storage.cellY[count] = y;
            count++;
        }
        // alert( cellY );
        for (var x = this.innerLines.point2; x < this.innerSideLength; x += this.innerLines.step) {
            ctx.moveTo(x, this.innerLines.point1);
            ctx.lineTo(x, 592);
        }
        ctx.stroke();
    }
}