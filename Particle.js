class Particle{

    constructor(x,y,r){
    
    var options = {
    
    isStatic : true
    
    }
    
    this.body = Bodies.circle(x,y,r,options);
    this.r = radius;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill(color(random("red","blue","brown")))
    ellipse(0,0,this.r);
    pop()
    
    }
    }