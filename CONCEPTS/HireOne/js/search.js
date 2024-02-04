const searchInput = document.getElementById("searchInput");
const searchFilter = document.getElementById("searchFilter");
const cardContainer = document.getElementById("cardContainer");
let students = [];

// Function to generate the HTML markup for student cards
function generateStudentCards(filteredStudents) {
  const cardsHTML = filteredStudents.map(
    (student) => `
      <div class="card">
        <img src="${student.image}" alt="${student.name}" />
        <div class="name">${student.name}</div>
        <div class="item">Location: ${student.location}</div>
        <div class="item">Graduation Date: ${student.graduationDate}</div>
        <div class="item">Skills: ${student.skills.join(", ")}</div>
      </div>
    `
  );

  return cardsHTML.join("");
}

// Function to filter students based on the selected filter and search term
function filterStudents(filter, searchTerm) {
  return students.filter((student) => {
    if (filter === "location") {
      return student.location.toLowerCase().includes(searchTerm);
    } else if (filter === "skills") {
      return student.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm)
      );
    } else if (filter === "graduationdate") {
      const searchTermYear = searchTerm.trim();
      const studentGraduationYear = student.graduationDate.split("-")[0];
      return studentGraduationYear === searchTermYear;
    }
    return false;
  });
}

// Function to display "No students found" message
function showNoStudentsFoundMessage() {
  cardContainer.innerHTML = '<p class="no-students">No students found.</p>';
}

// Function to fetch the JSON data
async function fetchData() {
  try {
    const response = await fetch("../data.json");
    const data = await response.json();
    students = data.students;
    const allStudentCards = generateStudentCards(students);
    cardContainer.innerHTML = allStudentCards;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Event listener for search input
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedFilter = searchFilter.value.toLowerCase();
  const filteredStudents = filterStudents(selectedFilter, searchTerm);
  if (filteredStudents.length === 0) {
    showNoStudentsFoundMessage();
  } else {
    const studentCards = generateStudentCards(filteredStudents);
    cardContainer.innerHTML = studentCards;
  }
});

// Fetch the data and show all students when the page loads
fetchData();

let favoriteCandidates = [];

// Function to add a student to the favorite candidates list
function addToFavorites(name) {
  const student = students.find((student) => student.name === name);
  if (student) {
    favoriteCandidates.push(student);
    console.log("Added to favorites:", student);
    // Perform any other desired actions, such as displaying a success message
  }
}

// Function to generate the HTML markup for favorite student cards
function generateFavoriteCards() {
  const favoriteCardsHTML = favoriteCandidates.map(
    (student) => `
      <div class="card">
        <img src="${student.image}" alt="${student.name}" />
        <div class="name">${student.name}</div>
        <div class="item">Location: ${student.location}</div>
        <div class="item">Graduation Date: ${student.graduationDate}</div>
        <div class="item">Skills: ${student.skills.join(", ")}</div>
      </div>
    `
  );

  return favoriteCardsHTML.join("");
}

// Function to display favorite student cards
function displayFavoriteCards() {
  const favoriteCards = generateFavoriteCards();
  // Replace "favoriteCardContainer" with the ID or class of the container where you want to display the favorite cards
  document.getElementById("favoriteCardContainer").innerHTML = favoriteCards;
}

// Call the displayFavoriteCards function to initially display any existing favorite cards on page load
displayFavoriteCards();