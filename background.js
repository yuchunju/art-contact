let angle1 = 0;
let angle2 = 0;
let scalar = 200;


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
	
	me = new Image();
    me.src = "lib/me01.png";
	
//   meMode(CENTER);
}




function draw() {
	background('#99CCFF');
	
  let ang1 = radians(angle1);
  let ang2 = radians(angle2);

  let x1 = width / 3.7 + scalar * cos(ang1);
  let x2 = width / 2 + scalar * cos(ang2);

  let y1 = height / 2 + scalar * sin(ang1);
  let y2 = height / 2 + scalar * sin(ang2);

  fill(0);
  drawingContext.drawImage(me,width * 0.35, height * 0.25, 300, 300);

  fill(0);
  drawingContext.drawImage(img, x1, height * 0.25 - 190, scalar, scalar);
  drawingContext.drawImage(day,x2, height * 0.25 + 275, scalar, scalar);

  fill(0);
  drawingContext.drawImage(memo,width * 0.35 - 148, y1, scalar, scalar);
  drawingContext.drawImage(rable,width * 0.35 + 220, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3;


}




