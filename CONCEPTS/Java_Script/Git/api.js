// let x=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("iam dingi")
//         },5000)
//     })
// }

// async function z(){
//     console.log("iam first");
//     let rex= await x()
//     console.log(rex);
//     console.log("iam last");
//     console.log("iam waiting");
// }
// z()


window.fetch("https://api.github.com/users")
.then(x=>x.json()).then(y=>{console.log(y);})

let obj=["car","bike","plane","metro"]
console.log(obj);
let x=JSON.stringify(obj)
console.log(x);
let z=JSON.parse(x)
console.log(z);