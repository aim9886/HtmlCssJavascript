// Function to determine the winner of a single test case
function findWinner(N, startPlayer) {
    // If N is odd, the player who starts wins
    if (N % 2 === 1) {
        if (startPlayer === 0) {
            return "Airborne wins.";
        } else {
            return "Pagfloyd wins.";
        }
    } else {
        // If N is even, the player who doesn't start wins
        if (startPlayer === 0) {
            return "Pagfloyd wins.";
        } else {
            return "Airborne wins.";
        }
    }
}

// Main function to process multiple test cases
function main() {
    const t = parseInt(readline()); // Number of test cases

    for (let i = 0; i < t; i++) {
        const input = readline().split(' ');
        const N = parseInt(input[0]);
        const startPlayer = parseInt(input[1]);

        const result = findWinner(N, startPlayer);
        console.log(result);
    }
}

// Sample input reading function
function readline() {
    // Replace this with your own input reading logic (e.g., reading from stdin)
    return input.shift();
}

// Sample input for testing
const input = [
    '1',
    '1 0',
];

// Initialize input for testing
let inputIndex = 0;

// Override readline for testing
function readline() {
    return input[inputIndex++];
}

// Call the main function to run the code
main();
