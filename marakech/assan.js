function Assan() {
    this.x = window.storage.assan.x;
    this.y = window.storage.assan.y;
    this.countX = 0;
    this.countY = 0;
    this.width = window.storage.fieldDimension.tile.width;
    this.height = window.storage.fieldDimension.tile.width;
    this.sprite = "sprites/down.png";
    this.pic = new Image();
    this.drawImg = function () {
        // if (this.countY > 7) this.countY = 1;
        // if (window.storage.rightPressed) {
        //     if (this.countX !== 7) {
        //         this.x += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/right.png";
        //         this.countX++;
        //     } else if (this.countY === 1 && this.countX === 7) {
        //         this.sprite = "sprites/down.png";
        //     } else if (this.countY%2 === 0) {
        //         this.y += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/left.png";
        //         this.countY++;
        //     } else if (this.countY%2 !== 0) {
        //         this.y -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/left.png";
        //         this.countY--;
        //     }
        //     window.storage.cellX[2] = this.x;
        //     window.storage.rightPressed = false;
        // } else if (window.storage.leftPressed) {
        //     if (this.countX !== 1) {
        //         this.x -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/left.png";
        //         this.countX--;
        //     } else if (this.countY === 7 && this.countX === 1) {
        //         this.sprite = "sprites/up.png";
        //     } else if (this.countY%2 !== 0) {
        //         this.y += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/right.png";
        //         this.countY++;
        //     } else if (this.countY%2 === 0) {
        //         this.y -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/right.png";
        //         this.countY--;
        //     }
        //     window.storage.cellX[2] = this.x;
        //     window.storage.leftPressed = false;
        // } else if (window.storage.upPressed) {
        //     if (this.countY !== 1) {
        //         this.y -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/up.png";
        //         this.countY--;
        //     } else if (this.countX === 7 && this.countY === 1) {
        //         this.sprite = "sprites/left.png";
        //     } else if (this.countX%2 !== 0) {
        //         this.x += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/down.png";
        //         this.countX++;
        //     } else if (this.countX%2 === 0) {
        //         this.x -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/down.png";
        //         this.countX--;
        //     }
        //     window.storage.cellY[2] = this.y;
        //     window.storage.upPressed = false;
        // } else if (window.storage.downPressed) {
        //     if (this.countY !== 7) {
        //         this.y += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/down.png";
        //         this.countY++;
        //     } else if (this.countY === 7 && this.countX === 1) {
        //         // this.y = 18;
        //         this.sprite = "sprites/right.png";
        //     } else if (this.countX%2 === 0) {
        //         this.x += window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/up.png";
        //         this.countX++;
        //     } else if (this.countX%2 !== 0) {
        //         this.x -= window.storage.fieldDimension.tile.width;
        //         this.sprite = "sprites/up.png";
        //         this.countX--;
        //     }
        //     window.storage.cellY[2] = this.y;
        //     window.storage.downPressed = false;
        // }


        if (window.storage.rightPressed) {
            this.sprite = "sprites/right.png";
            if (window.storage.stepCount !== 0) {
                this.countX += window.storage.stepCount;
                if (this.countX <= 6) {
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY === 0 && this.countX > 6) {
                    this.sprite = "sprites/down.png";
                    this.countY = this.countX - 7;
                    this.countX = 6;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY%2 !== 0) {
                    this.sprite = "sprites/left.png";
                    this.countY += 1;
                    this.countX = 6 - (this.countX - 7);
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY%2 === 0) {
                    this.sprite = "sprites/left.png";
                    this.countY -= 1;
                    this.countX = 6 - (this.countX - 7);
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                }

                window.storage.cellX[2] = this.x;
                window.storage.rightPressed = false;
                window.storage.stepCount = 0;
            }
        } else if (window.storage.leftPressed) {
            this.sprite = "sprites/left.png";
            if (window.storage.stepCount !== 0) {
                this.countX -= window.storage.stepCount;
                if (this.countX >= 0) {
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY === 6 && this.countX < 0) {
                    this.sprite = "sprites/up.png";
                    this.countY = 7 + this.countX;
                    this.countX = 0;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY%2 !== 0) {
                    this.sprite = "sprites/right.png";
                    this.countY -= 1;
                    this.countX = Math.abs(this.countX) - 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countY%2 === 0) {
                    this.sprite = "sprites/right.png";
                    this.countY += 1;
                    this.countX = Math.abs(this.countX) - 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                }

                window.storage.cellX[2] = this.x;
                window.storage.leftPressed = false;
                window.storage.stepCount = 0;
            }
        } else if (window.storage.upPressed) {
            this.sprite = "sprites/up.png";
            if (window.storage.stepCount !== 0) {
                this.countY -= window.storage.stepCount;
                if (this.countY >= 0) {
                    this.y = window.storage.fieldDimension.tile.width*this.countY+18;
                } else if (this.countX === 6 && this.countY < 0) {
                    this.sprite = "sprites/left.png";
                    this.countX = 7 + this.countY;
                    this.countY = 0;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countX%2 !== 0) {
                    this.sprite = "sprites/down.png";
                    this.countY = Math.abs(this.countY) - 1;
                    this.countX -= 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countX%2 === 0) {
                    this.sprite = "sprites/down.png";
                    this.countY = Math.abs(this.countY) - 1;
                    this.countX += 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                }

                window.storage.cellX[2] = this.x;
                window.storage.upPressed = false;
                window.storage.stepCount = 0;
            }
        } else if (window.storage.downPressed) {
            this.sprite = "sprites/down.png";
            if (window.storage.stepCount !== 0) {
                this.countY += window.storage.stepCount;
                if (this.countY <= 6) {
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                } else if (this.countX === 0 && this.countY > 6) {
                    this.sprite = "sprites/right.png";
                    this.countX = this.countY - 7;
                    this.countY = 6;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countX%2 !== 0) {
                    this.sprite = "sprites/up.png";
                    this.countY = 6 - (this.countY - 7);
                    this.countX += 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                } else if (this.countX%2 === 0) {
                    this.sprite = "sprites/up.png";
                    this.countY = 6 - (this.countY - 7);
                    this.countX -= 1;
                    this.y = window.storage.fieldDimension.tile.width*this.countY+window.storage.assan.y;
                    this.x = window.storage.fieldDimension.tile.width*this.countX+window.storage.assan.x;
                }

                window.storage.cellX[2] = this.x;
                window.storage.downPressed = false;
                window.storage.stepCount = 0;
            }
        }
        // else if (window.storage.leftPressed) {
        //     this.sprite = "sprites/left.png";
        //     if (this.countX !== 1) {
        //         // this.x -= window.storage.fieldDimension.tile.width;
        //
        //         // this.countX--;
        //     }
        //     // else if (this.countY === 7 && this.countX === 1) {
        //     //     this.sprite = "sprites/up.png";
        //     // } else if (this.countY%2 !== 0) {
        //     //     // this.y += window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/right.png";
        //     //     // this.countY++;
        //     // } else if (this.countY%2 === 0) {
        //     //     // this.y -= window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/right.png";
        //     //     // this.countY--;
        //     // }
        //     window.storage.cellX[2] = this.x;
        //     window.storage.leftPressed = false;
        // } else if (window.storage.upPressed) {
        //     this.sprite = "sprites/up.png";
        //     if (this.countY !== 1) {
        //         // this.y -= window.storage.fieldDimension.tile.width;
        //
        //         // this.countY--;
        //     }
        //     // else if (this.countX === 7 && this.countY === 1) {
        //     //     this.sprite = "sprites/left.png";
        //     // } else if (this.countX%2 !== 0) {
        //     //     // this.x += window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/down.png";
        //     //     // this.countX++;
        //     // } else if (this.countX%2 === 0) {
        //     //     // this.x -= window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/down.png";
        //     //     // this.countX--;
        //     // }
        //     window.storage.cellY[2] = this.y;
        //     window.storage.upPressed = false;
        // } else if (window.storage.downPressed) {
        //     this.sprite = "sprites/down.png";
        //     if (this.countY !== 7) {
        //         // this.y += window.storage.fieldDimension.tile.width;
        //
        //         // this.countY++;
        //     }
        //     // else if (this.countY === 7 && this.countX === 1) {
        //     //     // this.y = 18;
        //     //     this.sprite = "sprites/right.png";
        //     // } else if (this.countX%2 === 0) {
        //     //     // this.x += window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/up.png";
        //     //     // this.countX++;
        //     // } else if (this.countX%2 !== 0) {
        //     //     // this.x -= window.storage.fieldDimension.tile.width;
        //     //     this.sprite = "sprites/up.png";
        //     //     // this.countX--;
        //     // }
        //     window.storage.cellY[2] = this.y;
        //     window.storage.downPressed = false;
        // }


        this.pic.src = this.sprite;
        ctx.drawImage(this.pic, this.x, this.y, this.width, this.height);
    }
}