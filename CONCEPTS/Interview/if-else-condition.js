// Example 1: Using if-else to check if a number is positive or negative

function checkNumberSign(number) {   // here number is an argument
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

  checkNumberSign(5);  // Output: The number is positive.
  checkNumberSign(-3); // Output: The number is negative.
  checkNumberSign(0);  // Output: The number is zero.

///////////////////////////////////////////////////////////////////////////////////////

// Example 2: Using if-else to determine if a user is eligible to vote

  function checkVotingEligibility(age) {
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  }

  checkVotingEligibility(20); // Output: You are eligible to vote.
  checkVotingEligibility(15); // Output: You are not eligible to vote.


//   In these examples:

// In the first example, the checkNumberSign function takes a number as an argument
//  and uses if-else to determine whether the number is positive, negative, or zero.
//   Depending on the condition met, it prints an appropriate message.

// In the second example, the checkVotingEligibility function checks
//  if a person is eligible to vote based on their age. If the age is 18 or higher,
//   it prints a message saying the person is eligible; otherwise, it prints a message
//    saying they are not eligible.




//   The if-else statement allows you to specify different code blocks to execute
//   based on the condition's outcome. You can also nest if-else statements within each other
//   for more complex conditional logic.
