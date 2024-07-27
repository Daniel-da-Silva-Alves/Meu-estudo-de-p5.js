let prevX, prevY;

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


if (mousePressed && mouseDragged ) {
  fill(10);
  ellipse(mouseX, mouseY, 10, 10);

  if (prevX !== undefined && prevY !== undefined) {
    stroke(10);
    strokeWeight(20);
    line(prevX, prevY, mouseX, mouseY); // Desenha uma linha entre o ponto anterior e o atual
    ellipse(prevX, prevY, 10, 10);
}
}

function mousePressed() {
  fill(20)
  ellipse(mouseX, mouseY, 15, 15);
}
function mouseDragged() {
  fill(10);
  ellipse(mouseX, mouseY, 10, 10);

  if (prevX !== undefined && prevY !== undefined) {
    stroke(10);
    strokeWeight(20);
    line(prevX, prevY, mouseX, mouseY); // Desenha uma linha entre o ponto anterior e o atual
    ellipse(prevX, prevY, 10, 10);
  }

  prevX = mouseX;
  prevY = mouseY;
}