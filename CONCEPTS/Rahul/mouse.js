let btn=document.querySelector("button")
btn.addEventListener("mouseover",()=>{
    let div=document.querySelector('div')
    div.innerText="Good Night";
    div.style.color="green"
    div.style.fontSize="25px"
    div.style.padding="20px"
    div.style.border="2px solid red"
    div.style.transition="2s"
})