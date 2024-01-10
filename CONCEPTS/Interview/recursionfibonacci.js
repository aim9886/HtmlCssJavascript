// recursion - fibonacci
// 1,1,2,3,5,8,13,21,.....

function fib(n) { // n start from 1
    if(n==1 || n==2) return 1;

    return fib(n-2) + fib(n-1)
}

const r = fib(6)
console.log(r); // O/P : 8