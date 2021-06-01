var Juliet;
let sentence = ['For never', 'was a story of', 'more woe than', 'this of Juliet', 'and her Romeo', '"FOR NEVER WAS A STORY OF MORE WOE THAN THIS OF JULIET AND HER ROMEO."'];
let word;
let ts = 100;
let speed = 5;


function preload() {
  Juliet = loadFont('data/Juliet-Serif.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(Juliet);
  textAlign(CENTER, CENTER);
  word = sentence[0];

  setTimeout(one, 1000);
  setTimeout(two, 2000);
  setTimeout(three, 3000);
  setTimeout(four, 4000);
  setTimeout(five, 6000);
}

function one(){
  word = sentence[1];
  ts = 100;
  speed = 5;
}

function two(){
  word = sentence[2];
  ts = 175;
  speed = 5;
}

function three(){
  word = sentence[3];
  ts = 150;
  speed = 5;
}

function four(){
  word = sentence[4];
  ts = 150;
  speed = 5;
}

function five(){
  word = sentence[5];
  ts = 105;
  speed = 5;
}

function draw() {
  background(196, 58, 35);
  
  textSize(ts);
  text(word, 0.15*width, 0.15*height, 0.7*width, 0.7*height);
  
}
