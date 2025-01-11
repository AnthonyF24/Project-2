let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;
let drawCount = 0; // New variable to track draws
let gamesPlayed = 0;
const maxGames = 10;

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
    if (gamesPlayed >= maxGames) {
        updateDisplay("Game limit reached. Please reset to play again.");
        showFinalMessage();
        return;
    }

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
        drawCount++;
        message += "It's a draw!";
    }

    gamesPlayed++;
    updateDisplay(message);
    updateScoreboard();

    if (gamesPlayed === maxGames) {
        showFinalMessage();
    }
}

function calculateWinPercentage() {
    const totalGames = playerWins + computerWins;
    return totalGames === 0 ? 0 : ((playerWins / totalGames) * 100).toFixed(2);
}

function updateScoreboard() {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-count').innerText = drawCount; // Display draw count
    document.getElementById('win-ratio').innerText = `Wins: ${playerWins} - Losses: ${computerWins} - Draws: ${drawCount}`;
    document.getElementById('win-percentage').innerText = `Win Percentage: ${calculateWinPercentage()}%`;
    document.getElementById('games-played').innerText = `Games Played: ${gamesPlayed}`;
}

function updateDisplay(message) {
    document.getElementById('message').innerText = message;
}

function showFinalMessage() {
    if (playerWins > computerWins) {
        alert("Congratulations, You Won!");
    } else {
        alert("Hard Luck, Computer Wins!");
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerWins = 0;
    computerWins = 0;
    drawCount = 0; // Reset draw count
    gamesPlayed = 0;
    updateDisplay('');
    updateScoreboard();
}

function showFinalMessage() {
    const finalMessage = document.getElementById('final-message');
    if (playerWins > computerWins) {
        finalMessage.innerText = "Congratulations, You Won!";
    } else {
        finalMessage.innerText = "Hard Luck, Computer Wins!";
    }
    document.getElementById('game-end-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('game-end-modal').style.display = 'none';
}


