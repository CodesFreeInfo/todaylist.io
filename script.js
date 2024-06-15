const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear existing list
    todoList.innerHTML = '';

    // Render each task in the array
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }

        const actions = document.createElement('div');
        actions.classList.add('actions');

        // Button to toggle completed status
        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
        toggleButton.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });
        actions.appendChild(toggleButton);

        // Button to delete task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        actions.appendChild(deleteButton);

        li.appendChild(actions);
        todoList.appendChild(li);
    });
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = todoInput.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        todoInput.value = '';
        renderTasks();
    }
});

// Initial render
renderTasks();
