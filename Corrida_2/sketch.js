function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    verificaVencedor();
  }
  
  function ativaJogo() {
    if (focused == true) {
      background("#D2EBB5");
    } else {
      background("rgb(238,178,178)");
    }
  }
  
  function desenhaJogadores() {
    textSize(40);
    text("😎", xJogador1, 100);
    text("❤️", xJogador2, 300);
  }
  
  function desenhaLinhaDeChegada() {
    rect(350, 0, 10, 400);
  }
  
  function verificaVencedor() {
    if (xJogador1 > 350) {
      text("Jogador 1 venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Jogador 2 venceu!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(30);
    }
    if (key == "s") {
      xJogador2 += random(30);
    }
  }
  