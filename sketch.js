var hypnoticBall, database;
var position;
var gameState = 0
var playerCount;
var game;
var form;
var player;
var allPlayers;


function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
  
   drawSprites();
  
}


