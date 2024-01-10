// program to find how many times the words are repeated

let data = "cabbac";
let charCount = {};

for (let i = 0; i < data.length; i++) {
  let char = data[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}

console.log(charCount);


// O/P: { c: 2, a: 2, b: 2 } // repeating each words 2 times