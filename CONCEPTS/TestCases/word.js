// Function to convert a number from word form to digit form
function wordToDigit(word) {
    const wordsToDigits = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15,
        "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,
        "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60,
        "seventy": 70, "eighty": 80, "ninety": 90, "hundred": 100,
        "thousand": 1000,
    };

    const words = word.split(" ");
    let result = 0;
    let currentNumber = 0;

    for (const word of words) {
        const number = wordsToDigits[word];

        if (word === "hundred") {
            currentNumber *= number;
        } else if (word === "thousand") {
            result += currentNumber * number;
            currentNumber = 0;
        } else {
            currentNumber += number;
        }
    }

    result += currentNumber;
    return result;
}

// Main function to process multiple test cases
function main() {
    const t = parseInt(readline()); // Number of test cases

    for (let i = 0; i < t; i++) {
        const word = readline(); // Number in word form

        // Convert and output the number in digit form
        const digitForm = wordToDigit(word);
        console.log(digitForm);
    }
}

// Sample input reading function
function readline() {
    // Replace this with your own input reading logic (e.g., reading from stdin)
    return input.shift();
}

// Sample input for testing
const input = [
    '3',
    'one hundred twenty three',
    'thirty four thousand one hundred eight',
    'eleven',
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
// 123
// 34108
// 11
