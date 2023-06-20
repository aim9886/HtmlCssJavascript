let x=document.getElementById("sub")
// let z=document.getElementById("disp")
let t=document.getElementById("tab")
t.style.border="3px solid black"
t.style.height="100px"
let td1=document.getElementsByTagName("td")
// td1.style.border="3px solid black"
let d1=document.getElementById("value1")
let d2=document.getElementById("value2")
x.addEventListener('click',(e)=>{
    // document.body.style.backgroundColor="grey"
    e.preventDefault();
    let a=document.getElementById("user").value
    console.log(a);
    let b=document.getElementById("psw").value
    console.log(b);
    d1.innerText=a
    d2.innerText=b
})