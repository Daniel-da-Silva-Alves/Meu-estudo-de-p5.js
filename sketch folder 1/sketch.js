let img;
let sound;
function preload(){
  sound = loadSound('static/a-barreira-vai-virar-baile-mc-darlan-feat-blogueirinho-da-colina-coutinho-gta-sa_audio_super.mp3');
  img0 = loadImage('static/coutinho.png');
  img1 = loadImage('static/coutinho1.png');
  img2 = loadImage('static/coutinho2.png');
  img3 = loadImage('static/coutinho3.png');
  img4 = loadImage('static/payet.png');
  img5 = loadImage('static/payet1.png');
  img6 = loadImage('static/payet2.png');
  img7 = loadImage('static/payet3.png');
  img8 = loadImage('static/vengetti.png');
  img9 = loadImage('static/vengetti1.png');
  img10 = loadImage('static/vengetti2.png');
  img11 = loadImage('static/vengetti3.png');

  imagens = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  sound.play();
  frameRate(15);
}

function draw() {

	var x = random(width);
	var y = random(height);
  img = random(imagens);
  altura = random(100, 250);
  largura = altura;
	image(img, x, y, altura, largura);
}