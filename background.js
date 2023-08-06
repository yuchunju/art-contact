
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
  drawingContext.drawImage(memo,xpos/ 2, ypos/ 1.5, rad, rad);
  drawingContext.drawImage(rable,xpos/ 2, ypos, rad, rad);






}




function touchMoved() {

	    link = createA("https://www.instagram.com/yuchunjuju","Instagram", "_blank");
	link.position(xpos, ypos);

	    link = createA("mailto:yuchunjuju@gmail.com","yuchunjuju@gmail.com", "_blank");
	link.position(xpos, ypos/ 2);
	link.style('color', '#FF66CC');

        link = createA("https://yuchunju.github.io/art","Home 首页", "_blank");
	link.position(xpos/ 2, ypos);
	link.style('color', '#32CD32');

	link = createA("https://www.youtube.com/channel/UCiCb1C6F-BasTGH6yutx7KA?","Youtube", "_blank");
	link.position(xpos/ 2, ypos/ 1.5);
	link.style('color', '#E0CD0F');

		link = createA("https://mp.weixin.qq.com/s?__biz=MzkyMjUwNzQwOA==&mid=2247484037&idx=1&sn=daff3ec3d299ca578f6de5c55b6f82cf&chksm=c1f2037af6858a6c0e8d4bc306cb30e7cc612229d1521498b730b3321b12e84beb68a4d7cef8#rd","Wechat", "_blank");
	link.position(xpos/ 3.5, ypos/ 4);
	link.style('color', '#FFFFFF');

}

function touchStarted() {

      link = createA("https://www.instagram.com/yuchunjuju","Instagram", "_blank");
	link.position(xpos, ypos);

	    link = createA("mailto:yuchunjuju@gmail.com","yuchunjuju@gmail.com", "_blank");
	link.position(xpos, ypos/ 2);
	link.style('color', '#FF66CC');

        link = createA("https://yuchunju.github.io/art","Home 首页", "_blank");
	link.position(xpos/ 2, ypos);
	link.style('color', '#32CD32');

	link = createA("https://www.youtube.com/channel/UCiCb1C6F-BasTGH6yutx7KA?","Youtube", "_blank");
	link.position(xpos/ 2, ypos/ 1.5);
	link.style('color', '#E0CD0F');

		link = createA("https://mp.weixin.qq.com/s?__biz=MzkyMjUwNzQwOA==&mid=2247484037&idx=1&sn=daff3ec3d299ca578f6de5c55b6f82cf&chksm=c1f2037af6858a6c0e8d4bc306cb30e7cc612229d1521498b730b3321b12e84beb68a4d7cef8#rd","Wechat", "_blank");
	link.position(xpos/ 3.5, ypos/ 4);
	link.style('color', '#FFFFFF');


}

