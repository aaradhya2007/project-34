class Monster{
    constructor(x,y,width,height){
var options={
    'density':1,
    
}
this.x=x
this.y=y
this.width=width
this.height=height
this.image=loadImage("images/m1.png")

this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
    }
    display(){
var pos=this.body.position


imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)
    }
}