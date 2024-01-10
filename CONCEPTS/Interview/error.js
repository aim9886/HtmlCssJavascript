// A=4, B=0
// X=A/B =?
// what is the output of this program and show it in java and javascript

const A = 4;
const B = 0;

try {
    const X = A / B;
    console.log("Result of A / B:", X);
} catch (error) {
    console.log("Error: Division by zero is not allowed."); // Infinity
}

// O/P: Result of A / B: Infinity

// When you run this JavaScript code in a Node.js environment,
//  it will also throw an error and print "Error: Division by zero is not allowed."


// In both cases, you are attempting to divide a number (A) by zero (B),
//  which is undefined in mathematics and results in a runtime error in most programming languages.
//   To handle this situation, you can use exception handling, as shown in the code examples,
//    to gracefully handle the error and provide an appropriate message to the user.

// In Java program

// public class DivisionExample {
//     public static void main(String[] args) {
//         int A = 4;
//         int B = 0;

//         try {
//             int X = A / B;
//             System.out.println("Result of A / B: " + X);
//         } catch (ArithmeticException e) {
//             System.out.println("Error: Division by zero is not allowed.");
//         }
//     }
// }

// When you run this Java program, it will produce an ArithmeticException and print
//  "Error: Division by zero is not allowed."


// In both Java and JavaScript, attempting to divide by zero (0) will
//  result in an error or an exception. Division by zero is undefined
//   in mathematics and not allowed in most programming languages because
//    it leads to an arithmetic error.






