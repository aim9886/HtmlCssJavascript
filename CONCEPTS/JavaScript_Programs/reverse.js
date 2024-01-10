// const str = "Hello World"
// let res = str.split(' ').reverse().join(' ')  // just give space b/w single colon
// console.log(res);  // O/P: World Hello

///////////////////////////////////////////////////////////////////////////////////


// const str = "Hello World"
// let res = str.split('').reverse().join('')    // just remove space b/w single colon
// console.log(res);    // O/P: dlroW olleH

////////////////////////////////////////////////////////////////////////////////////


const str = "Hello World"
let rev = str.split(' ')

for(let i=0; i<rev.length; i++)
{
    rev[i] = rev[i].split('').reverse().join('')
}
let output = rev.join(' ')
console.log(output);   // O/P: olleH dlroW


/////////////////(OR)//////////////////////////////////////////////
      // Another method of above program

// function reverseWords(input) {
//     // Split the input string into an array of words
//     var words = input.split(' ');

//     // Reverse each word in the array
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].split('').reverse().join('');
//     }

//     // Join the reversed words back into a single string
//     var output = words.join(' ');

//     return output;
//   }

//   var input = "Hello World";
//   var reversedOutput = reverseWords(input);
//   console.log(reversedOutput); // Output: "olleH dlroW"
