class Stone{
    constructer(x ,y, diameter) {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
}
this.body = Bo (parameter) diametre:any options)
this.diametre=diametre;
this.image = loadImage("stone.jpg.png");
World.add(world, this.body);
}
display({
    push();
    translate(this.body.position.x, this.body.position.y);
    imageModeCENTER);
    image(this.image, o, o, this.diametre);
    pop();
}