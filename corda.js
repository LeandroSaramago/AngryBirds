class Corda {
    constructor(corpoA, pontoB) {
      var options = {
          bodyA:corpoA,
          pointB:pontoB,
          stiffness:0.04,
          length:5
      }
      this.body = Matter.Constraint.create(options)
      World.add(world, this.body);
    }
    display(){
      if(this.body.bodyA){
      var posA =this.body.bodyA.position;
      var posB = this.body.pointB;
      line(posA.x, posA.y, posB.x, posB.y)
    }
  }
    Release(){
      this.body.bodyA = null
    }
  };
