document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload
  addTask();
});

const Tasks= [];
let taskIdCounter = 0; 
function addTask(){
const input = document.getElementById('taskInput')
const taskText = input.value.trim();
if (taskText === '') return;
const task = {


    Text : taskText,
    done : false,  };

const tasks = [];
  displayTask(task);
  input.value = '';
}
function displayTask (task){
const list = document.querySelector('.listTasks');
const taskDiv = document.createElement('div');
taskDiv.className = 'task- item';
taskDiv.setAttribute('data-task-id', task.task_id);
const checkbox = document.createElement('input');
checkbox.type = 'checkbox'
checkbox.addEventListener('change', () => doneTask(task.task_id, checkbox));
const label = document.createElement('span')
label.className = 'task-label';
label.textContent = task.Text;
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
}







