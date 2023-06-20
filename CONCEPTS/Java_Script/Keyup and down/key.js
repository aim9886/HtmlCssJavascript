////////////////Key up and down////////////////////////////////////////

// let x=document.getElementById("nan")
// console.log(x);
// x.addEventListener("keydown",()=>{
//     document.body.style.backgroundColor="red"
// })
// x.addEventListener("keyup",()=>{
//     document.body.style.backgroundColor="blue"
// })

// x.addEventListener("keydown",()=>{
//     let random=Math.floor(Math.random()*2435678).toString(15)
//     console.log(random);
//     document.body.style.backgroundColor=`#$(random)`
// })

///////////////////Mouse Over and Mouse Out/////////////////////////////////

let x=document.getElementById("man")
x.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="red"
    x.style.borderRadius="30px"
})
x.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor="blue"
    x.style.borderRadius="30px"
})
