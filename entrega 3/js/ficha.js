class Ficha {

    constructor(posX, posY, fill, context){
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.focus = false;
        this.focusColor = 'yellow';
        this.ctx = context;
    }

    setFill (fill){
        this.fill = fill;
    }

    setPosition (x,y){
        this.posX = x;
        this.posY = y;
    }

    getPosition (){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    getFill(){
        return this.fill;
    }

    draw(){
        this.ctx.fillStyle = this.fill
    }

    setResaltado (resaltado){
        this.resaltado = resaltado;
    }

    isMouseOver(x,y){
        
    }

}