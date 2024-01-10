// const arr = [1, 2, 3];
// console.log(arr.map(x=>x*2)); // O/P: [2,4,6]

/////////////////////////////////////////////////////////////

// const arr = [1,2,3];    // if you take arr=[4,5,6] and the o/p will be 15
// const sum = arr.reduce((acc,val)=>acc+val,0);
// console.log(sum);     // O/P : 6

/////////////////////////////////////////////////////////////////

// const obj = {a:1 , b:2};
// const newobj = {...obj , b:3};
// console.log(newobj);  // O/P: { a: 1, b: 3 }

///////////////////////////////////////////////////////////////////

// console.log(1 + + "2" + "2");  // O/P: 32

/////////////////////////////////////////////////////////////////////

// const obj = {
//     a: 1,
//     b:{
//         c: 2
//     }
// };
// const {b: {c}}= obj;
// console.log(a, b, c);  // O/P: 1 {c:2} 2

////////////////////////////////////////////////////////////////////////

// const a=5;
// const b=10;
// const result = `Fifteen is ${a+b} and not ${2*a+b}.`; //  a+b = 5+10 = 15 & 2*5+10 = 2*5=10 => 10+10=20.
// console.log(result);  // O/P: Fifteen is 15 and not 20.

///////////////////////////////////////////////////////////////////////////

let x = 10;
let y = x++;

console.log(x,y); // O/P : 11 10


// Let's break down the code step by step:

// const x = 10;: This creates a constant variable x and assigns the value 10 to it.

// const y = x++;: This line assigns the current value of x to y and then increments the value of x by 1.

// console.log(x, y);: This logs the values of x and y to the console.

// Now, let's see how the code executes:

// x is initially set to 10.
// y is assigned the current value of x, which is 10, and then x is incremented to 11.

// After the execution, x has the value 11, and y has the value 10.

////////////////////////////////////////////////////////////////////////////

