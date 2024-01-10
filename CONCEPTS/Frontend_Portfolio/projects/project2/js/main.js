// JavaScript for Project 2: Task Management Web App

// Sample data (you would replace this with database integration)
let tasks = [];

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p>No tasks found.</p>';
        return;
    }

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to handle task deletion
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Event listener for login form submission (dummy authentication)
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Dummy authentication (replace with actual authentication logic)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'demo' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }

        loginForm.reset();
    });
}

// Event listener for registration form submission (dummy registration)
const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Dummy registration (replace with actual registration logic)
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        alert(`Registration successful! Username: ${newUsername}, Password: ${newPassword}`);
        registerForm.reset();
    });
}

// Event listener for task deletion
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-button')) {
        const index = e.target.getAttribute('data-index');
        deleteTask(index);
    }
});

// Initial display of tasks
displayTasks();
