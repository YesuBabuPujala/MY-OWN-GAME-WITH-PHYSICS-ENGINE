class Ground{

    constructor(){

        varoptions={
            isStatic:true,
            friction:0.4
        }
        thisw.body = Bodies.rectangle(550, 625, 1200, 20, options);
        World.add(world, this.body);
    }
    display(){

        rectMode(center);
        fill("silver");
        rect(500, 625, 1200, 20);
    }
}