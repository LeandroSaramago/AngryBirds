class Corda {
    constructor(corpoA, pontoB) {
      var options = {
          bodyA:corpoA,
          pointB:pontoB,
          stiffness:0.04,
          length:10
      }
      this.body = Matter.Constraint.create(options)
      this.sling1 = loadImage("sling1.png")
      this.sling2 = loadImage("sling2.png")
      this.sling3 = loadImage("sling3.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.bodyA){
      var posA =this.body.bodyA.position;
      var posB = this.body.pointB;
      image(this.sling3, posA.x-20, posA.y, 15, 15)
      strokeWeight(4)
      stroke("#301608")
      line(posA.x-20, posA.y, posB.x, posB.y)
      line(posA.x-20, posA.y, posB.x-40, posB.y)
    }
    image(this.sling1, 200, 200)
    image(this.sling2, 170, 200)
  }
    Release(){
      this.body.bodyA = null
    }
  };
