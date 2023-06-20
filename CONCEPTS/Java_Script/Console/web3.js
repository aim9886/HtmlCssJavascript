// console.log("start");
// var b=200;
// let c=300;
// console.log(c);
// console.log(b);
// function mag() {
//     let b=100;
//     var a=500;
//     const x=1000;
//     console.log(x);
//     console.log(a);
//     console.log(b);
// }
// mag()
// const z=2000;
// console.log(z);

/* *************higher order function********* */

function higherOrder(a,b,task){
   let x=task(a,b)
   return x
}

let add=higherOrder(20,30,function(a,b){
return a+b
})
console.log(add);

let sub=higherOrder(100,500,function(a,b){
    return a-b;
})
console.log(sub);