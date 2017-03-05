var bg;

var pop;
var popMask;

var fg;
var fgMask;

var p;

var mBool;

function preload() {
  bg = loadImage("http://i.imgur.com/bv8nPes.jpg");
    
    pop = loadImage("http://i.imgur.com/60c4tpY.jpg");
  popMask = loadImage("http://i.imgur.com/FVfZ8q8.png");
    
    fg = loadImage("http://i.imgur.com/nOFdrd1.png");
  fgMask = loadImage("http://i.imgur.com/lRA2YFb.png");

}

function setup() {
    createCanvas(778, 800);
    pop.mask(popMask);
    p = 0;
    mBool = 0;
    frameRate (60);

}

function draw() {
    image(bg, 0, 0);
    image(pop, 0, 140-p);
    image(fg, 0, 0);
    
    if (p < 140 && mBool == 1) {
        p = p+2/2;
    } else if (p > 140) {
        p = 140;
    } else if (p > 0 && mBool == 0) {
        p = p-1/2;
    }
  
}

function mousePressed() {
  mBool = 1;
}

function mouseReleased() {
  mBool = 0;
}