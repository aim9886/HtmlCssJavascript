let promise=new Promise((resolve,reject)=>{
    let roomCleaned=false;
    if(roomCleaned){
        resolve("yes room cleaned")
    }else{
        reject("no room not cleaned")
    }
})
console.log(promise);
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("yes finally it is done");
})

let z=new Promise((x,y)=>{
    if(Mathrandom()>0.2)
    {
        x("yes mail sent")
    }else{
        y("no mail not sent")
    }
})
console.log(z);
z.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

let a=new Promise((x,y)=>{
    setTimeout(()=>{
        x("Iam first")
    },2000)
    setTimeout(()=>{
        y("iam last")
    },2000)
})

console.log(a);
a.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})