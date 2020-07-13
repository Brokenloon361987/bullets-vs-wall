var bullet , wall ;


function setup() {
createCanvas(1200,800);

bullet = createSprite(100, 400, 50, 80);
  bullet.shapeColor = "green";
  bullet.debug = false;
  bullet.velocityX = random (-5 , -100);

wall = createSprite (600 , 400)
wall.shapeColor = "white"



}
function draw (){
    if (isTouching (bullet, wall) && bullet.velcoityX <40 >5  ) {
      bullet.shapeColor = "green";
      bullet.velocityX = 0;
    }
    if (isTouching (bullet, wall) && bullet.velcoityX <75 >40  ) {
        bullet.shapeColor = "yellow";
        bullet.velocityX = 0;
      }
    if (isTouching (bullet, wall) && bullet.velcoityX <40 >5  ) {
      bullet.shapeColor = "red";
       bullet.velocityX = 0;
     }
}