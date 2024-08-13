let bgImagem;
let alphaValue = 10;

function preload() {
  bgImagem = loadImage('static/medina.jpg'); // Carrega a imagem de fundo
  mesaDeBar = loadImage('static/mesa.png'); // Carrega a imagem da cadeira de bar
  cachacinha = loadImage('static/cachacinha.png');
  heineken = loadImage('static/heinekhummmmmseinao.png'); // Carrega a imagem do heineken
  cigarrets = loadImage('static/cigarrets.png'); // Carrega a imagem dos cigarrets
  cadeira = loadImage('static/cadeira.png'); // Carrega a imagem da cadeira
  medinaSBG = loadImage('static/medinaSBG.png'); //Carrega a imagem da medinaSBG
 
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Cria o canvas com as dimensões da imagem de fundo
  background(bgImagem); // Desenha a imagem de fundo
}

function draw() {
  image(cadeira, 700, 250, 100, 170); // Desenha)
  image(medinaSBG, 600, 100);
  image(mesaDeBar, 460, 260, 270, 270); // Desenha)
  image(cachacinha, 605, 295, 40, 23.5); // Desenha)
  image(cigarrets, 570, 290, 60,40); // Desenha)
  image(heineken, 592, 275, 70,50);
}

function drawGrid() {
  stroke(100); // Define a cor das linhas da grade
  strokeWeight(1); // Define a espessura das linhas

  // Desenha linhas verticais e números
  for (let x = 0; x <= width; x += 50) {
    line(x, 0, x, height);
    text(x, x + 5, 15); // Coordenadas x
  }
  for (let y = 0; y <= height; y += 50) {
    line(0, y, width, y);
    text(y, 5, y + 15); // Coordenadas y
  }
}
