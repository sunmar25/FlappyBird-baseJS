class Bird{
    image= null;
    loaded = false;
    flap = 0;
    x =95;
    y= 200;
    a = 0.3;
    frameRate = 0;
    constructor(game){
        this.game = game;
        this.createImage();
    }
    createImage(){
        this.image = new Image();
        //this.image.src = './imgs/yellowbird-upflap.png';
        this.image.onload = ()=>{
            this.loaded = true;
        }
    }
    birdFlap(){
        let src = this.image.src;
       // console.log(src);
        //console.log('===============================');
        switch(this.flap){
            case 0: src = './imgs/yellowbird-upflap.png';
                break;
            case 2: src = './imgs/yellowbird-midflap.png';
                break;
            case 5: src = './imgs/yellowbird-downflap.png';
                break;
        }
        return src;
    }

    birdUpFlap(){
        this.y -=50;
        this.frameRate=-5;
    }
    checkBirdDead(){
        if((this.x + 34>= this.game.pipe.x && this.x <= this.game.pipe.x +52) &&
            (this.y +24  >= this.game.pipe.y1 || this.y <= this.game.pipe.y2 +320 )){

           // console.log('okokoko');
           return true;

        }
    }
    update(){
        //this.checkBirdDead();
        //bird down
        this.frameRate += this.a;
        this.y += this.frameRate;
        //fan bird
        this.image.src = this.birdFlap();
        this.flap++;
        if(this.flap == 6){
            this.flap = 0;
        }
        //console.log(this.flap);
    }
    draw(){
        if(!this.loaded){
           return;
        }
        this.game.context.drawImage(this.image,this.x,this.y);
       // console.log(this.image.src);
    }
}