var canvas;
var music;

var floor1, floor2, floor3, floor4;

var edge1, edge2, edge3, edge4;

var floorGroup;

var box1



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
floor1 = createSprite(100, 590, 190, 20);
floor1.shapeColor = 200,200,200;

floor2 = createSprite(300, 590, 190, 20);
floor2.shapeColor = 160,160,160

floor3 = createSprite(500, 590, 190, 20);
floor3.shapeColor = 110,110,110;

floor4 = createSprite(700, 590, 190, 20);
floor4.shapeColor = 75,75,75;

edge1 = createSprite(400, 595, 900, 10)

edge2 = createSprite(5, 300, 10, 700)

edge3 = createSprite(795, 300, 10, 900)

edge4 = createSprite(400, 5, 900, 10)


//create box sprite and give velocity
    box1 = createSprite((random(50, 750)), 300,50, 50);
   // box1.shapeColor = 0, 0, 0;
    box1.velocityX = 4
    box1.velocityY = 5
 
 
}

function draw() {
   background.shapeColor = "red"
    background(rgb(255,255,255));
box1.bounceOff(edge2)
if(box1.isTouching(floor2)){
box1.shapeColor = 160, 160, 160;
}

box1.bounceOff(edge3)
if(box1.isTouching(floor3)){
box1.shapeColor = 110, 110, 110;
}

box1.bounceOff(edge4)
if(box1.isTouching(floor4)){
box1.shapeColor = 75, 75, 75;
}

box1.bounceOff(edge1)
if(box1.isTouching(floor1)){
box1.shapeColor = 200, 200, 200;
}

    drawSprites()
 
}
