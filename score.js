class Score {
    #img = new Array(10);
    #score = 0;
    #tens = 0;
    constructor(game) {
        this.game = game;
        this.createImage();
        console.log(this.#img);
    }
    createImage() {
        let NumbersImageText = new Array(10);
        for (let i = 0; i < NumbersImageText.length; i++) {
            NumbersImageText[i] = i + '.png';
        }

        for (let i = 0; i < this.#img.length; i++) {
            this.#img[i] = new Image();
            this.#img[i].src = './imgs/' + NumbersImageText[i];
        }
    }
    update() {

    }
    draw() {
        if (this.game.bird.x > this.game.pipe.x + 52 && this.#score <=9) {
            this.game.context.drawImage(this.#img[this.#tens], 120, 50);
            this.game.context.drawImage(this.#img[this.#score], 150, 50);
            console.log(this.#score);
        }
        if(this.game.bird.x +1 == this.game.pipe.x + 52){
            this.#score++;
        }
        if(this.#score == 10){
            this.#score = 0;
            this.#tens++;
        }
    }
}
let ss = new Score(this);