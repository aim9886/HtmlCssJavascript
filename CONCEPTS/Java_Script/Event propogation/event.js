let x=document.getElementById("grand")
let y=document.getElementById("father")
let z=document.getElementById("son")

x.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("grand clicked");
})
y.addEventListener("click",(f)=>{
    f.stopPropagation()
    console.log("father clicked");
})
z.addEventListener("click",(g)=>{
    g.stopPropagation()
    console.log("son clicked");
})