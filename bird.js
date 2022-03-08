class bird extends pai{
    constructor(x, y){
        super(x, y, 50, 50)
        this.image = loadImage("bird.png")
        this.smokeimage = loadImage("smoke.png")
        this.tragetoria = []
    }
    display(){
        
        super.display()
        if(this.body.velocity.x > 5 && this.body.position.x > 230){
        var Pos = [this.body.position.x, this.body.position.y]
        this.tragetoria.push(Pos)
        }
        for(var I = 0; I<this.tragetoria.length; I++){
        image(this.smokeimage, this.tragetoria[I][0],  this.tragetoria[I][1])
        }
    } 
}