// Data Finder Program

// Sample dataset (an array of objects)
const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 22 },
  ];

  // Function to find data by a specific property and value
  function findDataByProperty(arr, property, value) {
    return arr.filter(item => item[property] === value);
  }

  // Example usage: Find users with age 28
  const result = findDataByProperty(data, "age", 28);
  console.log(result); // O/P: [ { id: 3, name: 'Charlie', age: 28 } ]
