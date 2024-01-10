// Targeting any array element in given array and it should return the same value by adding the indexes to be same

let arr = [1, 2, 3, 4];// Indexes is 0=>1, 1=>2, 2=>3, 3=>4
let targetValue = 3;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetValue) {
      console.log(`Indexes ${i} and ${j} result in the value 3.`);
      break; // Optional: If you only want to find the first pair, you can break out of the loop here.
    }
  }
}

// O/P: Indexes 0 and 1 result in the value 3. => targeting the value 3

// O/P: Indexes 0 and 2 result in the value 4. => targeting the value 4