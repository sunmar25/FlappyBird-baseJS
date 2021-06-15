class Background {
    x1 = 0;
    x2 = 288;
    loaded = false;
    img = null;
    constructor(game) {
        this.game = game;
        this.createImage();
    }
    createImage() {
        this.img = new Image();
        this.img.src = "./imgs/background-day.png";
        this.img.onload = () => {
            this.loaded = true;
        };
    }
    update() {
        this.x1--;
        this.x2--;
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
        this.game.context.drawImage(this.img, this.x1, 0);
        this.game.context.drawImage(this.img, this.x2, 0);
    }
}