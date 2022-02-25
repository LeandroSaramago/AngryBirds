class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
      this.image = loadImage("enemy.png")
      this.v = 255
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      if(this.body.speed>3){
        World.remove(world, this.body)
        push();
       this.v = this.v-5
       tint(255, this.v)
       image(this.image, this.body.position.x, this.body.position.y, 70, 70)
       pop();
      }else{
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      imageMode(CENTER);
      fill("green");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  };