var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var aths, ath1, ath2, ath3, ath4;

var track, ath1_img, ath2_img, ath3_img, ath4_img;

function preload(){
  track = loadImage("track.jpg");
  ath1_img = loadImage("car1.png");
  ath2_img = loadImage("car2.png");
  ath3_img = loadImage("car3.png");
  ath4_img = loadImage("car4.png");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
