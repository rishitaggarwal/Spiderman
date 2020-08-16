var spiderman,
    spidermanOperator =200
let   spidImg
var lin
var lineOp = 200
var bg
function preload(){
spidImg = loadImage('imageedit_4_6174204409.png')
  bg = loadImage('download (3).jpg')
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bg)
  fill(255)
  line(200,0,200,spidermanOperator)
 
  spidermanOperator = spidermanOperator + 1
  image (spidImg,200,spidermanOperator)
  

  if (spidermanOperator === 400){
spidermanOperator = 0

}
}


