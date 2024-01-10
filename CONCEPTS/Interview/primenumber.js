function isPrime(number) {
    // Check for numbers less than 2
    if (number <= 1) {
      return false;
    }

    // Check for divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // It has a divisor other than 1 and itself
      }
    }

    return true; // It's a prime number
  }

  // Example usage:
  const num = 17; // Change this number to test different values
  const result = isPrime(num);

  if (result) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }


  // O/P: 17 is a prime number.
  // O/P: 27 is not a prime number.  18 is not a prime number. 19 is a prime number.


//   Here is a list of prime numbers from 1 to 100:

//   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

//   These are the prime numbers within the range of 1 to 100.
//   Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1
//   and themselves. The list above includes all the prime numbers in this specific range.





