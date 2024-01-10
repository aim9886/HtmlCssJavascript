// what is the output of this function

let count = 0; // outer count variable
function  printCount() {
    if (count == 0) {
        let count = 3; // inner count variable
        console.log('count1', count);
    }
    console.log('count2', count);
}
printCount();

// O/P: count1 3
//      count2 0