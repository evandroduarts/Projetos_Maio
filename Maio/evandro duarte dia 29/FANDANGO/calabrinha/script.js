let playerScore = 0;
let computerScore = 0;

function play(playerMove) {
    const moves = ['pedra', 'papel', 'tesoura'];
    const computerMove = moves [Math.floor(Math.random() * 3)];
    document.getElementById('playerChoice').textContent
    =`🦸 Jogador escolheu: ${emoji(playerMove)}`;
    document.getElementById('computerChoice').textContent
    = `🖥️ Computador escolheu: ${emoji(computerMove)}`;

    const result = getWinner(playerMove, computerMove);
    document.getElementById('winner').textContent = result;


    if (result === 'Você venceu!') {
        playerScore++;
    } else if (result === 'Você perdeu!') {
        computerScore++;
    }
document.getElementById('playerScore').textContent
= playerScore;
document.getElementById('computerScore').textContent
= computerScore;
document.getElementById(',choice').forEach(btn =
    btn.classList.remove('selected'));

    const playerButtons = document.querySelectorAll
    ('player-side .choice');
    const computerButtons = document.querySelectorAll
    ('.computer-side .choice');
    const playerIndex = moves.indexOf(playerMove);
    const computerIndex = moves.indexOf(computerMove);
    if (playerButtons [playerIndex]) playerButtons
    [playerIndex].classList.add('selected');
    if (computerButtons[computerIndex]) playerButtons
    [playerIndex].
)