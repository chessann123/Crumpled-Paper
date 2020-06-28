class Dustbin{
    constructor(){
        side1 = new Ground(900,370,200,20, "blue");
        side2 = new Ground(800,320,20,100, "blue");
        side3 = new Ground(1000,320,20,100, "blue");
    }
    display(){
        side1.display();
        side2.display();
        side3.display(); 
    }

    /*
    cconstructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        //var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(this.position.x, this.position.y, this.width, this.height);
    }
    */
}