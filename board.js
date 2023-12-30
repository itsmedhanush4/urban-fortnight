class Board{
    constructor(x,y,w,h, angle){

        var options = {
            isStatic : true,
            restitution: 0.2
        }
        this.body=Bodies.rectangle(x,y,w,h, options)
        World.add(world,this.body)
        this.w=w
        this.h=h
        this.angle=angle
    }

    show(){

        var pos = this.body.position;
        var angle=this.body.angle
        push ()
        
        rectMode(CENTER)
        translate(pos.x,pos.y)
        rotate (this.angle)
        rect(0,0,this.w,this.h)
    
        pop ()
    }
}