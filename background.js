let rad = 200; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 3.8; // Speed of the shape
let yspeed = 3.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}




function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

    img = new Image();
    img.src = "lib/day04.png";
 
	day = new Image();
    day.src = "lib/day01.png";
	
	memo = new Image();
    memo.src = "lib/day02.png";
	
	rable = new Image();
    rable.src = "lib/day03.png";
	
noStroke();
  frameRate(50);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}






function draw() {
	background('#99CCFF');
	
 xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  drawingContext.drawImage(img,xpos, ypos, rad, rad);
  drawingContext.drawImage(day,xpos/3, ypos/2, rad, rad);
    drawingContext.drawImage(memo,xpos/6, ypos, rad, rad);
	  drawingContext.drawImage(rable,xpos/2, ypos/4, rad, rad);
}




