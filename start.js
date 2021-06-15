class Start{
    #image = null;
    #loaded = false;
    constructor(game){
        this.game = game;
        this.createImage();
    }
    createImage(){
        this.#image = new Image();
        this.#image.onload = ()=>{
            this.#loaded = true;
        }
        this.#image.src = './imgs/message.png';
    }
    draw(){
        if(!this.#loaded){
            return;
        }
        this.game.context.drawImage(this.#image,50,50);
        console.log('hello');
    }
}