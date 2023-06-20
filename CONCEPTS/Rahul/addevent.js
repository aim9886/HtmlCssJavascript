let btn=document.querySelectorAll('button')
let btn1=btn[0];
let btn2=btn[1];
btn1.addEventListener("click",()=>{
    document.body.style.backgroundColor="Green"
})
btn2.addEventListener("click",()=>{
    document.body.style.backgroundColor="Red"
})