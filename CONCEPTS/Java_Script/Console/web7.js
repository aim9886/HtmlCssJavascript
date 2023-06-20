// let obj={
//     id:1234,
//     name:"hemanth",
//     comp:"app",
//     place:{
//         karnataka:"bangalore",
//         andhra:"telangana",
//     }
// }
// console.log(obj.comp);
// console.log(obj.place="bangalore");
// console.log(obj.place);

// console.log(obj.place.karnataka);
// console.log(obj.place.name="dinga");
    // logic //////////
// const user={age:30};
// user.age=25;
// console.log(user.age);
    // logic //////////
// id=456789
// let obj={
//     id:1234,
//     name:"hemanth",
//     comp:"tyss",
//     place:()=>{
//         return this.id
//     }
// }
// console.log(obj.place());



// let obj={
//     id:1234,
//     name:"hemanth",
//     comp:"unicef",
//     place:{
//         karnataka:"bangalore",
//         andhra:"telangana",
//     }
// }
// console.log(obj);


// let x=Object.keys(obj)
// console.log(x);

// let y=Object.values(obj)
// console.log(y);

// let z=Object.entries(obj)
// console.log(z);

// let obj1=Object.seal(obj)
// console.log(obj1);
// console.log(obj1.dinga="dingi");
// console.log(obj1);
// console.log(obj1.name="kamakshi");
// console.log(obj1);


// let obj2=Object.freeze(obj)
// console.log(obj2);
// let w=Object.isFrozen(obj2)
// console.log(w);

// console.log(delete(obj.id));
// console.log(obj2.rocky="reena");
// console.log(obj2);

let x=([
    ["name","hemanth"],
    ["place","bangalore"]
]);

let z=Object.fromEntries(x)
console.log(z);
