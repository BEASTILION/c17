class Box{

constructor(x,y,width,height,vy){

this.x =x;
this.y = y;
this.width = width;
this.height =height;

this.vy = vy

}

show(){
    fill("red")
    rect(this.x,this.y,this.width,this.height)
}

move(){
this.y = this.y + this.vy
}



}
