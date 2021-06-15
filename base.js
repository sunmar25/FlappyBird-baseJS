class Base {
    img = null;
    loaded = false;
    x1 = 0;
    x2 = 288;
    constructor(game) {
        this.game = game;
        this.createImage();
    }
    createImage() {
        this.img = new Image();
        this.img.src = "./imgs/base.png"
        this.img.onload = () => {
            this.loaded = true;
        }
    }

    update() {
        this.x1 -= 4;
        this.x2 -= 4;
        if (this.x1 == -288) {
            this.x1 = 288;
        }
        if (this.x2 == -288) {
            this.x2 = 288;
        }
    }
    draw() {
        if (!this.loaded) {
            return;
        }
        this.game.context.drawImage(this.img, this.x1, 420);
        this.game.context.drawImage(this.img, this.x2, 420);
    }
}