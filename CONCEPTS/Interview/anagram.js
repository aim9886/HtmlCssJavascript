function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.replace(/ /g, "").toLowerCase();
    const cleanStr2 = str2.replace(/ /g, "").toLowerCase();

    // Check if the lengths of the cleaned strings are different
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }

    // Sort the characters in both strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
  }

  // Example usage:
  const string1 = "heart"; // listen // act // debit card
  const string2 = "earth"; // silent // cat // bad credit
  const result = areAnagrams(string1, string2);

  if (result) {
    console.log(`${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams.`);
  }


  // O/P: heart and earth are anagrams.
