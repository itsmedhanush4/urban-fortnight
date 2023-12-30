const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;


var bucket
var bucketimg

var score=0
var balls=[]







function preload(){

    
    bucketimg=loadImage("empytbucket.png")
}

function setup(){
    createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;


   
    var options={
      isStatic:true
    }
    bucket=Bodies.rectangle(450,630,150,100,options)
    
    World.add(world,bucket)
    
}

function draw(){
    Engine.update(engine)
    background("black")
    imageMode(CENTER);
    
    //string concatination
    fill ("white")
    textSize(20)
    text("SCORE : "+ score, 750,50)
    
    for(var i=0;i<balls.length ; i++){
        balls[i].display()
    }

    if(frameCount % 10 ==0){
        makeBalls()
    }

    
   image(bucketimg,bucket.position.x,bucket.position.y,150,100)
    //rect(bucket.position.x,bucket.position.y,150,100)

    if(keyIsDown(RIGHT_ARROW) ){
       
        bucket.position.x=bucket.position.x+10
    }
    if(keyIsDown(LEFT_ARROW)){
        bucket.position.x=bucket.position.x -10

    }

    //make a for loop to access each balls from an array and use collides to know if collision happens with basket and the ball
    for (var i=0 ; i<balls.length-1 ; i++){
        
        var collision=Matter.SAT.collides(bucket,balls[i].body)
        if(collision.collided){
            
            score = score+1
        }
       
    }
    //make sure you do this by attempting it multiple times untill you get it correct

    //we have already done this in pirates game so use your logics and do the project witj dedication

   //and one score for every bals that buckets collects
    
}







function makeBalls(){
    
        ball=new Ball(random(1,900),0,random(10,20))
        balls.push(ball)
    
}