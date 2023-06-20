
// Wap to reverse a String//

var student='ManojPriya'
var RESULT=student.split("").reverse().join("")
console.log(RESULT);

////////////////////////////////////////////////////

// Wap to check given String is Palindrome or Not

var student='racecar'// here we cannot give space b/w them i.e race car.
var RESULT=student.split("").reverse().join("")
/////////1st Method/////////////////////
// if(student==RESULT)
// {
//     alert("It is a Palindrome")
// }
// else
// {
//     alert("It is not a Palindrome")
// }
//////////2nd Method/////////////////////
console.log(student==RESULT ? "Palindrome":"Not a Palindrome");