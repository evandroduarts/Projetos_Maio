const tabuleiroJogo = document.getElementById("gameBoard");
const exibicaoStatus = document.getElementById("status");
const botaoReiniciar = document.getElementById("resetButton");
const botaoIniciar = document.getElementById("startButton");
const alternadorTema = document.getElementById("themeToggle");


let estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";
let jogoAtivo = false;
let jogoIniciado = false;


const mensagemVitoria = () => `Jogador ${jogadorAtual} venceu!`;
const mensagemEmpate = () => "Jogo terminou em empate!";
const mensagemVezJogadorAtual = () => `Vez do jogador ${jogadorAtual}`;


const condicoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function inicializarTabuleiro() {
  if (!jogoIniciado) {
    tabuleiroJogo.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      cell.addEventListener("click", lidarComCliqueNaCelula);
      tabuleiroJogo.appendChild(cell);
    }
    estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorAtual = "X";
    jogoAtivo = true;
    jogoIniciado = true;
    exibicaoStatus.textContent = mensagemVezJogadorAtual();
    botaoReiniciar.style.display = "none";
    botaoIniciar.style.display = "none"; // 👈 Aqui escondemos o botão
  }
}


function lidarComCliqueNaCelula(evento) {
  const index = evento.target.dataset.index;
  if (!jogoAtivo || estadoTabuleiro[index] !== "") return;


  estadoTabuleiro[index] = jogadorAtual;
  evento.target.textContent = jogadorAtual;


  if (verificarVitoria()) {
    exibicaoStatus.textContent = mensagemVitoria();
    jogoAtivo = false;
    botaoReiniciar.style.display = "inline-block";
  } else if (!estadoTabuleiro.includes("")) {
    exibicaoStatus.textContent = mensagemEmpate();
    jogoAtivo = false;
    botaoReiniciar.style.display = "inline-block";
  } else {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    exibicaoStatus.textContent = mensagemVezJogadorAtual();
  }
}


function verificarVitoria() {
  return condicoesVitoria.some(combinacao => {
    const [a, b, c] = combinacao;
    return (
      estadoTabuleiro[a] &&
      estadoTabuleiro[a] === estadoTabuleiro[b] &&
      estadoTabuleiro[a] === estadoTabuleiro[c]
    );
  });
}


function reiniciarJogo() {
  estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];
  jogadorAtual = "X";
  jogoAtivo = true;
  exibicaoStatus.textContent = mensagemVezJogadorAtual();
  const celulas = document.querySelectorAll(".cell");
  celulas.forEach(cell => (cell.textContent = ""));
  botaoReiniciar.style.display = "none";
}


// Alternador de tema claro/escuro
alternadorTema.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});


// Eventos de botão
botaoIniciar.addEventListener("click", inicializarTabuleiro);
botaoReiniciar.addEventListener("click", reiniciarJogo);






