let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🥰", "🤓", "😊", "😜"]; // Caractere invisível removido
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;
let jogoEncerrado = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo();
  desenhaLinhaDeChegada();
  desenhaJogadores();
  verificaVencedor();
}

function ativaJogo() {
  if (focused) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
    fill(80);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Clique na tela para ativar o jogo", width / 2, 20);
  }
}

function desenhaJogadores() {
  textSize(36);
  textAlign(LEFT, CENTER);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  noStroke();
  fill("white");
  rect(350, 0, 10, 400);
  
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] >= 320) { // Ajustado para a borda frontal do emoji encostar na linha
      fill(30);
      stroke(255);
      strokeWeight(3);
      textSize(28);
      textAlign(CENTER, CENTER);
      text(jogador[i] + " venceu!", width / 2, height / 2);
      noLoop();
      jogoEncerrado = true;
      break;
    }
  }
}

function keyReleased() {
  if (jogoEncerrado) return;

  // Converte para minúscula para funcionar mesmo se o Caps Lock estiver ligado
  let teclaPressionada = key.toLowerCase();

  for (let i = 0; i < quantidade; i++) {
    if (teclaPressionada === teclas[i]) {
      xJogador[i] += random(10, 25);
    }
  }
}