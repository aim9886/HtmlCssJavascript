// Here's a simple example of recursion in JavaScript
// that calculates the factorial of a non-negative integer

function factorial(n) {
    // Base case
    if (n === 0) {
        return 1;
    }
    // Recursive case
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)



// Recursion in JavaScript is the same concept as recursion in any programming language.
//  It refers to the practice of a function calling itself to solve a problem,
//   typically with a base case to terminate the recursion.
//    JavaScript is a versatile language that supports recursion,
//     and it can be used to solve various problems, just like in other programming languages.



// JavaScript supports recursion in a similar manner to other programming languages,
//  but you should always be mindful of handling base cases properly to avoid infinite recursion
//   and stack overflow errors.







