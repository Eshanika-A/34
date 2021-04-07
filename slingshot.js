class Slingshot{
    constructor(bodyA,pointB){
   var options ={
       bodyA:pointB,
       length:250,
       stiffness:1.0
   }
   this.pointB=pointB;
   this.sling= Constraint.create(options);
   World.add(world,this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
      
            stroke(10, 12, 7);
            strokeWeight(4);
      
            line(pointB.x, pointB.y, pointA.x, pointA.y);
      
            pop();
    }
}
}