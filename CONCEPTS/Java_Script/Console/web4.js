// console.log("start");
// var a=20;
// let b=30;
// console.log(b);
// console.log(a);
// function x() {
//     let w=300;
//     function y() {
//         console.log(w);
//         var z=3000;
//         console.log(z);
//     }
//     y()
// }
// x()

/* ***************************************** */


console.log("start");
let a=10;
let b=20;
console.log(a,b);
function oneFunction() {
    let c=30;
    let d=40;
    function twoFunction() {
        let e=50;
        console.log(c);
        console.log(d);
        function threeFunction() {
            console.log(e);
        }
        return threeFunction;
    }
    return twoFunction;
}
oneFunction()();