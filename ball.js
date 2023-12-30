class Ball{
    constructor(x,y,r){
        var options={
           restitution: 0
        }
        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    
    
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r, this.r)
    }
}