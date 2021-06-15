class Pipe {
    #imgUp = null;
    #imgDown = null;
    #loadedUp = false;
    #loadedDown = false;
    #interval = 0;
    x = 288;
    y1 = 0;
    y2 = 0;
    constructor(game) {
        this.game = game;
        this.#createImage();
    }
    #createImage() {
        this.#imgUp = new Image();
        this.#imgDown = new Image();
        this.#imgUp.onload = () => {
            this.#loadedUp = true;
        }
        this.#imgDown.onload = () => {
            this.#loadedDown = true;
        }
        this.#imgUp.src = './imgs/pipe-green.png';
        this.#imgDown.src = './imgs/pipe-green-down.png';
    }

    update() {
        this.x -= 4;
        if (this.x < -52) {
            this.x = 288;
            this.#interval = Math.floor(Math.random() * 150);
            if (this.#interval < 75) {
                this.#interval = -this.#interval;
            }
            console.log(this.#interval);
        }
    }
    draw() {
        if (!this.#loadedDown && !this.#loadedUp) {
            return;
        }
        this.y1 = 350 - this.#interval;
        // this.y1 = 280 - this.#interval;
        this.y2 = -150 - this.#interval;
        this.game.context.drawImage(this.#imgUp, this.x, this.y1);
        this.game.context.drawImage(this.#imgDown, this.x, this.y2);
    }
}