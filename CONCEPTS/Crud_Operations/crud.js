let crudForm = document.getElementById('crudForm');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let dataContainer = document.getElementById('dataContainer');

crudForm.addEventListener('submit', function (event) {
  event.preventDefault();
  createRecord();
});

let records = [];

function createRecord() {
  let name = nameInput.value;
  let email = emailInput.value;
  let record = { name, email };
  records.push(record);
  displayRecords();
  clearForm();
}

function displayRecords() {
  dataContainer.innerHTML = '';
  for (let i = 0; i < records.length; i++) {
    let record = records[i];
    let recordElement = document.createElement('div');
    recordElement.innerHTML = `<strong>Name:</strong> ${record.name}<br><strong>Email:</strong> ${record.email}`;
    recordElement.classList.add('record');
    dataContainer.appendChild(recordElement);
  }
}

function clearForm() {
  nameInput.value = '';
  emailInput.value = '';
}