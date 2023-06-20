// let x=document.getElementById("rex")
// x.addEventListener('click',()=>{
//     document.body.style.backgroundColor="red"
//     x.style.border="2px solid yellow"
//     x.style.height="100px"
// })


let x=document.getElementById("rex")
let q=document.getElementById("nan")
x.addEventListener('click',(e)=>{
    // document.body.style.backgroundColor="red"
    e.preventDefault()
    let x=document.getElementById("user").value
    console.log(x);
    let z=document.getElementById("psw").value
    console.log(z);
    q.innerText=`this is my name ${x} this is my password ${z}`   // Use (``)tild 
    q.style.border="5px solid red"
})