let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if ((player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
        (player === 'spock' && (computer === 'scissors' || computer === 'rock'))) {
        return 'player';
    } else {
        return 'computer';
    }
}

function play(playerChoice) {
    const computerChoice = getRandomChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    let message = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

    if (winner === 'player') {
        playerScore++;
        playerWins++;
        message += "You win!";
    } else if (winner === 'computer') {
        computerScore++;
        computerWins++;
        message += "Computer wins!";
    } else {
        message += "It's a draw!";
    }

    updateDisplay(message);
    updateScoreboard();
}

function calculateWinPercentage() {
    const totalGames = playerWins + computerWins;
    return totalGames === 0 ? 0 : ((playerWins / totalGames) * 100).toFixed(2);
}

function updateScoreboard() {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('player-score-result').innerText = playerScore;
    document.getElementById('computer-score-result').innerText = computerScore;
    document.getElementById('win-ratio').innerText = `Wins: ${playerWins} - Losses: ${computerWins}`;
    document.getElementById('win-percentage').innerText = `Win Percentage: ${calculateWinPercentage()}%`;
}

function updateDisplay(message) {
    document.getElementById('message').innerText = message;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerWins = 0;
    computerWins = 0;
    updateDisplay('');
    updateScoreboard();
}
