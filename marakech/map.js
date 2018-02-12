window.storage = {};
window.storage.cellX = [];
window.storage.cellY = [];
var size = window.innerWidth/2;
if(size > window.innerHeight) size = window.innerHeight;

window.storage.fieldDimension = {
    field: size,//-18
    tile: {width: Math.round((size-36)/7)},
    arrow: Math.round((size-36)/14)
};
function GameField() {

    var tx = Math.floor((window.innerWidth/2 - window.storage.fieldDimension.tile.width*7)/2);
    var ty = Math.floor((window.innerHeight - window.storage.fieldDimension.tile.width*7)/2);
    this.externalStartingPoint = {};
    this.externalStartingPoint.x = tx-3;
    this.externalStartingPoint.y = ty-3;
    this.internalStartingPoint = {};
    this.internalStartingPoint.x = tx;
    this.internalStartingPoint.y = ty;
    window.storage.assan = {
        x: this.internalStartingPoint.x,
        y: this.internalStartingPoint.y
    };
    this.outerSideLength = window.storage.fieldDimension.tile.width*7+6;//size-2*this.externalStartingPoint.x;
    this.innerSideLength = window.storage.fieldDimension.tile.width*7;//size-2*this.internalStartingPoint.x;
    //this.innerLines = {point1: this.internalStartingPoint.x, point2: window.storage.fieldDimension.tile.width, step: window.storage.fieldDimension.tile.width};
   // this.driveArrows = {point: window.storage.fieldDimension.arrow+15};
    this.driveArrows = {};
    this.driveArrows.x = window.storage.fieldDimension.arrow+this.externalStartingPoint.x;
    this.driveArrows.y = window.storage.fieldDimension.arrow+this.externalStartingPoint.y;
    this.draw = function () {
        ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
        ctx.strokeRect(this.externalStartingPoint.x, this.externalStartingPoint.y, this.outerSideLength, this.outerSideLength);
        ctx.strokeRect(this.internalStartingPoint.x, this.internalStartingPoint.y, this.innerSideLength, this.innerSideLength);
        ctx.beginPath();
        var count = 0;
        for (var y = window.storage.fieldDimension.tile.width + this.internalStartingPoint.y; y < this.innerSideLength+this.internalStartingPoint.y; y += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(this.internalStartingPoint.x, y);
            ctx.lineTo(this.innerSideLength+this.internalStartingPoint.x, y);
            window.storage.cellX[count] = y;
            window.storage.cellY[count] = y;
            count++;
        }
        // alert( cellY );
        for (var x = window.storage.fieldDimension.tile.width + this.internalStartingPoint.x; x < this.innerSideLength+this.internalStartingPoint.x; x += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(x, this.internalStartingPoint.y);
            ctx.lineTo(x, this.innerSideLength+this.internalStartingPoint.y);
        }

        var cp1yStep = this.internalStartingPoint.y+window.storage.fieldDimension.tile.width;
        count = 0;
        for (var y1 = this.driveArrows.y; count < 3; y1 += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(this.externalStartingPoint.x, y1);
            ctx.quadraticCurveTo(this.externalStartingPoint.x-20, cp1yStep, this.externalStartingPoint.x, y1+=window.storage.fieldDimension.tile.width);
            cp1yStep += window.storage.fieldDimension.tile.width*2;
            count++;
        }
        cp1yStep = this.externalStartingPoint.y+window.storage.fieldDimension.tile.width*2;
        count = 0;
        for (y1 = this.driveArrows.y+window.storage.fieldDimension.tile.width; count < 3; y1 += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(window.innerWidth/2-this.externalStartingPoint.x, y1);//зачем window.innerWidth/2????????????????????????????????????????????????????????????????????????????????????????????????????????
            ctx.quadraticCurveTo(window.innerWidth/2-this.externalStartingPoint.x+20, cp1yStep, window.innerWidth/2-this.externalStartingPoint.x, y1+=window.storage.fieldDimension.tile.width);
            cp1yStep += window.storage.fieldDimension.tile.width*2;
            count++;
        }

        var cp1xStep = this.externalStartingPoint.x+window.storage.fieldDimension.tile.width;
        count = 0;
        for (var x1 = this.driveArrows.x; count < 3; x1 += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(x1, this.externalStartingPoint.y);
            ctx.quadraticCurveTo(cp1xStep, this.externalStartingPoint.y-20, x1+=window.storage.fieldDimension.tile.width, this.externalStartingPoint.y);
            cp1xStep += window.storage.fieldDimension.tile.width*2;
            count++;
        }
        cp1xStep = this.externalStartingPoint.x+window.storage.fieldDimension.tile.width*2;
        count = 0;
        for (x1 = this.driveArrows.x+window.storage.fieldDimension.tile.width; count < 3; x1 += window.storage.fieldDimension.tile.width) {
            ctx.moveTo(x1, window.innerHeight-this.externalStartingPoint.y);
            ctx.quadraticCurveTo(cp1xStep, window.innerHeight-this.externalStartingPoint.y+20, x1+=window.storage.fieldDimension.tile.width, window.innerHeight-this.externalStartingPoint.y);
            cp1xStep += window.storage.fieldDimension.tile.width*2;
            count++;
        }

        ctx.stroke();
        // ctx.beginPath();
        // ctx.arc(size-15, 15, 15, Math.PI/2, Math.PI, true);
        // ctx.stroke();
    }
}