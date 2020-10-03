class BoxR{
    constructor(x, y){
        var options = {
            restitution : 0.1,
            friction : 0.5,
            density : 1.5
        }
        this.body = Bodies.rectangle(x, y, 15, 20, options)
        this.width = 15,
        this.height = 20,
        this.color = color
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        fill('red')
        stroke('red')
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}