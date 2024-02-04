// Array methods

// Write a JS program to implement a game between
// two players A and B. Each player can play maximum 3
// balls. Let the score iniƟally be zero. When player hits
// 3 or 5 then his score gets incremented by 1 or else no
// score. Display the winner.

function playGame() {
    const maxBalls = 3;
    let playerAScore = 0;
    let playerBScore = 0;

    for (let ball = 1; ball <= maxBalls; ball++) {
      // Simulate player A's move
      const playerAMove = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      if (playerAMove === 3 || playerAMove === 5) {
        playerAScore++;
      }

      // Simulate player B's move
      const playerBMove = Math.floor(Math.random() * 6) + 1;
      if (playerBMove === 3 || playerBMove === 5) {
        playerBScore++;
      }
    }

    // Display the final scores
    console.log("Player A's score:", playerAScore);
    console.log("Player B's score:", playerBScore);

    // Determine the winner
    if (playerAScore > playerBScore) {
      console.log("Player A wins!");
    } else if (playerBScore > playerAScore) {
      console.log("Player B wins!");
    } else {
      console.log("It's a tie!");
    }
  }

  // Run the game
  playGame();

//   O/P:

// 1)

// Player A's score: 3
// Player B's score: 0
// Player A wins!

// 2)

// Player A's score: 1
// Player B's score: 2
// Player B wins!


// In this example, both players played three balls each.
//  Player A's score is 1 because they hit 5 on one of their moves, and
//   Player B's score is 2 because they hit 3 and 5 on two different moves.
//    Therefore, Player B wins this particular run of the game.

// **Keep in mind that running the program multiple times may result in different outcomes due to
//  the random nature of the simulated moves.**