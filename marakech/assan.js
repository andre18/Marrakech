function Img() {
    this.x = 18;
    this.y = 18;
    this.width = 82;
    this.height = 82;
    this.pic = new Image();
    this.drawImg = function () {
        // alert("я тут");
        // if (typeof window.storage.rightPressed == "undefined" ||
        //     typeof window.storage.leftPressed == "undefined" ||
        //     typeof window.storage.upPressed == "undefined" ||
        //     typeof window.storage.downPressed == "undefined") {
        //     this.x = window.storage.cellX[2];
        //     this.y = window.storage.cellY[2];
        // }
        if (window.storage.rightPressed) {
            if (this.x !== 510) {
                this.x += 82;
                // this.y = window.storage.cellY[2];
            } else {
                this.x = 18;
                // this.y = window.storage.cellY[2];
            }
            window.storage.cellX[2] = this.x;
            window.storage.rightPressed = false;
        } else if (window.storage.leftPressed) {
            if (this.x !== 18) {
                this.x -= 82;
                // this.y = window.storage.cellY[2];
            } else {
                this.x = 510;
                // this.y = window.storage.cellY[2];
            }
            window.storage.cellX[2] = this.x;
            window.storage.leftPressed = false;
        } else if (window.storage.upPressed) {
            if (this.y !== 18) {
                this.y -= 82;
                // window.storage.cellY[2] = this.y;
                // this.x = window.storage.cellY[2];
            } else {
                this.y = 510;
                // this.x = window.storage.cellX[2];
            }
            window.storage.cellY[2] = this.y;
            window.storage.upPressed = false;
        } else if (window.storage.downPressed) {
            if (this.y !== 510) {
                this.y += 82;
                // window.storage.cellY[2] = this.y;
                // this.x = window.storage.cellX[2];
            } else {
                this.y = 18;
                // this.x = window.storage.cellX[2];
            }
            window.storage.cellY[2] = this.y;
            window.storage.downPressed = false;
        }
        this.pic.src = '2++.png';
        ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
    }
}