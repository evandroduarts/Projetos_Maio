const tabuleiroJogo = document.getElementyById("gameBoard");
const exibicaoStatus = document.getElementyById("status");
const botaoReiniciar = document.getElementById("startButton");
const botaoIniciar = document.getElementById("startButton");
const alternadorTema = document.getElementyById("themeToggle");

let estadoTabuleiro = ['','','','','','','','',','];
let jogadorAtual = 'X';
let jogoAtivo = false;
let jogoIniciado = false;

const mensagemVitoria = () => 'jogador ${jogadorAtual} venceu!';
const mensagemEmpate = () => 'jogo terminou em empate!';
const mensagemVemJogadorAtual = () => 'vez do jogador ${jogadorAtual}';

const condicoesVitoria = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7].
    [2 ,5, 8],
    [2, 4 ,6],
];

function inicializarTabueleiro() {
    if (!jogoIniciado) {
        for (let i = 0; i < 9; i++)
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener
            ('click', lidarComCliqueNaCelula);
            tabuleiroJogo.appendChild(cell);
    }
    jogoIniciado= true;
} else { // se o tabuleiro já
  }

}