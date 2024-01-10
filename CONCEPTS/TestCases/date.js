// Function to decode the date from the decimal encoded form
function decodeDate(encodedDate) {
    // Extract year, month, and date using bit manipulation
    const year = (encodedDate >> 9) & 0x3FFF;
    const month = (encodedDate >> 5) & 0xF;
    const date = encodedDate & 0x1F;

    // Format the decoded date as a string
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const decodedDate = `${date} ${months[month - 1]} ${year}`;

    return decodedDate;
}

// Main function to process multiple test cases
function main() {
    const N = parseInt(readline()); // Number of test cases

    for (let i = 0; i < N; i++) {
        const encodedDate = parseInt(readline()); // Encoded date

        // Decode and output the date
        const decodedDate = decodeDate(encodedDate);
        console.log(decodedDate);
    }
}

// Sample input reading function
function readline() {
    // Replace this with your own input reading logic (e.g., reading from stdin)
    return input.shift();
}

// Sample input for testing
const input = [
    '5',
    '1024275',
    '1029012',
    '1017036',
    '903863',
    '802507',
];

// Initialize input for testing
let inputIndex = 0;

// Override readline for testing
function readline() {
    return input[inputIndex++];
}

// Call the main function to run the code
main();

// O/P:
// 19 August 2000
// 20 December 2009
// 12 June 1986
// 23 May 1765
// 11 June 1567
