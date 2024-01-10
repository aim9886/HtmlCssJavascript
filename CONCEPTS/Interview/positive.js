// Write a function that checks if a given number is positive, negative or zero.

// Using if-else statements

function checkNumber(n) {
    if(n > 0) {
        return "Positive";
    }
    else if (n < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-5));
console.log(checkNumber(0));