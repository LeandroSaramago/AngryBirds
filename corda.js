class Corda {
    constructor(corpoA, corpoB) {
      var options = {
          bodyA:corpoA,
          bodyB:corpoB,
          stiffness:0.04,
          length:10
      }
      this.body = Matter.Constraint.create(options)
      World.add(world, this.body);
    }
    display(){
      var posA =this.body.bodyA.position;
      var posB = this.body.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y)
    }
  };