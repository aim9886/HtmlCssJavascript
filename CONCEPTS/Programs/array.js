// Given array
let arr = [
    { id: 1, name: "pushpa" },
    { id: 2, name: "bbb" },
    { id: 3, name: "hhh" }
  ];

  // i) How to add another object to the array ?
  let newObj1 = { id: 4, name: "newName" };
  arr.push(newObj1);

  console.log("Array after adding a new object:", arr);

  // ii) Use a function and variables to add an object
  function addObjectToArray(id, name) {
    let newObj2 = { id: id, name: name };
    arr.push(newObj2);
  }

  addObjectToArray(5, "anotherName");
  console.log("Array after adding another object using a function:", arr);

  // iii) Condition if Id already exists then replace old name with new name.
  function updateNameById(id, newName) {
    let existingObj = arr.find(item => item.id === id);

    if (existingObj) {
      existingObj.name = newName;
    } else {
      console.log("Object with ID", id, "not found.");
    }
  }

  updateNameById(2, "newBBB");
  console.log("Array after updating name for ID 2:", arr);


  // O/P:

//   Array after adding a new object: [
//     { id: 1, name: 'pushpa' },
//     { id: 2, name: 'bbb' },
//     { id: 3, name: 'hhh' },
//     { id: 4, name: 'newName' }
//   ]
//   Array after adding another object using a function: [
//     { id: 1, name: 'pushpa' },
//     { id: 2, name: 'bbb' },
//     { id: 3, name: 'hhh' },
//     { id: 4, name: 'newName' },
//     { id: 5, name: 'anotherName' }
//   ]
//   Array after updating name for ID 2: [
//     { id: 1, name: 'pushpa' },
//     { id: 2, name: 'newBBB' },
//     { id: 3, name: 'hhh' },
//     { id: 4, name: 'newName' },
//     { id: 5, name: 'anotherName' }
//   ]
