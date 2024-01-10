function reverseString(input) {
    // Split the string into an array of characters, reverse the array, and join the characters back into a string
    return input.split('').reverse().join('');
  }

  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: "!dlroW ,olleH"
