let studentForm = document.getElementById('studentForm');
let studentList = document.getElementById('studentList');
let students = [];

studentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let grade = document.getElementById('grade').value;

  let student = {
    name: name,
    age: age,
    grade: grade
  };

  students.push(student);
  displayStudents();
  clearForm();
});

function displayStudents() {
  studentList.innerHTML = '';
  students.forEach(function(student, index) {
    let card = document.createElement('div');
    card.classList.add('student-card');
    card.innerHTML = `
      <h3>${student.name}</h3>
      <p>Age: ${student.age}</p>
      <p>Grade: ${student.grade}</p>
      <button onclick="editStudent(${index})">Edit</button>
      <button onclick="deleteStudent(${index})">Delete</button>
    `;
    studentList.appendChild(card);
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';
}

function editStudent(index) {
  let student = students[index];
  document.getElementById('name').value

 = student.name;
  document.getElementById('age').value = student.age;
  document.getElementById('grade').value = student.grade;
  students.splice(index, 1);
  displayStudents();
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

displayStudents();