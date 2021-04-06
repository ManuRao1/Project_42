class Drops {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.rain =  Bodies.circle(x, y, 5, options);
    }
     update() {
   if( rain.position.y > height){
       Matter.body.setPosition(this.rain, {x: random(0,400), y : random(0,400)})
   }
    }
}