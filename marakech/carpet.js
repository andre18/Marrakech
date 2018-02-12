function Carpet(countX, countY, countX1, countY1, colorFill, colorStroke) {
    this.countX = countX;
    this.countY = countY;
    this.countX1 = countX1;
    this.countY1 = countY1;
    this.colorFill = colorFill;
    this.colorStroke = colorStroke;

    this.drawCarpet = function () {
        if (Math.abs(this.countX - this.countX1) === 1 && this.countY === this.countY1) {
            if (this.countX < this.countX1) {
                ctx.fillStyle = this.colorFill;
                ctx.fillRect(window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x, window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y,
                    window.storage.fieldDimension.tile.width*2, window.storage.fieldDimension.tile.width);
            } else if (this.countX1 < this.countX) {
                ctx.fillStyle = this.colorFill;
                ctx.fillRect(window.storage.fieldDimension.tile.width*this.countX1+window.storage.assan.x, window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y,
                    window.storage.fieldDimension.tile.width*2, window.storage.fieldDimension.tile.width);
            }
        } else if (Math.abs(this.countY - this.countY1) === 1 && this.countX === this.countX1) {
            if (this.countY < this.countY1) {
                ctx.fillStyle = this.colorFill;
                ctx.fillRect(window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x, window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y,
                    window.storage.fieldDimension.tile.width, window.storage.fieldDimension.tile.width*2);
            } else if (this.countY1 < this.countY) {
                ctx.fillStyle = this.colorFill;
                ctx.fillRect(window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x+2, window.storage.fieldDimension.tile.width*this.countY1+window.storage.assan.y+2,
                    window.storage.fieldDimension.tile.width-4, window.storage.fieldDimension.tile.width*2-4);

                ctx.strokeStyle = this.colorStroke;
                ctx.strokeRect(window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x+2, window.storage.fieldDimension.tile.width*this.countY1+window.storage.assan.y+2,
                    window.storage.fieldDimension.tile.width-4, window.storage.fieldDimension.tile.width*2-4);
            }
        }
        if (Math.abs(this.countY - this.countY1) === 2 && this.countX === this.countX1) {

        }
    };

}