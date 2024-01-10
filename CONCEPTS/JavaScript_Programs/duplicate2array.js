function findCommonDuplicates(arr1, arr2) {
    var frequencyMap = {};
    var commonDuplicates = [];

    // Count the elements in the first array
    for (var i = 0; i < arr1.length; i++) {
      var element = arr1[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }

    // Check elements in the second array against the frequency map
    for (var i = 0; i < arr2.length; i++) {
      var element = arr2[i];
      if (frequencyMap[element] && frequencyMap[element] > 0) {
        commonDuplicates.push(element);
        frequencyMap[element]--;
      }
    }

    return commonDuplicates;
  }

  var array1 = [1, 2, 2, 3, 4, 5];
  var array2 = [2, 2, 3, 3, 5, 6];

  var commonDuplicates = findCommonDuplicates(array1, array2);
  console.log("Common duplicate elements:", commonDuplicates); // Output: [2, 2, 3, 5]
