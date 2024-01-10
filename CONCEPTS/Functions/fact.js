// GEC (Global Execution Context)

function fact(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
}

// Actual program ends here

var result = fact(4);
console.log(result);

// O/P: 24
