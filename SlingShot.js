class SlingShot{
    constructor(body1,point1){
        var options = {
            bodyA:body1,
            pointB:point1,
            stiffness:0.4,
            length:20
        }
        this.point = point1;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.point;
            strokeWeight(4);
            fill("green");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}