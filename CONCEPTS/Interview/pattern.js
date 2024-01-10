function generatePattern(rows) {  // here rows are parameter
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= rows; j++) {
        if (j === rows - i + 1 || j === rows || i === 1) {
          row += "*";
        } else {
          row += "-";
        }
      }
      console.log(row);
    }
  }

  generatePattern(5);   // here 5 is argument


 // O/P: - - - - *
 //      - - - * *
 //      - - * - *
 //      - * - - *
 //      * - - - *
