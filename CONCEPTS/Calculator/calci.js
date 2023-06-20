let string="";
let buttons=document.querySelectorAll('#button')

Array.from(buttons).forEach((btn)=>{
    var op=document.querySelector('#op')

    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="=")
    {
    string=eval(string);
    op.value=string;
}
else if(e.target.innerHTML=="AC")
{
    string=""
    op.value=string;
}
else
{
    console.log(e.target);
    string=string+e.target.innerHTML;
    op.value=string;
}

    })
})