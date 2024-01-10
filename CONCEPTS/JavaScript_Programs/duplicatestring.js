
  function findDuplicateStrings(strings) {
    var frequencyMap = {};
    var duplicateStrings = [];

    // Count the frequency of strings
    for (var i = 0; i < strings.length; i++) {
      var str = strings[i];
      frequencyMap[str] = (frequencyMap[str] || 0) + 1;
    }

    // Check for strings with frequency greater than 1
    for (var key in frequencyMap) {
      if (frequencyMap[key] > 1) {
        duplicateStrings.push(key);
      }
    }

    return duplicateStrings;
  }

  var stringArray = ["apple", "banana", "apple", "orange", "banana", "grape", "banana"];
  var duplicates = findDuplicateStrings(stringArray);
  console.log("Duplicate strings:", duplicates); // Output: ["apple", "banana"]

