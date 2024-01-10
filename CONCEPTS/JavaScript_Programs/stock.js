// Best Time To Buy and Sell a Stock

const stocks = [7, 1, 5, 3, 6, 4]; // Answer is 5

function solution(stocks){

    let profit = 0;
    let min = stocks[0];

    for(let i=0; i<stocks.length; i++){
        min = Math.min(min, stocks[i]);
        profit = Math.max(
            profit, stocks[i]-min
        )
    }

    return profit;

}

console.log(solution(stocks));