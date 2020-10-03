class Ball{
    constructor(x, y){
        var options = {
            density : 1.5,
            restitution : 1.0,
            friction : 0.5
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options)
        this.width = 30
        this.height = 30
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        //pos.x = mouseX 
        //pos.y = mouseY

        rectMode(CENTER)
        rotate(angle)
        stroke('red')
        fill('red')
        rect(pos.x, pos.y, this.width, this.height)
    }
}