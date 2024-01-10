// Function to calculate the total number of ways people can be accommodated
function calculateWays(n) {
    // Calculate and return 2^(n-1) % 98777
    return BigInt(2 ** (n - 1) % 98777);
}

// Main function to process multiple test cases
function main() {
    const K = parseInt(readline()); // Number of test cases

    for (let i = 0; i < K; i++) {
        const n = parseInt(readline()); // Size of the palace

        // Calculate and output the result % 98777
        const result = calculateWays(n);
        console.log(result.toString());
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
    '3',
];

// Initialize input for testing
let inputIndex = 0;

// Override readline for testing
function readline() {
    return input[inputIndex++];
}

// Call the main function to run the code
main();
