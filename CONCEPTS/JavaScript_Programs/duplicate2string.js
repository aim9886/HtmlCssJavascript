function findCommonDuplicates(str1, str2) {
    var charMap = {};
    var commonDuplicates = [];

    // Count characters in the first string
    for (var i = 0; i < str1.length; i++) {
      var char = str1[i];
      charMap[char] = (charMap[char] || 0) + 1;
    }

    // Check characters in the second string against the character map
    for (var i = 0; i < str2.length; i++) {
      var char = str2[i];
      if (charMap[char] && charMap[char] > 0) {
        commonDuplicates.push(char);
        charMap[char]--;
      }
    }

    return commonDuplicates;
  }

  var string1 = "hello";
  var string2 = "world";

  var commonDuplicates = findCommonDuplicates(string1, string2);
  console.log("Common duplicate characters:", commonDuplicates); // Output: ["o", "l"]