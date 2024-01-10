// ways to climb stairs using 1 or 2 steps


function solution(stairs){
    let prev1 = 1;
    let prev2 = 1;
    let current;

    for(let i = 2; i <= stairs; i++){
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
}

const stairs = 7;
const waysToClimb = solution(stairs);
console.log(`Number of ways to climb a ${stairs}-step staircase: ${waysToClimb}`);

// O/P: Number of ways to climb a 7-step staircase: 21
// O/P: Number of ways to climb a 8-step staircase: 34 // once check in chat-gpt


//                  (OR)                                           //

// const stairs = 7; // Answer is 21

// function solution(stairs){
//     let prev1 = 1;
//     let prev2 = 1;
//     let current;

//     for(let i=2; i<=stairs; i++){
//         current = prev1 + prev2;
//         prev1 = prev2;
//         prev2 = current;
//     }

//     return prev2
// }

// console.log(solution(stairs));