const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, estadopassaro = "noEstilingue"
var box1, box2, wood, box3, box4, wood2, box5, wood3, wood4, cordinha
var floor, back
var bg = "assets/bg2.jpg"
var Pig1, Pig2, Passaro
function preload() {
    backgroundtime();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    floor = new Floor (600, 390, 1200, 30);
    box1 = new Box(800,300,70,70);
    box2 = new Box (1000, 300, 70, 70);
    Pig1 = new Pig (900, 310);
    Pig2 = new Pig (900, 280);
    wood = new Madeira (900, 290, 290, PI/2);
    box3 = new Box(1000, 280,70,70);
    box4 = new Box(800, 280, 70,70);
    wood2 = new Madeira(900, 270, 290, PI/2);
    box5 = new Box(900, 220, 70,70);
    wood3 = new Madeira(840, 220, 145, PI/4);
   wood4 = new Madeira (950, 200, 145, PI/-4);
   Passaro = new bird (180, 200);
   cordinha = new Corda (Passaro.body, {x:230, y:230})
}

function draw(){
if(back){
background(back);
}
    Engine.update(engine);
    box1.display();
    floor.display();
    box2.display();
   Pig1.display();
   wood.display();
   box4.display();
   box3.display();
   Pig2.display();
   wood2.display();
   wood3.display();
   box5.display();
   wood4.display();
   Passaro.display();
   cordinha.display();
}
async function backgroundtime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo")
var responseJSON = await response.json();
var hora = responseJSON.datetime.slice(11, 13)
if(hora >= 06 && hora <= 18){
    bg = "assets/bg.png"
}else{
    bg = "assets/bg2.jpg"
}
back = loadImage(bg)
console.log(back)
}
function mouseDragged(){
 if(estadopassaro === "noEstilingue"){
    Matter.Body.setPosition(Passaro.body, {x:mouseX,y:mouseY})
 }
}
function mouseReleased(){
    estadopassaro = "Solto"
    cordinha.Release()
}