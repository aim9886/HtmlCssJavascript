function customFlatten(arr) {
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat = flat.concat(customFlatten(arr[i]));
      } else {
        flat.push(arr[i]);
      }
    }
    return flat;
  }

  // Example usage:
  const multiDimArray = [[1, 2, 3], [4, [5, 6]], [7, 8]];
  const flatArray = customFlatten(multiDimArray);
  console.log(flatArray);

// O/P:
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]


// const multiDimArray = [[1, 2, 3], [4, [5, 6]], [7, 8]];
// const flatArray = flatten(multiDimArray);
// console.log(flatArray);
