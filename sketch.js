
//bola variaveis
let xBall = 300;
let yBall = 200;
let di = 50;
let raio = di / 2;



//parametros da bola
let velXBall = 5;
let vellYBall = 5;


//raquete var
let yWall = 155;
let xWall = 1;
let wallC = 100;
let wallIDK = 1;


// raquete adv
let yWallO = 155;
let xWallO = 578;
let wallCO = 100;
let vellYO = 1;


// as outras
let pointo1 = 0;
let pointo2 = 0;
let colissao = false;


//sons
let raquetada;
let pointo;
let nitendo69;


//base
function setup(){
  createCanvas(640, 480);
  nitendo69.loop();
}


function draw(){
  background(1,1080,1080);
  raquetes();
  showBall();
  movement();
  Omovement();
  wallColider();
  colider(xWall, yWall);
  colider(xWallO, yWallO);
  controls();
  placar();
  pontos();
  recomeçar();
}

//funçoes
function showBall(){
  fill(244,242,240)
  circle(xBall,yBall,di);
}
function movement(){
  xBall += velXBall;
  yBall += vellYBall;
}
//colisão dos objetos
function colider(x, y){
  colissao = collideRectCircle(x, y, wallIDK, wallC, xBall, yBall, di);
  if (colissao){
    velXBall *= -1;
    raquetada.play();
  }
}

// wall colider
function wallColider(){ 
  if (xBall + raio > width || xBall - raio < 0){
    velXBall *= -1;
 }
  if (yBall + raio > height || yBall - raio < 0){
    vellYBall *= -1;
  }
}

function preload(){
  nitendo69 = loadSound("sounds/Super Nintendo 69.mp3")
  pointo = loadSound("sounds/ding2.wav")
  raquetada = loadSound("sounds/thunk.wav")
}
function controls(){
  if (keyIsDown(87)){
    yWall -= 10;
  }
  if (keyIsDown(83)){
    yWall += 10;
  }
}
function Omovement(){
  if (keyIsDown(UP_ARROW)){
    yWallO -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yWallO += 10;
  }
}
//raquetes
function raquetes(){
  fill(2,86,155);
  rect(xWall, yWall, 20, wallC);
  rect(xWallO, yWallO, 20, wallC);
}

//placar
function placar(){
  textAlign(CENTER)
  textSize(20)
  fill(148,147,152);
  rect(150, 10, 40, 20)
  rect(450, 10, 40, 20)
  fill(245,223,78)
  text(pointo1, 160, 26);
  text(pointo2, 460, 26);
}

function pontos(){
  if (xBall + raio > 600){
    pointo1 += 1;
  pointo.play();
  }
  if (xBall - raio <0){
    pointo2 += 1;
  pointo.play();
  }
}
//restart
function recomeçar(){
  if (xBall + raio > 600){
    xBall = 300;}
  if (xBall - raio <0){
    xBall = 300;
  }
}