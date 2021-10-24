var box
function setup() {
  createCanvas(400,400);
  box=createSprite(20,20,20,20)
}

function draw() 
{
  background(30);
  if (keyIsDown(DOWN_ARROW)){
    box.position.y += 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x += +3
  }
  drawSprites()
}




