class String {

constructor(a,b){
this.c=Matter.Constraint.create({
bodyA: a, bodyB: b, stiffness:0.4, 
length:100



});
World.add(world,this.c);



}
display(){
line (this.c.bodyA.position.x,this.c.bodyA.position.y,this.c.bodyB.position.x,this.c.bodyB.position.y);

}




}