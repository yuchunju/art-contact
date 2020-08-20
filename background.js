
let rad = 130; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom



var link;

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
	
	
	wc = new Image();
    wc.src = "lib/qrcode.jpg";
	
  frameRate(30);

  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}




function draw() {
  background('#99CCFF');
	

 // Update the position of the shape
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
  drawingContext.drawImage(me,xpos/ 3.5, ypos/ 4, 115, 115);
   drawingContext.drawImage(wc, xpos/ 3.45, ypos/ 2.3, 105, 105);
   
   
  drawingContext.drawImage(img,xpos, ypos, rad, rad);
  drawingContext.drawImage(day,xpos, ypos/ 2, rad, rad);
  drawingContext.drawImage(memo,xpos/ 2, ypos/ 1.7, rad, rad);
  drawingContext.drawImage(rable,xpos/ 2, ypos, rad, rad);
  

   
  
 
 
}


  
 
function touchMoved() {
	
	    link = createA("https://www.instagram.com/yuchunjuju","Go to Instagram", "_blank");
	link.position(xpos, ypos);  
	
	    link = createA("https://www.instagram.com/ambrala_art","Go to memorable day", "_blank");
	link.position(xpos, ypos/ 2);  
	link.style('color', '#FF66CC');
	
        link = createA("https://yuchunju.github.io/art","Go to home", "_blank");
	link.position(xpos/ 2, ypos); 
	link.style('color', '#32CD32');

}

function touchStarted() {
	
       

	    link = createA("https://www.instagram.com/yuchunjuju","Go to Instagram", "_blank");
	link.position(xpos, ypos);  
	
	
	    link = createA("https://www.instagram.com/ambrala_art","Go to memorable day", "_blank");
	link.position(xpos, ypos/ 2);  
	link.style('color', '#FF66CC');
	
        link = createA("https://yuchunju.github.io/art","Go to home", "_blank");
	link.position(xpos/ 2, ypos); 
	link.style('color', '#32CD32');

	
	
}

