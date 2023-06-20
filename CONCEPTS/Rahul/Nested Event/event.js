let Grandparent=document.getElementById('gp')
let parent=document.getElementById('pt')
let child=document.getElementById('cd')
Grandparent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Grandparent clicked");
})
parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent clicked");
})
child.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clicked");
})