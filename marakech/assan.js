function Img() {
    this.x = cellY[2];
    this.y = cellY[2];
    this.width = 82;
    this.height = 82;
    this.pic = new Image();
    this.draw = function () {
        this.pic.src = '2++.png';
        ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
        // alert( this.x );
    }
}