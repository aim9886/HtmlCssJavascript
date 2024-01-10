// Destructuring is also useful in function parameters:

const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);


function printFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
}

  printFullName(person); // Output: John
  //                                Doe
  //                                John Doe
