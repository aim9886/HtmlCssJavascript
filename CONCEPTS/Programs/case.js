// Convert input 'aPPle' output 'AppLE' convert uppercase character to lowercase character vice versa

const input = 'MaDhUrYa'
const output = invertCase(input)
console.log(output);

function invertCase(inputString)
{
    return inputString
    .split('')
    .map( char =>
        {
            if(char === char.toUpperCase())
            {
                return char.toLowerCase()
            }
            else
            {
                return char.toUpperCase()
            }
        })
        .join(' ')
}


// O/P: A p p L E
// H e M a N t H => h E m A n T h
// m A d H u R y A => MaDhUrYa