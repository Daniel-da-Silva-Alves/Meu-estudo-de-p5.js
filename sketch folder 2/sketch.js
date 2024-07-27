let prevX, prevY; //prevX e prevY são variáveis usadas para armazenar as coordenadas anteriores do mouse

//Nesta etapa começo definindo o meu setup como o canvas e cor do backgroun
function setup() {

  //Definindo o tamanho da minha tela do canvas
  createCanvas(windowWidth, windowHeight);
  background(255); 
  stroke(200); //cor das linhas e textos
  
  // criando o papel quadriculado que vai me ajudar a desenhar com coordenadas

  for (let x = 0; x <= width; x += 50) {
    line(x, 0, x, height);
    text(x, x + 5, 15); // Coordenadas x
  }
  for (let y = 0; y <= height; y += 50) {
    line(0, y, width, y);
    text(y, 5, y + 15); // Coordenadas y
  }
}

//Essa função sempre é ativada automaticamente antes do mouseDragged
function keyPressed() {
  if (key === 'c') {
    prevX = mouseX;
    prevY = mouseY;
  }
}
function mouseDragged() { //Quando o mouse é arrastado será desenhada uma linha entre o ponto anterior "prevY" e "prevY" e o atual "mouseX" e "mouseY"
  stroke(10);
  line(prevX, prevY, mouseX, mouseY)
  prevX = mouseX;
  prevY = mouseY;
}

function doubleClicked() { //Quando o mouse é dois cliques será desenhado uma linha com um ponto inicial localizado  nas úl
  if (prevX !== undefined && prevY !== undefined) {
    stroke(10);
    line(prevX, prevY, mouseX, mouseY); // Desenha uma linha entre o ponto anterior e o atual
    //ellipse(prevX, prevY, 10, 10);
    prevX = mouseX;
    prevY = mouseY;
  }
}