class Bob{
    constructor(x,y,radius){
       
        var options = {
            restitution: 0.3, isStatic: true, friction: 0.5, density: 1.2
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("sprites/paper.png");
        this.r = radius;
        
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
    
    
        
        fill("pink");
        ellipse(0,0,this.w,this.h);
       pop()
    }
    
    }