function Img() {
    this.x = 18;
    this.y = 18;
    this.countX = 1;
    this.countY = 1;
    this.width = window.storage.fieldDimension.tile.width;
    this.height = window.storage.fieldDimension.tile.width;
    this.sprite = "sprites/down.png";
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
        if (this.countY > 7) this.countY = 1;
        if (window.storage.rightPressed) {
            // if (this.x !== window.storage.fieldDimension.tile.width*6+18) {
            if (this.countX !== 7) {
                this.x += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/right.png";
                // this.countX !== 7 ? this.countX++ : this.countX = 1;
                this.countX++;
                // this.y = window.storage.cellY[2];
            } else if (this.countY === 1 && this.countX === 7) {
                //this.x = 18;
                this.sprite = "sprites/down.png";
                // this.y = window.storage.cellY[2];
            } else if (this.countY%2 === 0) {
                this.y += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/left.png";
                this.countY++;
            } else if (this.countY%2 !== 0) {
                this.y -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/left.png";
                this.countY--;
            }
            window.storage.cellX[2] = this.x;
            window.storage.rightPressed = false;
        } else if (window.storage.leftPressed) {
            if (this.countX !== 1) {
                this.x -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/left.png";
                this.countX--;
                // this.y = window.storage.cellY[2];
            } else if (this.countY === 7 && this.countX === 1) {
                // this.x = window.storage.fieldDimension.tile.width*6+18;
                this.sprite = "sprites/up.png";
                // this.y = window.storage.cellY[2];
            } else if (this.countY%2 !== 0) {
                this.y += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/right.png";
                this.countY++;
            } else if (this.countY%2 === 0) {
                this.y -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/right.png";
                this.countY--;
            }
            window.storage.cellX[2] = this.x;
            window.storage.leftPressed = false;
        } else if (window.storage.upPressed) {
            if (this.countY !== 1) {
                this.y -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/up.png";
                this.countY--;
                // window.storage.cellY[2] = this.y;
                // this.x = window.storage.cellY[2];
            } else if (this.countX === 7 && this.countY === 1) {
                this.sprite = "sprites/left.png";
                // this.x = window.storage.cellX[2];
            } else if (this.countX%2 !== 0) {
                this.x += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/down.png";
                this.countX++;
            } else if (this.countX%2 === 0) {
                this.x -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/down.png";
                this.countX--;
            }
            window.storage.cellY[2] = this.y;
            window.storage.upPressed = false;
        } else if (window.storage.downPressed) {
            if (this.countY !== 7) {
                this.y += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/down.png";
                this.countY++;
                // window.storage.cellY[2] = this.y;
                // this.x = window.storage.cellX[2];
            } else if (this.countY === 7 && this.countX === 1) {
                // this.y = 18;
                this.sprite = "sprites/right.png";
                // this.x = window.storage.cellX[2];
            } else if (this.countX%2 === 0) {
                this.x += window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/up.png";
                this.countX++;
            } else if (this.countX%2 !== 0) {
                this.x -= window.storage.fieldDimension.tile.width;
                this.sprite = "sprites/up.png";
                this.countX--;
            }
            window.storage.cellY[2] = this.y;
            window.storage.downPressed = false;
        }
        this.pic.src = this.sprite;
        ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
    }
}