var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
// O/P: 1undefined

//return a promise which will return a function which is resolving which is passed as a argument that

// Shallow copy and Deep copy

// let arr = [1,2,3];
// let arr1;
// arr1 = [...arr];
// arr1.push(5)
// console.log(arr, arr1);
//O/P: [ 1, 2, 3 ] [ 1, 2, 3, 5 ],
//Here [1, 2, 3 ] is Deep copy and,
//[1, 2, 3, 5] is Shallow copy