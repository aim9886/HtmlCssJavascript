// let arr=[100,200,300,400,500]
// arr.forEach((x,y)=>{
//     console.log('this is my index: ${y} this is my index: ${x}');
// });

// for(arr1 in arr){
//     console.log(arr1);
// }

// for(arr2 of arr){
//     console.log(arr2);
// }

// let obj={
//     name:"hemanth",
//     age:24,
//     company:"app",
// }

// console.log(obj);
// console.log(obj.age);
// console.log(obj.place="bangalore");
// console.log(obj);

age=100
let obj={
    name:"hemanth",
    age:50,
    company:"wipro",
    place:function(){
        return this.age
    }
}

console.log(obj.place());