// function findDuplicates(arr) {
//     var frequencyMap = {};
//     var duplicates = [];

//     for (var i = 0; i < arr.length; i++) {
//       var element = arr[i];
//       if (frequencyMap[element]) {
//         if (frequencyMap[element] === 1) {
//           duplicates.push(element);
//         }
//         frequencyMap[element]++;
//       } else {
//         frequencyMap[element] = 1;
//       }
//     }

//     return duplicates;
//   }

//   var inputArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 7];
//   var duplicateElements = findDuplicates(inputArray);
//   console.log("Duplicate elements:", duplicateElements); // Output: [2, 3, 7]

  /////////////////////////////////////////////////////////////////////////////////////////////////
                            // (OR)   //

  // How to find duplicate elements in array in javascript.


  const arrNumber=[1,2,8,2,9,8]
  const duplicates=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
  console.log(duplicates);  // Output: [2, 8]
