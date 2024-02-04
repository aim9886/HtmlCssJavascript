// Count how many times 9 repeated in this given number.

var num = 9889459399;
var count = 0;

while(num!=0)
{
    let rem = num % 10;
    if(rem == 9)
    {
        count++
    }
    num = parseInt(num/10)
}
console.log(count);

// O/P: 5