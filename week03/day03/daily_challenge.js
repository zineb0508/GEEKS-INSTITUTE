const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement('div');
        moon.classList.add('moon');
        const angle = (i / planet.moons) * 2 * Math.PI;  // distribute moons in a circle
        const orbitRadius = 60;  // how far moons are from the planet
        moon.style.left = `${50 + orbitRadius * Math.cos(angle)}px`;
        moon.style.top = `${50 + orbitRadius * Math.sin(angle)}px`;

        planetDiv.appendChild(moon);
    }

    section.appendChild(planetDiv);
});
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
    }

    form {
      margin-bottom: 20px;
    }

    input[type="text"] {
      padding: 10px;
      width: 200px;
    }

    button {
      padding: 10px;
    }

    .task-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .task-item input[type="checkbox"] {
      margin-right: 10px;
    }

    .task-label {
      flex-grow: 1;
    }

    .task-done {
      text-decoration: line-through;
      color: red;
    }

    .delete-btn {
      background: none;
      border: none;
      color: #888;
      cursor: pointer;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <h1>To-Do List</h1>
  <form id="taskForm">
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button type="submit">Submit</button>
  </form>

  <div class="listTasks"></div>

  <script src="script.js"></script>
</body>
</html>
*/
/*const tasks = [];
let taskIdCounter = 0;

document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const task = {
    task_id: taskIdCounter++,
    text: taskText,
    done: false
  };

  tasks.push(task);
  displayTask(task);
  input.value = '';
}

function displayTask(task) {
  const list = document.querySelector('.listTasks');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-item';
  taskDiv.setAttribute('data-task-id', task.task_id);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => doneTask(task.task_id, checkbox));

  const label = document.createElement('span');
  label.className = 'task-label';
  label.textContent = task.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  deleteBtn.addEventListener('click', () => deleteTask(task.task_id, taskDiv));

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(deleteBtn);

  list.appendChild(taskDiv);
}

function doneTask(id, checkbox) {
  const task = tasks.find(t => t.task_id === id);
  task.done = checkbox.checked;

  const label = checkbox.nextElementSibling;
  if (task.done) {
    label.classList.add('task-done');
  } else {
    label.classList.remove('task-done');
  }
}

function deleteTask(id, taskElement) {
  const index = tasks.findIndex(t => t.task_id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    taskElement.remove();
  }
*/
/* let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

// Function to display the fruits
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

// Function to show pass-by-value and pass-by-reference
const cloneGroceries = () => {
  let user = client;         // Copy the value
  client = "Betty";          // Change original
  console.log("user:", user); // Still "John"

  let shopping = groceries;           // Reference to the same object
  shopping.totalPrice = "35$";        // Changes groceries too
  shopping.other.paid = false;        // Changes groceries too

  console.log("groceries.totalPrice:", groceries.totalPrice); // "35$"
  console.log("groceries.other.paid:", groceries.other.paid); // false
};

// Run the functions
displayGroceries();
cloneGroceries();
*/