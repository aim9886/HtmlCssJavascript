function isPalindrome(str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr = str.replace(/ /g, "").toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
  }

  // Example usage:
  const palindromeString = "racecar"; // Change this string to test different values
  const result = isPalindrome(palindromeString);

  if (result) {
    console.log(`"${palindromeString}" is a palindrome.`);
  } else {
    console.log(`"${palindromeString}" is not a palindrome.`);
  }


  // O/P: "racecar" is a palindrome.
