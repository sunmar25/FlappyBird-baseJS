class Game {
    #start = true;
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.createComponents();
        window.onload = () => {
            this.background.draw();
            this.start.draw();
        }
        window.addEventListener('click', () => {
            this.bird.birdUpFlap();
            if(this.#start){
                this.frameLoop();
                this.#start = false;
            }
        });
    }
    createComponents() {
        this.background = new Background(this);
        this.base = new Base(this);
        this.bird = new Bird(this);
        this.pipe = new Pipe(this);
        this.start = new Start(this);
        this.score = new Score(this);
    }

    update() {
        this.background.update();
        this.base.update();
        this.bird.update();
        this.pipe.update();
        
    }
    draw() {
        this.background.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        this.score.draw();
    }
    frameLoop() {
        let timer = setInterval(() => {
            this.draw();
            if (this.bird.checkBirdDead()) {
                clearInterval(timer);
                return;
            }
            this.update();
        }, 33);
    }

}
const game = new Game(288, 512);
