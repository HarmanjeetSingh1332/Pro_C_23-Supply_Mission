class Ground{
    constructor(x,y,w,h){
        var opt ={isStatic : true};
        this.body = Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
        this.width = w;
        this.height = h;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}