function extractNumbers(text) {
    // Use a regular expression to match numbers in the text
    const regex = /\d+/g;
    const numbers = text.match(regex);
  
    // Convert the matched strings to numbers and remove duplicates
    const uniqueNumbers = [...new Set(numbers.map(Number))];
  
    return uniqueNumbers;
  }
  
  function findSecondLargestAndSmallest(numbers) {
    if (numbers.length < 2) {
      return "Not enough numbers to find second largest and second smallest.";
    }
  
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    // Find the second smallest and second largest numbers
    const secondSmallest = numbers[1];
    const secondLargest = numbers[numbers.length - 2];
  
    return [secondSmallest, secondLargest];
  }
  
  const text = "I have 2 cats and 3 dogs, and my phone number is 555-123-4567.";
  const extractedNumbers = extractNumbers(text);
  
  if (extractedNumbers.length === 0) {
    console.log("No numbers found in the text.");
  } else {
    const [secondSmallest, secondLargest] = findSecondLargestAndSmallest(extractedNumbers);
    console.log("Extracted Numbers:", extractedNumbers);
    console.log("Second Smallest Number:", secondSmallest);
    console.log("Second Largest Number:", secondLargest);
  }
  
// O/P:

// Extracted Numbers: (5) [2, 3, 123, 555, 4567]
// Second Smallest Number: 3
// Second Largest Number: 555


// Question - 4

// You are tasked with processing a text document that contains a mix of letters, numbers, and special 
// characters.
// Your goal is to extract all the numbers from the text while removing all letters and special characters. 
// For example, given the text: "I have 2 cats and 3 dogs, and my phone number is 555-123-4567," the 
// function should return [2, 3, 555, 123, and 4567]. 
// Find the second largest and second smallest number from the extracted array