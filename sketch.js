
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_image, tree, mangoa_tree;
var character, character_image;
var mangoa_1, mangoa_2, mangoa_3, mangoa_4, mangoa_5, mangoa_6;
var stone_img;

function preload(){
  bg_image = loadImage("bg_image.png.jpg");
  mangoa_tree = loadImage("mangoa_tree.png,png");
  mangoa_1 = loadImage("mangoa_1.png.png");
  mangoa_2 = loadImage("mangoa_2.png.png");
  mangoa_3 = loadImage("mangoa_3.png.png");
  mangoa_4 = loadImage("mangoa_4.png.png");
  mangoa_5 = loadImage("mangoa_5.png.png");
  mangoa_6 = loadImage("mangoa_6.png.png");
  character_image = loadAnimation("character_1.png.png", "character_2.png.png", "character_3.png.png", "character_4.png.png", "character_5.png.png", "character_6.png.png");
  stone_img = loadImage("stone.jpg.png");
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  bg_image=new Ground();
  stone_img=new Stone(100, 460, 23);
  mangoa_1=new Mangoa(600, 290, 34);
  mangoa_2=new Mangoa(855, 325, 35);
  mangoa_3=new Mangoa(670, 260, 35);
  mangoa_4=new Mangoa(730, 200, 35);
  mangoa_5=new Mangoa(710, 320, 35);
  mangoa_6=new Mangoa(780, 250, 35);
  attach=new throw(stones.body,{x:100,y:465});

  tree = createSprite(775, 368);
  tree.addImage(mangoa_tree);
  tree.scale = 0.42;

  character = createSprite(160, 550);
  character.addImage(character_image);
  character.scale = o.125;

  Engine.run(engine);


  

  
}


function draw() 
{
  background(51);

  fill("black");
  textSize(18);

  detectCollision(stones, manoa1);
  detectCollision(stones, manoa2);
  detectCollision(stones, manoa3);
  detectCollision(stones, manoa4);
  detectCollision(stones, manoa5);
  detectCollision(stones, manoa6);

  Engine.update(engine);

  drawSprites();

  stone_img.display();
  bg_image.display();
  mangoa_1.display();
  mangoa_2.display();
  mangoa_3.display();
  mangoa_4.display();
  mangoa_5.display();
  mangoa_6.display();

  function mouseDragged(){
    Matter.Body.setPosition(stones.body,{x:mopuseX,y:mouseY});
  }

  function mouseReleased(){
    attach.fly();
  }

  function detectCollision(1sones,1mangoa){

    if(1stones.body.position.x-1mangoa.body.position.x <1mangoa.diametre +_ 1stones.diametre
      && 1mangoa.body.x-1stodfy.positioones.body.position.x <1mangoa.diametre + 1stones.diametre
      && 1stones.body.position.y-1mangoa.body.position.y <1mangoa.diametre +_ 1stones.diametre
      && 1mangoa.body.position.y-1stones.body.position.y <1mangoa.diametre + 1stones.diametre){
        Matter.Body.setStatic(1mangoa.body,false);
      }
  }

  function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(stones.body,{x:100,y:465});
      attach.Lauch(stones.body);
    }
  }
  
}

