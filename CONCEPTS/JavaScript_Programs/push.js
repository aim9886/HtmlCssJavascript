let arr=[1,2,3,4,5,6]
arr.map(x=>{
    if(x%2==0){
        arr.push(x)
    }
})
console.log(arr);