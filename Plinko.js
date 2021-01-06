class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true , 
            restitution : 0.5 , 
            friction : 0.5 ,
            density : 1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos  = this.body.position;
        fill (255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
       
    }
}