let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    let un=document.querySelector("#un").value
    let pwd=document.querySelector("#pwd").value
    let div=document.querySelector("div")
    div.innerHTML=`username is ${un}, pass is ${pwd}`
    div.style.color="red"
    div.style.fontWeight="bolder"
})