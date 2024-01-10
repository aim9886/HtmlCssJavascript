const numbers=[1,2,3,8,9,12,16]

const even=numbers.filter((item)=>{
    return item%2===0
})

const odd=numbers.filter((item)=>{
    return item%2==!0
})
console.log('even numbers',even);

console.log('odd numbers',odd);

// O/P: even numbers [ 2, 8, 12, 16 ]
//      odd numbers [ 1, 3, 9 ]