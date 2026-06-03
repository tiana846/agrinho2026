function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let secaoAtual = 0;
let totalSecoes = 3;
let scrollBotao;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  
  // Botão interativo para navegar entre as seções
  scrollBotao = createButton('Próximo Tema');
  scrollBotao.position(width / 2 - 60, height - 60);
  scrollBotao.style('background-color', '#4B0082'); // Roxo Indigo
  scrollBotao.style('color', '#FFFFFF');
  scrollBotao.style('border', 'none');
  scrollBotao.style('padding', '10px 20px');
  scrollBotao.style('border-radius', '20px');
  scrollBotao.style('cursor', 'pointer');
  scrollBotao.style('font-weight', 'bold');
  scrollBotao.mousePressed(proximaSecao);
}

function draw() {
  background(245, 247, 250); // Fundo claro e limpo

  // Desenha a seção ativa com base no clique
  if (secaoAtual === 0) {
    desenharHome();
  } else if (secaoAtual === 1) {
    desenharEquilibrio();
  } else if (secaoAtual === 2) {
    desenharFuturo();
  }
  
  desenharMenu();
}

// --- SEÇÃO 1: HOME (Agro Forte) ---
function desenharHome() {
  // Gradiente de fundo sutil (Roxo para Azul)
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(75, 0, 130, 40), color(0, 102, 204, 40), inter);
    stroke(c);
    line(0, i, width, i);
  }
  
  noStroke();
  fill(75, 0, 130); // Roxo
  textSize(42);
  textStyle(BOLD);
  text("AGRO FORTE", width / 2, height / 2 - 100);
  
  fill(0, 102, 204); // Azul
  textSize(24);
  text("O Futuro Sustentável da Produção", width / 2, height / 2 - 40);
  
  fill(80);
  textSize(16);
  textStyle(NORMAL);
  let info = "A tecnologia (Roxo) e a preservação dos recursos (Azul) marcham juntas.\nO Agro Forte do amanhã nasce do equilíbrio e da inovação hoje.";
  text(info, width / 2, height / 2 + 40);
  
  // Detalhe visual tecnológico
  stroke(75, 0, 130, 150);
  noFill();
  ellipse(width / 2, height / 2 - 60, 450, 200);
}

// --- SEÇÃO 2: O EQUILÍBRIO ---
function desenharEquilibrio() {
  // Divisão visual equilibrada
  noStroke();
  // Lado Roxo (Produção/Tecnologia)
  fill(75, 0, 130, 20);
  rect(0, 0, width / 2, height);
  // Lado Azul (Sustentabilidade/Água)
  fill(0, 102, 204, 20);
  rect(width / 2, 0, width / 2, height);
  
  // Título
  fill(40);
  textSize(32);
  textStyle(BOLD);
  text("O Equilíbrio da Balança", width / 2, 80);
  
  // Card Roxo - Produção
  fill(75, 0, 130);
  textSize(22);
  text("Produção & Tecnologia", width / 4, height / 2 - 80);
  fill(100);
  textSize(15);
  textStyle(NORMAL);
  text("O uso de dados, IA e maquinário\neficiente potencializa a colheita\nsem desperdício de insumos.", width / 4, height / 2);
  
  // Card Azul - Sustentabilidade
  fill(0, 102, 204);
  textStyle(BOLD);
  textSize(22);
  text("Recursos & Sustentabilidade", (3 * width) / 4, height / 2 - 80);
  fill(100);
  textSize(15);
  textStyle(NORMAL);
  text("Manejo inteligente da água,\npreservação do solo e energias\nrenováveis garantem as próximas safras.", (3 * width) / 4, height / 2);
  
  // Símbolo do Equilíbrio no centro
  stroke(0, 102, 204);
  strokeWeight(4);
  line(width / 2 - 50, height - 150, width / 2 + 50, height - 150);
  fill(75, 0, 130);
  noStroke();
  ellipse(width / 2, height - 150, 20, 20);
}

// --- SEÇÃO 3: O FUTURO ---
function desenharFuturo() {
  // Fundo dinâmico com partículas simulando tecnologia no campo
  noStroke();
  fill(20, 24, 50); // Fundo escuro para destacar o futuro
  rect(0, 0, width, height);
  
  // Estrelas/Partículas de dados
  fill(0, 191, 255, 150);
  for(let i = 0; i < 30; i++) {
    let x = noise(i * 10) * width;
    let y = noise(i * 20) * height;
    ellipse(x, y, 4, 4);
  }
  
  fill(255);
  textSize(32);
  textStyle(BOLD);
  text("Metas para um Amanhã Sustentável", width / 2, 100);
  
  // Lista de diretrizes
  textSize(18);
  textStyle(NORMAL);
  fill(200, 180, 255); // Roxo claro
  text("• Carbono Neutro nas práticas agrícolas até 2030", width / 2, height / 2 - 60);
  fill(180, 220, 255); // Azul claro
  text("• 100% de eficiência no uso de recursos hídricos", width / 2, height / 2);
  fill(200, 180, 255);
  text("• Integração Lavoura-Pecuária-Floresta (ILPF)", width / 2, height / 2 + 60);
}

// --- MENU SUPERIOR DE NAVEGAÇÃO ---
function desenharMenu() {
  strokeWeight(1);
  // Barra do menu superior
  fill(255, 240);
  noStroke();
  rect(0, 0, width, 50);
  
  // Indicadores de seção (Roxo se ativo, Azul se não)
  for (let i = 0; i < totalSecoes; i++) {
    if (i === secaoAtual) {
      fill(75, 0, 130); // Roxo para a aba ativa
      ellipse(width / 2 - 30 + (i * 30), 25, 12, 12);
    } else {
      fill(0, 102, 204, 100); // Azul para as inativas
      ellipse(width / 2 - 30 + (i * 30), 25, 8, 8);
    }
  }
}

function proximaSecao() {
  secaoAtual = (secaoAtual + 1) % totalSecoes;
  
  // Atualiza a cor do botão dependendo do contexto da tela
  if (secaoAtual === 2) {
    scrollBotao.style('background-color', '#0066CC'); // Muda para azul na tela escura
    scrollBotao.html('Voltar ao Início');
  } else {
    scrollBotao.style('background-color', '#4B0082');
    scrollBotao.html('Próximo Tema');
  }
}

// Ajusta o site dinamicamente caso o usuário mude o tamanho do navegador
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scrollBotao.position(width / 2 - 60, height - 60);
}