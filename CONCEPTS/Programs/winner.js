// Array methods

// Write a JS program to implement a game between
// two players A and B. Each player can play maximum 3
// balls. Let the score iniƟally be zero. When player hits
// 3 or 5 then his score gets incremented by 1 or else no
// score. Display the winner.

// Function to play the game for a player
function playGame(player) {
    let score = 0;

    // Play 3 balls
    for (let i = 1; i <= 3; i++) {
        // Randomly decide whether the player hits 3 or 5
        const hit = Math.random() < 0.5 ? 3 : 5;

        // Check if the player hits 3 or 5 and increment the score accordingly
        if (hit === 3 || hit === 5) {
            score++;
        }

        console.log(`Player ${player} - Ball ${i}: ${hit}`);
    }

    return score;
}

// Play the game for Player A and B
const scoreA = playGame('A');
const scoreB = playGame('B');

// Determine the winner
let winner = '';
if (scoreA > scoreB) {
    winner = 'Player A';
} else if (scoreB > scoreA) {
    winner = 'Player B';
} else {
    winner = 'It\'s a tie!';
}

// Display the winner
console.log(`\nGame Over!\nWinner: ${winner}`);

// O/P:

// Player A - Ball 1: 3
// Player A - Ball 2: 5
// Player A - Ball 3: 3
// Player B - Ball 1: 5
// Player B - Ball 2: 3
// Player B - Ball 3: 5

// Game Over!
// Winner: It's a tie!
