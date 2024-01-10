// Here we have a object with a nested object and display that message in o/p:

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: "Important Info",
            },
        },
    },
};

console.log('obj',obj);
console.log(JSON.stringify(obj, null, 2));

// O/P:

// obj { a: 1, b: { c: 2, d: { e: 3, f: [Object] } } }
// {
//   "a": 1,
//   "b": {
//     "c": 2,
//     "d": {
//       "e": 3,
//       "f": {
//         "g": "Important Info"
//       }
//     }
//   }
// }