class sling{

    constructor(bodyA,pointB){

var c={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB=pointB;
this.sling=Constraint.create(c);
World.add(world,this.sling);

    }
fly(){
    this.sling.bodyA=null;
}
    display(){
        if(this.sling.bodyA){
            var A=this.sling.bodyA.position;
            var B = this.pointB;
    
            stroke ("red");
            strokeWeight(3);
    
            line(A.x,A.y,B.x,B.y);
        }
        
    }

}