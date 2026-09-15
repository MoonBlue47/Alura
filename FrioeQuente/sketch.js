let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = floor(random(50, 350));
  y = floor(random(50, 350));
}

function draw() {
  background(220);

  // Movimento sutil do ponto secreto
  x = x + random(-3, 3);
  y = y + random(-3, 3);
  x = constrain(x, 10, 390);
  y = constrain(y, 10, 390);

  // Calcula a distância do mouse até o ponto invisível
  let distancia = dist(mouseX, mouseY, x, y);

  // O círculo no cursor diminui conforme você se aproxima do alvo (jogo do "quente ou frio")
  noFill();
  stroke(60);
  strokeWeight(2);
  circle(mouseX, mouseY, distancia * 2);

  // Condição de vitória ajustada para ser alcançável
  if (distancia < 10) {
    // Revela a bolinha secreta
    fill("#FF1744");
    noStroke();
    circle(x, y, 16);

    // Mensagem de vitória em destaque
    fill(20);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Encontrei! 🎉", width / 2, height / 2);
    
    noLoop();
  }
}