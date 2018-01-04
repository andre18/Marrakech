window.storage = {};
window.storage.cellX = [];
window.storage.cellY = [];
var size = window.innerWidth/2;
if(size > window.innerHeight) size = window.innerHeight;

window.storage.fieldDimension = {
    tile: {width: Math.round((size-36)/7)},
    arrow: Math.round((size-36)/14)
};
function GameField() {
    this.externalStartingPoint = {x: 15, y: 15};
    this.internalStartingPoint = {x: 18, y: 18};
    this.outerSideLength = size-2*this.externalStartingPoint.x;
    this.innerSideLength = size-2*this.internalStartingPoint.x;
    this.innerLines = {point1: this.internalStartingPoint.x, point2: window.storage.fieldDimension.tile.width + 18, step: window.storage.fieldDimension.tile.width};

    this.driveArrows = {point: window.storage.fieldDimension.arrow+15};
    this.draw = function () {
        ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
        ctx.strokeRect(this.externalStartingPoint.x, this.externalStartingPoint.y, this.outerSideLength, this.outerSideLength);
        ctx.strokeRect(this.internalStartingPoint.x, this.internalStartingPoint.y, this.innerSideLength, this.innerSideLength);
        ctx.beginPath();
        var count = 0;
        for (var y = this.innerLines.point2; y < this.innerSideLength; y += this.innerLines.step) {
            ctx.moveTo(this.innerLines.point1, y);
            ctx.lineTo(this.innerSideLength+18, y);
            window.storage.cellX[count] = y;
            window.storage.cellY[count] = y;
            count++;
        }
        // alert( cellY );
        for (var x = this.innerLines.point2; x < this.innerSideLength; x += this.innerLines.step) {
            ctx.moveTo(x, this.innerLines.point1);
            ctx.lineTo(x, this.innerSideLength+18);
        }
        var cp1yStep = window.storage.fieldDimension.tile.width+18;
        for (var y1 = this.driveArrows.point; y1 < this.outerSideLength; y1 += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(15, y1);
            ctx.quadraticCurveTo(-5, cp1yStep, 15, y1+=window.storage.fieldDimension.tile.width);
            cp1yStep += this.innerLines.step*2;
        }
        ctx.stroke();
    }
}